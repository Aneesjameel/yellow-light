
<script>
export default {
  data() {
    return {
      currentSlide: 0,
      banners: [
        {
          imageUrl: '/top4.png',
          alt: 'Banner 1',
        },
        {
          imageUrl: '/top4.png',
          alt: 'Banner 1',
        },
        {
          imageUrl: '/top4.png',
          alt: 'Banner 1',
        },
        {
          imageUrl: '/top4.png',
          alt: 'Banner 1',
        },
        {
          imageUrl: '/top4.png',
          alt: 'Banner 1',
        },
        {
          imageUrl: '/top4.png',
          alt: 'Banner 1',
        },
        {
          imageUrl: '/top4.png',
          alt: 'Banner 1',
        },
        {
          imageUrl: '/top4.png',
          alt: 'Banner 1',
        },
        {
          imageUrl: '/top4.png',
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
      return window.innerWidth >= 768 ? 3 : 1;
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
<div class="priceTour container mx-auto text-center   pb-11">
<h5 class="mb-4">가장 많은 예약이 있는</h5>
    <button type="button" class="btn text-white bg-blue rounded-full ">이달의 여행상품 TOP 4</button>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 ">
  <div class="relative w-full overflow-hidden">
    <!-- Slider container -->
    <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentSlide * (100 / slidesToShow())}%)` }">
      <!-- Slide items -->
      <div v-for="(banner, index) in banners"
        :key="index"
        class="w-full md:w-1/4 flex-shrink-0 p-3 ">
      
              <div class="h-full  rounded-lg shadow-xl  overflow-hidden rounded-2xl">
        <img class="lg:h-256 md:h-256 w-full object-cover object-center  h-auto " :src="banner.imageUrl" :alt="banner.alt" alt="blog">
         <div class="p-6 text-left  bg-white ">
                  <h6 class=" mb-2">[패키지] 중국 상하이 4박 5일</h6>
                  <h4 class=" mb-2">#대한항공 #5성급호텔 #쇼핑</h4>
                  <p class="amount-bold">325,000원~</p>
                  </div>
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
/* Adjust the width of each slide based on the number of items displayed */
@media (min-width: 768px) {
  .grid-cols-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>




  