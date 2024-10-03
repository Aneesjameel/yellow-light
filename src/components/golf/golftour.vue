<script>
export default {
  data() {
    return {
      currentSlide: 0,
      banners: [
        {
          imageUrl: '/sea.png',
          alt: 'Banner 1',
          color:'absolute inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-pink travelBadge md:top-[47%] top-[42%] right-[17%] md:right-[3%]'
        },
        {
          imageUrl: '/snow.png',
          alt: 'Banner 1',
           color:'absolute inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue travelBadge md:top-[47%] top-[42%] right-[17%] md:right-[3%]'
        },
        {
          imageUrl: '/spring.png',
          alt: 'Banner 1',
           color:'absolute inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue travelBadge md:top-[47%] top-[42%] right-[17%] md:right-[3%]'
        },
        {
          imageUrl: '/sea.png',
          alt: 'Banner 1',
          color:'absolute inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue travelBadge md:top-[47%] top-[42%] right-[17%] md:right-[3%]'
        },
        {
          imageUrl: '/snow.png',
          alt: 'Banner 1',
           color:'absolute inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue travelBadge md:top-[47%] top-[42%] right-[17%] md:right-[3%]'
        },
        {
          imageUrl: '/spring.png',
          alt: 'Banner 1',
           color:'absolute inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue travelBadge md:top-[47%] top-[42%] right-[17%] md:right-[3%]'
        }
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
<div class="priceTour2 bg-light-blue">
<div class="container mx-auto text-center   pb-11 ">
<h5 class="mb-4 text-xl pt-8">조기마감 전에 서두르세요!</h5>
    <strong class="mb-4 text-xl">기간한정 특가 투어</strong>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 ">
  <div class="relative w-full overflow-hidden">
    <!-- Slider container -->
    <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentSlide * (100 / slidesToShow())}%)` }">
      <!-- Slide items -->
      <div v-for="(banner, index) in banners"
        :key="index"
        class="w-full md:w-1/3 flex-shrink-0 p-3 ">
              <div class="h-full  rounded-lg shadow-xl  overflow-hidden rounded-2xl relative">
        <button type="button" :class="banner.color">국내여행</button>
                 <img class="lg:h-256 md:h-256 w-full object-cover object-center  h-auto " :src="banner.imageUrl" :alt="banner.alt" alt="blog">  
                <div class="p-6 text-left bg-white ">
                    <h6 class=" mb-2 text-blue">[패키지] 중국 상하이 4박 5일</h6>
                    <h4 class=" mb-2">#대한항공 #5성급호텔 #쇼핑</h4>
                    <h5 class="text-lg text-lGrey line-through">425,000원~</h5>
                    <p class="amount-bold"><span class="pr-2 text-pink">-30%</span>325,000원~</p>
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




  