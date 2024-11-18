<template>
  <div class="relative mt-10 p-2">
    <div class="container mx-auto py-10">
      <!-- Swiper Slider -->
      <swiper
        class="mySwiper"
        :slides-per-view="1"
        :space-between="10"
        :pagination="{ clickable: true }" 
        loop="true"
      >
        <swiper-slide>
          <div class="flex items-center ">
            <div>
              <img
                src="/banner/Ad1.png"
                alt="Ad 1"
                class="object-cover"
              />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex items-center ">
            <div>
              <img
                src="/banner/Ad2.png"
                alt="Ad 2"
                class="object-cover"
              />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from 'swiper/modules';
import "swiper/swiper-bundle.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style scoped>
/* Customize the pagination bullets */
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
