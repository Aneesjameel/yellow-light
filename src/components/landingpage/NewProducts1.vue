<template>
  <div
    class="relative p-2 bg-white"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div class="container mx-auto">
      <!-- Slider Title -->
      <div class="flex text-golden items-center">
        <div class="md:w-1/4 w-1/2">
          <h1 class="md:text-5xl text-2xl">New<br />PRODUCTS</h1>
          <div class="flex mt-2">
            <img src="/icons/line.svg" />
            <h1>+ 신제품 더보기</h1>
          </div>
        </div>
        <div class="md:w-3/4 w-1/2">
          <!-- Slider Container -->
          <div class="relative overflow-hidden md:p-10 p-2">
            <!-- Scrollable slider track -->
            <div
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <!-- Grouped Category Items (1 image per slide on mobile, multiple on larger screens) -->
              <div
                v-for="(group, groupIndex) in chunkedSlides"
                :key="groupIndex"
                class="w-full flex-shrink-0 flex justify-center items-center space-x-1"
              >
                <!-- Images within each group -->
                <div
                  v-for="(slide, index) in group"
                  :key="index"
                  class="flex flex-col items-center w-full md:w-auto"
                >
                  <!-- Circular Image -->
                  <div class="p-4 relative">
                    <img :src="slide.image" alt="Category Image" class="h-[240px] w-[240px]" />
                    <p class="mt-2 text-center text-lg">{{ slide.title }}</p>
                    <div
                      class="bg-[#E6610E] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center text-white text-center text-lg absolute right-2 top-2 text-sm"
                    >
                      {{ slide.discount }}
                    </div>
                    <p class="mt-2 text-center font-bold text-lg">${{ slide.title1 }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      startX: 0, // Starting X coordinate of touch
      endX: 0, // Ending X coordinate of touch
      slides: [
        { title: '홈조명', image: '/products/new/1 (1).png', discount: '-10%' },
        { title: '식탁/포인트조명', title1: '10,000', discount: '-10%', image: '/products/new/1 (2).png' },
        { title: '식탁/포인트조명', title1: '10,000', discount: '-10%', image: '/products/new/1 (3).png' },
        { title: '식탁/포인트조명', title1: '10,000', discount: '-10%', image: '/products/new/1 (1).png' },
        { title: '홈조명', title1: '10,000', discount: '-10%', image: '/products/new/1 (4).png' },
        { title: '식탁/포인트조명', title1: '10,000', discount: '-10%', image: '/products/new/1 (3).png' },
        { title: '식탁/포인트조명', title1: '10,000', discount: '-10%', image: '/products/new/1 (2).png' },
        { title: '식탁/포인트조명', title1: '10,000', discount: '-10%', image: '/products/new/1 (2).png' },
        { title: '식탁/포인트조명', title1: '10,000', discount: '-10%', image: '/products/new/1 (1).png' },
      ],
    };
  },
  computed: {
    chunkedSlides() {
      const chunkSize = window.innerWidth < 768 ? 1 : 3; // Show 1 image per slide on mobile
      const chunks = [];
      for (let i = 0; i < this.slides.length; i += chunkSize) {
        chunks.push(this.slides.slice(i, i + chunkSize));
      }
      return chunks;
    },
  },
  mounted() {
    // Automatically cycle through slides every 5 seconds
    setInterval(() => {
      this.nextSlide();
    }, 5000);

    window.addEventListener('resize', () => {
      this.$forceUpdate(); // Update the chunked slides on window resize
    });
  },
  methods: {
    handleTouchStart(event) {
      this.startX = event.touches[0].clientX;
    },
    handleTouchMove(event) {
      this.endX = event.touches[0].clientX;
    },
    handleTouchEnd() {
      if (this.startX - this.endX > 50) {
        // Swipe left (go to the next slide)
        this.nextSlide();
      } else if (this.endX - this.startX > 50) {
        // Swipe right (go to the previous slide)
        this.prevSlide();
      }
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.chunkedSlides.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.chunkedSlides.length) % this.chunkedSlides.length;
    },
  },
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.slider-center {
  transform: translateX(-50%);
  left: 50%;
}
</style>
