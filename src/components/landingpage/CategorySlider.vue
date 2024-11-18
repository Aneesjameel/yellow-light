<template>
  <div class="w-full relative mx-auto container pt-[120px]">
    <!-- Slider Title -->
    <h2 class="text-center text-2xl font-semibold mb-6 text-gold">All Categories</h2>

    <!-- Swiper Slider -->
    <swiper
      :slides-per-view="slidesPerView"
      :space-between="30"
      :loop="false"
      :pagination="{ clickable: true }"
      :navigation="false"
      class="mySwiper"
      @slideChange="onSlideChange"
      :breakpoints="breakpoints"
    >
      <!-- Grouped Category Items -->
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="flex flex-col ">
          <!-- Circular Image -->
          <div
            class="bg-gray-200 flex rounded-[50%]  h-[64px] w-[64px] md:h-[100px] md:w-[100px] justify-center items-center mx-auto"
          >
            <img
              :src="slide.image"
              alt="Category Image"
              class="h-[48px] w-[48px] md:h-[62px] md:w-[62px] justify-end items-end mx-auto"
            />
          </div>
          <!-- Category Name -->
          <p class="mt-2 text-sm text-center">{{ slide.title }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      slides: [
        { title: "홈조명", image: "/products/all/image 5.png" },
        { title: "식탁/포인트조명", image: "/products/all/image 6.png" },
        { title: "주방/욕실조명", image: "/products/all/image 8.png" },
        { title: "레일등", image: "/products/all/image 7.png" },
        { title: "매입등", image: "/products/all/image 9.png" },
        { title: "벽조명", image: "/products/all/image 10.png" },
        { title: "현관/베란다조명", image: "/products/all/image 11.png" },
        { title: "스탠드조명", image: "/products/all/image 12.png" },
        { title: "추가조명1", image: "/products/all/image 13.png" },
        { title: "홈조명", image: "/products/all/image 5.png" },
      ],
      slidesPerView: 4 // default slides per view for mobile/tablet
    };
  },
  computed: {
    breakpoints() {
      return {
        640: {
          slidesPerView: 2, // 2 items per view on small screens (mobile)
        },
        1024: {
          slidesPerView: this.slides.length, // Show all items on large screens (desktop)
          loop: false, // Disable looping
        },
      };
    }
  },
  methods: {
    onSlideChange(swiper) {
      // Optionally handle the slide change
      console.log("Slide changed to index:", swiper.activeIndex);
    }
  }
};
</script>

<style scoped>
.swiper-slide {
  margin-right:28px !important
}

.swiper-pagination-bullet {
  background-color: #333;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  opacity: 0.6;
}

.swiper-pagination-bullet-active {
  background-color: #007BFF;
  opacity: 1;
}
</style>
