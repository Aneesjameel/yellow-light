<template>
  <div
    class="relative w-full md:h-screen overflow-hidden md:slider"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <!-- Slider track -->
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <!-- Slide items -->
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="w-full flex-shrink-0 md:h-screen h-[180px] bg-cover bg-center xs:images2"
        :style="{ backgroundImage: `url(${slide.image})` }"
      >
        <!-- Overlay with text content (specific to each slide) -->
        <div class="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <div class="text-center text-white">
            <h1 class="text-6xl font-serif text-yellow-400">{{ slide.title }}</h1>
            <p class="mt-4 text-lg">{{ slide.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Horizontal Line Navigation (clickable) -->
    <div class="absolute md:bottom-4 bottom-1 left-0 container slider-center px-8">
      <div class="h-1 w-full bg-gray-300 flex relative">
        <!-- Create segments for each slide, each clickable -->
        <div
          v-for="(slide, index) in slides"
          :key="index"
          @click="currentSlide = index"
          :class="['h-1 transition-all duration-300 ease-in-out cursor-pointer', currentSlide === index ? 'bg-white-20' : 'bg-gray-400']"
          :style="{ width: (1 / slides.length) * 100 + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      startX: 0, // to store the starting position of the touch
      endX: 0, // to store the ending position of the touch
      slides: [
        {
          image: "/wallpaper/11.png", // Image path in the public folder
        },
        {
          image: "/wallpaper/22.png", // Image path in the public folder
        },
      ],
    };
  },
  mounted() {
    // Automatically cycle through slides every 5 seconds
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 5000);
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
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
  },
};
</script>

<style scoped>
.slider-center {
  transform: translateX(-50%);
  left: 50%;
}
.slider {
  margin-top: -81px;
}
.images2 {
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>
