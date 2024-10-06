

<template>
    <div class="relative w-full md:h-screen overflow-hidden md:slider">
      <!-- Slider track -->
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <!-- Slide items -->
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="w-full flex-shrink-0 md:h-screen h-[180px]  bg-cover bg-center xs:images2"
          :style="{ backgroundImage: `url(${slide.image})` }">
          <!-- Overlay with text content (specific to each slide) -->
          <div class="absolute inset-0  bg-opacity-50 flex items-center justify-center">
            <div class="text-center text-white">
              <h1 class="text-6xl font-serif text-yellow-400">{{ slide.title }}</h1>
              <p class="mt-4 text-lg">{{ slide.subtitle }}</p>
              <div class="mt-8">
               
              </div>
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
            :style="{ width: (1 / slides.length) * 100 + '%' }">
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
  .images2{
    background-size: 100%;
    background-repeat: no-repeat;
  }
  </style>