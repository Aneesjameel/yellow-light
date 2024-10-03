<script>
export default {
  data() {
    return {
      currentSlide: 0,
      banners: [
        {
          imageUrl: '/bg1.png',
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
  <div class="relative w-full overflow-hidden">
    <!-- Slider container -->
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <!-- Slide items -->
      <div
        v-for="(banner, index) in banners"
        :key="index"
        class="w-full flex-shrink-0 banner1 relative"
      >
        <img :src="banner.imageUrl" :alt="banner.alt" class="w-full h-auto object-cover" />
        <div class="absolute">
      <h2 class="mb-4 text-xl">크루즈여행</h2>
      </div>
      </div>
    </div>

    <!-- Navigation buttons -->
    <button
      class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white px-4 py-2"
      @click="prevSlide"
    >
      &#8592;
    </button>
    <button
      class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white px-4 py-2"
      @click="nextSlide"
    >
      &#8594;
    </button>

    <!-- Dots indicator -->
    
  </div>
</template>
<style scoped>
/* Adjust the width of each slide based on the number of items displayed */
@media (min-width: 768px) {
  .grid-cols-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}

.banner1 {
    div {
       
        left: 50%;
    }
}
</style>
