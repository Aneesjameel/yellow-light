



<script>
export default {
  data() {
    return {
      currentSlide: 0,
      banners: [
        {
          imageUrl: '/Ellipse 7.png',
          alt: 'Banner 1',
        },
        {
          imageUrl: '/Ellipse 8.png',
          alt: 'Banner 1',
           
        },
        {
          imageUrl: '/Ellipse 9.png',
          alt: 'Banner 1',
           
        },
        {
          imageUrl: '/Ellipse 10.png',
          alt: 'Banner 1',
          
        },
        {
          imageUrl: '/Ellipse 11.png',
          alt: 'Banner 1',
           
        },
        {
          imageUrl: '/Ellipse 12.png',
          alt: 'Banner 1',
           
        },
        {
          imageUrl: '/Ellipse 13.png',
          alt: 'Banner 1',
        },
      ]
    }
  },
  methods: {
    prevSlide() {
      const maxSlides = Math.floor(this.banners.length / this.slidesToShow()) - 1;
      this.currentSlide =
        this.currentSlide === 0 ? maxSlides : this.currentSlide - 1;
    },
    nextSlide() {
      const maxSlides = Math.floor(this.banners.length / this.slidesToShow()) - 1;
      this.currentSlide =
        this.currentSlide === maxSlides ? 0 : this.currentSlide + 1;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
    slidesToShow() {
      return window.innerWidth >= 768 ? 6 : 3; // 6 for desktop, 1 for mobile
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateSlideCount);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateSlideCount);
  },
  methods: {
    updateSlideCount() {
      this.currentSlide = Math.floor(this.currentSlide / this.slidesToShow());
    },
    slidesToShow() {
      return window.innerWidth >= 768 ? 6 : 3;
    },
    prevSlide() {
      const slidesToShow = this.slidesToShow();
      this.currentSlide =
        this.currentSlide === 0 ? this.banners.length - slidesToShow : this.currentSlide - 1;
    },
    nextSlide() {
      const slidesToShow = this.slidesToShow();
      this.currentSlide =
        this.currentSlide >= this.banners.length - slidesToShow
          ? 0
          : this.currentSlide + 1;
    },
  },
};
</script>
<template>
<div class="travelProduct mt-11 mb-11 pb-11 border-custom-1">
    <div class="container mx-auto">
    <h1 class="text-center mb-11">나눔투어의 다양한 여행상품을 둘러보세요!</h1>
    <!-- Slider container -->
     <div class="relative w-full overflow-hidden">
    <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentSlide * (100 / slidesToShow())}%)` }">
      <!-- Slide items -->
     
      <div v-for="(banner, index) in banners" :key="index" class="md:w-1/6 flex-shrink-0 p-3 text-center ">
               <div class="destination text-center">
                <img :src="banner.imageUrl" :alt="banner.alt" class="mb-5 radius-100 mx-auto"> 
                <h3 class="text-center">크루즈여행</h3>
              </div>  
      </div>      
    </div>


    <!-- Navigation buttons -->
     <!-- Navigation buttons (modified to be bigger, round, and white) -->
    <button
      class="absolute top-1/2 bg-white left-4 transform -translate-y-1/2 text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
      @click="prevSlide"
    >
      &#8592;
    </button>
    <button
      class="absolute top-1/2 bg-white right-4 transform -translate-y-1/2 text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
      @click="nextSlide"
    >
      &#8594;
    </button>

    <!-- Dots indicator -->
    
</div>
  </div>
 </div>
</template>






  