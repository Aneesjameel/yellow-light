<template>
  <div
    class="container mx-auto relative mt-10"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <!-- Slider Title -->
    <h1 class="text-6xl font-semibold mb-6 text-capitalize text-[#ABA79F] -rotate-90 text-abc absolute">Real Show Room</h1>

    <!-- Slider Container -->
    <div class="relative overflow-hidden md:p-10 p-2 z-10">
      <h2 class="text-lg text-gold  md:pl-24 pl-3 font-bold">약 231,242명이 사랑해 주신<br>
        노랑조명 고객님들의 생생한 실제 후기</h2>

      <!-- Scrollable slider track -->
      <div 
        class="flex transition-transform duration-500 ease-in-out  py-5"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        
        <!-- Grouped Category Items (1 image per slide on mobile, multiple on larger screens) -->
        <div
          v-for="(group, groupIndex) in chunkedSlides"
          :key="groupIndex"
          class="w-full flex-shrink-0 flex justify-center items-center ">
          
          <!-- Images within each group -->
          <div
            v-for="(slide, index) in group"
            :key="index"
            class="flex flex-col items-center w-full md:w-auto"> <!-- Full width on mobile, auto width on larger screens -->
            
            <!-- Circular Image -->
            <div class="p-4 relative">
              <img :src="slide.image" alt="Category Image" class="h-[441px] w-[320px]">
              <p class="mt-2 text-center text-sm absolute bottom-7 left-5  text-white  w-[312px] mx-auto" >{{ slide.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

   <!-- Horizontal Line Navigation (clickable) -->
<div class="absolute md:bottom-4 bottom-1 left-0 container slider-center w-2/3">
  <div class="h-1 w-full bg-gray-300 flex relative">
    <!-- Create segments for each slide group, each clickable -->
    <div
      v-for="(group, index) in chunkedSlides"
      :key="index"
      @click="currentSlide = index"
      :class="['h-1 transition-all duration-300 ease-in-out cursor-pointer', currentSlide === index ? 'bg-[#ABA79F]' : 'bg-gray-200']"
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
      startX: 0, // Starting X coordinate of touch
      endX: 0, // Ending X coordinate of touch
      slides: [
        { title: '좋아요. 부엌에서 사용하기 은은해서 부담도 없고..', image: '/products/bestshowroom/1.png' },
        { title: '좋아요. 부엌에서 사용하기 은은해서 부담도 없고..', image: '/products/bestshowroom/2.png' },
        { title: '좋아요. 부엌에서 사용하기 은은해서 부담도 없고..', image: '/products/bestshowroom/3.png' },
        { title: '좋아요. 부엌에서 사용하기 은은해서 부담도 없고..', image: '/products/bestshowroom/1.png' },
        { title: '좋아요. 부엌에서 사용하기 은은해서 부담도 없고..', image: '/products/bestshowroom/2.png' },
        { title: '좋아요. 부엌에서 사용하기 은은해서 부담도 없고..', image: '/products/bestshowroom/3.png' },
      ],
    };
  },
  computed: {
  chunkedSlides() {
    const chunkSize = window.innerWidth < 768 ? 1 : 3; // Show 1 image per slide on mobile, 3 on desktop
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
.text-abc {
  height: 200px;
    width: 500px;
    text-align: left;
    position: absolute;
    left: -94px;
    top: 168px;
    z-index: 1;
    font-size: 67px;
}

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
@media screen and (max-width:767px) {
  .text-abc {
    height: 200px;
    width: 500px;
    text-align: left;
    position: absolute;
    left: -127px;
    top: 188px;
    z-index: 1;
    font-size: 53px;
}
}
</style>
