<template>
  <div class="w-full relative p-10">
    <!-- Slider Title -->
    <h2 class="text-center text-2xl font-semibold mb-6 text-gold">All Categories</h2>

    <!-- Slider Container -->
    <div
      class="relative overflow-hidden md:pl-10 md:pr-10 pt-10"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <!-- Scrollable slider track -->
      <div
        class="flex transition-transform duration-500 ease-in-out justify-center items-center"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <!-- Grouped Category Items -->
        <div
          v-for="(group, groupIndex) in chunkedSlides"
          :key="groupIndex"
          class="w-full flex-shrink-0 flex md:justify-around items-top md:flex-shrink-0"
        >
          <!-- Images within each group -->
          <div
            v-for="(slide, index) in group"
            :key="index"
            class="flex flex-col w-1/4"
          >
            <!-- Circular Image -->
            <div
              class="bg-gray-200 flex rounded-[50%] p-4 h-[64px] w-[64px] md:h-[100px] md:w-[100px] justify-center items-center mx-auto"
            >
              <img
                :src="slide.image"
                alt="Category Image"
                class="h-[48px] w-[48px] md:h-[62px] md:w-[62px] justify-end items-end mx-auto"
              />
            </div>
            <!-- Category Name -->
            <p class="mt-2 text-sm text-center">{{ slide.title }}</p>
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
      currentSlide: 0, // Current active slide index
      startX: 0, // Touch start position
      deltaX: 0, // Distance moved during swipe
      slides: [
        { title: "홈조명", image: "/products/all/image 5.png" },
        { title: "식탁/포인트조명", image: "/products/all/image 6.png" },
        { title: "주방/욕실조명", image: "/products/all/image 8.png" },
        { title: "레일등", image: "/products/all/image 7.png" },
        { title: "매입등", image: "/products/all/image 9.png" },
        { title: "벽조명", image: "/products/all/image 10.png" },
        { title: "현관/베란다조명", image: "/products/all/image 11.png" },
        { title: "스탠드조명", image: "/products/all/image 12.png" },
        { title: "추가조명1", image: "/products/all/image 13.png" },
        { title: "홈조명", image: "/products/all/image 5.png" },
      ],
    };
  },
  computed: {
    chunkedSlides() {
      const chunkSize = window.innerWidth < 768 ? 4 : 10; // Show 4 items per slide on mobile, 10 on larger screens
      const chunks = [];
      for (let i = 0; i < this.slides.length; i += chunkSize) {
        chunks.push(this.slides.slice(i, i + chunkSize));
      }
      return chunks;
    },
  },
  mounted() {
    this.updateSlidesOnResize(); // Initial setup
    window.addEventListener("resize", this.updateSlidesOnResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateSlidesOnResize);
  },
  methods: {
    handleTouchStart(event) {
      this.startX = event.touches[0].clientX;
      this.deltaX = 0;
    },
    handleTouchMove(event) {
      this.deltaX = event.touches[0].clientX - this.startX;
    },
    handleTouchEnd() {
      const threshold = 50; // Minimum swipe distance to trigger a change
      if (this.deltaX > threshold) {
        this.prevSlide();
      } else if (this.deltaX < -threshold) {
        this.nextSlide();
      }
    },
    nextSlide() {
      this.currentSlide =
        (this.currentSlide + 1) % this.chunkedSlides.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.chunkedSlides.length) %
        this.chunkedSlides.length;
    },
    updateSlidesOnResize() {
      this.$forceUpdate(); // Force re-render to adjust for resolution changes
      const maxSlides = this.chunkedSlides.length;
      if (this.currentSlide >= maxSlides) {
        this.currentSlide = maxSlides - 1;
      }
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
