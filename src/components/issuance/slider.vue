
<template>
  
  <div class="relative">
    <!-- Main Image Display -->
    <div class="relative w-full h-[400px] overflow-hidden">
      <img
        :src="images[currentIndex]"
        alt="Carousel image"
        class="w-full h-full object-cover"
      />

      <!-- Left Arrow -->
      <div
        @click="prevImage"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 cursor-pointer"
      >
        &#x3c;
      </div>

      <!-- Right Arrow -->
      <div
        @click="nextImage"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 cursor-pointer"
      >
        &#x3e;
      </div>
    </div>

    <!-- Thumbnail Images at Bottom -->
    <div class="flex justify-center space-x-2 mt-4">
      <div
        v-for="(image, index) in images"
        :key="index"
        @click="setCurrentImage(index)"
        class="w-16 h-16 cursor-pointer overflow-hidden border-2"
        :class="{ 'border-blue-500': index === currentIndex, 'border-transparent': index !== currentIndex }"
      >
        <img
          :src="image"
          alt="Thumbnail"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        '/slider1.png',
        '/2.png',
        '/3.png',
        '/4.png',
        '/5.png',
      ],
    };
  },
  methods: {
    nextImage() {
      this.currentIndex =
        (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) %
        this.images.length;
    },
    setCurrentImage(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
/* Custom styles (optional) */
</style>
