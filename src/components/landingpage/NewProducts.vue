<template>
  <div class="w-full relative mt-10 p-10 bg-[#FFFBF2]">
    <!-- Slider Title -->
    <h2 class="text-center text-2xl font-semibold mb-6 text-capitalize">New Products</h2>

    <!-- Slider Container -->
    <div class="relative overflow-hidden p-10">
      <button 
        @click="prevSlide"
        class="absolute left-[15%] top-1/2 transform -translate-y-1/2 text-5xl h-20 w-20 flex justify-center items-center z-10">
        <
      </button>
      <!-- Scrollable slider track -->
      <div 
        class="flex transition-transform duration-500 ease-in-out p-5"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        
        <!-- Grouped Category Items (1 image per slide on mobile, 8 on larger screens) -->
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
            <div class=" p-4">
              <img :src="slide.image" alt="Category Image" class="h-[240px] w-[240px]">
              <p class="mt-2 text-center text-lg">{{ slide.title }}</p>
              <p class="mt-2 text-center font-bold text-lg">${{ slide.title1 }}</p>
            </div>
             <!-- Right Arrow -->
      <button 
        @click="nextSlide"
        class="absolute right-[15%] top-1/2 transform -translate-y-1/2 text-5xl h-20 w-20 flex justify-center items-center z-10">
       >
      </button>
         
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
      slides: [
        { title: '홈조명',title: '홈조명', image: '/products/new/1 (4).png' },
        { title: '식탁/포인트조명',title1: '10,000', image: '/products/new/1 (5).png' },
        { title: '식탁/포인트조명',title1: '10,000', image: '/products/new/1 (6).png' },
        { title: '식탁/포인트조명',title1: '10,000', image: '/products/new/1 (7).png' },
        { title: '홈조명',title1: '10,000', image: '/products/new/1 (4).png' },
        { title: '식탁/포인트조명',title1: '10,000', image: '/products/new/1 (5).png' },
        { title: '식탁/포인트조명',title1: '10,000', image: '/products/new/1 (6).png' },
        { title: '식탁/포인트조명',title1: '10,000', image: '/products/new/1 (7).png' },
      ],
    };
  },
  computed: {
    // Group slides into chunks of 1 image for mobile and 8 images for larger screens
    chunkedSlides() {
      const chunkSize = window.innerWidth < 768 ? 1 : 4; // Show 1 image per slide on mobile
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
      this.currentSlide = (this.currentSlide + 1) % this.chunkedSlides.length;
    }, 5000);
    
    window.addEventListener('resize', () => {
      this.$forceUpdate(); // Update the chunked slides on window resize
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

.slider-center {
  transform: translateX(-50%);
  left: 50%;
}
</style>
