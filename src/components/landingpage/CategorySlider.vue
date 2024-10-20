<template>
  <div class="w-full relative p-10">
    <!-- Slider Title -->
    <h2 class="text-center text-2xl font-semibold mb-6 text-gold">All Categories</h2>

    <!-- Slider Container -->
    <div class="relative overflow-hidden pl-10 pr-10 pt-10">
      <!-- Scrollable slider track -->
      <div 
        class="flex transition-transform duration-500 ease-in-out "
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        
        <!-- Grouped Category Items (1 image per slide on mobile, 8 on larger screens) -->
        <div
          v-for="(group, groupIndex) in chunkedSlides"
          :key="groupIndex"
          class="w-full flex-shrink-0 flex justify-around items-center space-x-4">
          
          <!-- Images within each group -->
          <div
            v-for="(slide, index) in group"
            :key="index"
            class="flex flex-col items-center w-full md:w-auto"> <!-- Full width on mobile, auto width on larger screens -->
            
            <!-- Circular Image -->
            <div class="bg-gray-200 rounded-[50%] p-4">
              <img :src="slide.image" alt="Category Image" class="h-16 w-16">
            </div>
            
            <!-- Category Name -->
            <p class="mt-2 text-sm text-center">{{ slide.title }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Horizontal Line Navigation (clickable) -->
    <div class="absolute bottom-2 left-0 w-full flex justify-center">
      <!-- Create segments for each slide group, each clickable -->
      <div class="h-1 w-3/4 bg-gray-300 flex relative">
        <div
          v-for="(group, index) in chunkedSlides"
          :key="index"
          @click="currentSlide = index"
          :class="['h-1 transition-all duration-300 ease-in-out cursor-pointer', currentSlide === index ? 'bg-black' : 'bg-gray-400']"
          :style="{ width: (1 / chunkedSlides.length) * 100 + '%' }">
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
        { title: '홈조명', image: '/products/all/image 5.png' },
        { title: '식탁/포인트조명', image: '/products/all/image 6.png' },
        { title: '주방/욕실조명', image: '/products/all/image 8.png' },
        { title: '레일등', image:'/products/all/image 7.png' },
        { title: '매입등', image: '/products/all/image 9.png' },
        { title: '벽조명', image: '/products/all/image 10.png' },
        { title: '현관/베란다조명', image: '/products/all/image 11.png' },
        { title: '스탠드조명', image: '/products/all/image 12.png' },
        { title: '추가조명1', image: '/products/all/image 13.png' },
        { title: '홈조명', image: '/products/all/image 5.png' },
        { title: '식탁/포인트조명', image: '/products/all/image 6.png' },
        { title: '주방/욕실조명', image: '/products/all/image 8.png' },
        { title: '레일등', image:'/products/all/image 7.png' },
        { title: '매입등', image: '/products/all/image 9.png' },
        { title: '벽조명', image: '/products/all/image 10.png' },
        { title: '현관/베란다조명', image: '/products/all/image 11.png' },
        { title: '스탠드조명', image: '/products/all/image 12.png' },
        { title: '추가조명1', image: '/products/all/image 13.png' },
        { title: '홈조명', image: '/products/all/image 5.png' },
        { title: '식탁/포인트조명', image: '/products/all/image 6.png' },
      ],
    };
  },
  computed: {
    // Group slides into chunks of 1 image for mobile and 8 images for larger screens
    chunkedSlides() {
      const chunkSize = window.innerWidth < 768 ? 1 : 10; // Show 1 image per slide on mobile
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
