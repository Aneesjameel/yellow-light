<template>
  <div class="w-full relative mt-10 p-4 md:p-10 bg-[#FFFBF2]">
    <!-- Slider Title -->
    <h1 class="text-center text-lg md:text-2xl font-semibold mb-6 uppercase">New Product</h1>

    <!-- Slider Container -->
    <div class="relative overflow-hidden px-2 md:px-10">
      <button 
        @click="prevSlide"
        class="absolute left-2 md:left-[5%] top-1/2 transform -translate-y-1/2 text-3xl md:text-5xl h-10 w-10 md:h-20 md:w-20 flex justify-center items-center z-10  shadow-md md:shadow-none">
        <img src="/icons/left.png" class="w-4 md:w-8"/>
      </button>
      <!-- Scrollable slider track -->
      <div 
        class="flex transition-transform duration-500 ease-in-out p-2 md:p-5"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        
        <!-- Grouped Category Items (1 image per slide on mobile, multiple on larger screens) -->
        <div
          v-for="(group, groupIndex) in chunkedSlides"
          :key="groupIndex"
          class="w-full flex-shrink-0 flex justify-center items-center space-x-1">
          
          <!-- Images within each group -->
          <div
            v-for="(slide, index) in group"
            :key="index"
            class="flex flex-col items-center w-full md:w-auto"> <!-- Full width on mobile, auto width on larger screens -->
            
            <!-- Circular Image -->
            <div class="p-2 md:p-4">
              <img :src="slide.image" alt="Category Image" class="h-[120px] w-[120px] md:h-[240px] md:w-[240px] object-cover ">
              <p class="mt-2 text-center text-sm md:text-lg">{{ slide.title }}</p>
              <p class="mt-1 text-center font-bold text-sm md:text-lg">${{ slide.title1 }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Right Arrow -->
      <button 
        @click="nextSlide"
        class="absolute right-2 md:right-[5%] top-1/2 transform -translate-y-1/2 text-3xl md:text-5xl h-10 w-10 md:h-20 md:w-20 flex justify-center items-center z-10  shadow-md md:shadow-none">
        <img src="/icons/right.png" class="w-4 md:w-8"/>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        { title: '홈조명', title1: '10,000', image: '/products/new/1 (4).png' },
        { title: '식탁/포인트조명', title1: '10,000', image: '/products/new/1 (5).png' },
        { title: '식탁/포인트조명', title1: '10,000', image: '/products/new/1 (6).png' },
        { title: '식탁/포인트조명', title1: '10,000', image: '/products/new/1 (7).png' },
        { title: '홈조명', title1: '10,000', image: '/products/new/1 (4).png' },
        { title: '식탁/포인트조명', title1: '10,000', image: '/products/new/1 (5).png' },
        { title: '식탁/포인트조명', title1: '10,000', image: '/products/new/1 (6).png' },
        { title: '식탁/포인트조명', title1: '10,000', image: '/products/new/1 (7).png' },
      ],
    };
  },
  computed: {
    chunkedSlides() {
      const chunkSize = window.innerWidth < 768 ? 1 : 4;
      const chunks = [];
      for (let i = 0; i < this.slides.length; i += chunkSize) {
        chunks.push(this.slides.slice(i, i + chunkSize));
      }
      return chunks;
    },
  },
  mounted() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.chunkedSlides.length;
    }, 5000);
    
    window.addEventListener('resize', () => {
      this.$forceUpdate();
    });
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.chunkedSlides.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.chunkedSlides.length) % this.chunkedSlides.length;
    }
  }
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

.text-transform {
  text-transform: uppercase;
}

.slider-center {
  transform: translateX(-50%);
  left: 50%;
}
</style>
