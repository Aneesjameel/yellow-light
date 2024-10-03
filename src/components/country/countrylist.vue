
<script>
export default {
  data() {
    return {
      currentSlide: 0,
      banners: [
        {
          imageUrl: '/1.png',
          text:'중국',
          alt: 'Banner 1',
        },
        {
          imageUrl: '/2.png',
          text:'일본',
          alt: 'Banner 1',
        },
        {
          imageUrl: '/3.png',
          text:'미국',
          alt: 'Banner 1',
        },
        {
          imageUrl: '/4.png',
          text:'아시아',
          alt: 'Banner 1',
        },
        {
          imageUrl: '/5.png',
          text:'유럽',
          alt: 'Banner 1',
        },
        {
          imageUrl: '/1.png',
          text:'중국',
          alt: 'Banner 1',
        },
        {
          imageUrl: '/2.png',
          text:'중국',
          alt: 'Banner 1',
        },
        {
          imageUrl: '/3.png',
          text:'중국',
          alt: 'Banner 1',
        },
        {
          imageUrl: '/4.png',
          text:'중국',
          alt: 'Banner 1',
        },
      ],
    };
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
      return window.innerWidth >= 768 ? 3 : 1; // 3 for desktop, 1 for mobile
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
      return window.innerWidth >= 768 ? 5 : 1;
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
<div class="priceTour container mx-auto text-center   pb-11 pt-10 mt-5">
<div class="mb-2  text-xl text-left px-7 font-bold">어디로 떠나고 싶으신가요?</div>
    <section class="text-gray-600 body-font">
        <div class="container px-6 py-8 ">
  <div class="relative w-full overflow-hidden">
    <!-- Slider container -->
    <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentSlide * (100 / slidesToShow())}%)` }">
      <!-- Slide items -->
      <div v-for="(banner, index) in banners"
        :key="index"
        class="w-full md:w-1/5 flex-shrink-0 p-3 ">
      
              <div class="h-full   shadow-xl  overflow-hidden relative">
        
        <router-link to="CountryPage2"><img class="lg:h-256 md:h-256 w-full object-cover object-center  h-auto " :src="banner.imageUrl" :alt="banner.alt" alt="blog"></router-link>
        <div class="mb-2  text-xl text-left px-7 font-bold absolute bannerText text-white">{{ banner.text }}</div>
                   </div>
                  
      </div>
    </div>

    <!-- Navigation buttons -->
     <!-- Navigation buttons (modified to be bigger, round, and white) -->
    <button
      class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
      @click="prevSlide"
    >
      &#8592;
    </button>
    <button
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
      @click="nextSlide"
    >
      &#8594;
    </button>

    <!-- Dots indicator -->
    
  </div>
 </div>
 </section>
 </div>
</template>


<style scoped>
.bannerText{
    z-index: 1;
    bottom: 10%;
    left:50%;
    transform: translate(-50%,-50%);
}
/* Adjust the width of each slide based on the number of items displayed */
@media (min-width: 768px) {
  .grid-cols-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>




  