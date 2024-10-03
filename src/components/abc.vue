<template>
  <div class="container mx-auto px-4">
    <!-- Tabs Section -->
    <div class="flex justify-center space-x-4 border-b mb-4">
      <button
        class="text-lg font-semibold p-2 border-b-2"
        :class="{ 'border-black': activeTab === 'domestic' }"
        @click="activeTab = 'domestic'"
      >
        국내여행
      </button>
      <button
        class="text-lg font-semibold p-2 border-b-2"
        :class="{ 'border-black': activeTab === 'overseas' }"
        @click="activeTab = 'overseas'"
      >
        당일치기
      </button>
    </div>

    <!-- Grid Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <div
        v-for="(item, index) in paginatedBanners"
        :key="index"
        class="border rounded-lg shadow-md p-4"
      >
        <img :src="item.imageUrl" :alt="item.alt" class="rounded-lg mb-2 w-full h-48 object-cover" />
        <h3 class="font-semibold text-lg mb-2">{{ item.title }}</h3>
        <p class="text-sm text-gray-500 mb-2">{{ item.details }}</p>
        <p class="font-bold">{{ item.price }}원~</p>
      </div>
    </div>

    <!-- Pagination Section -->
    <div class="flex justify-between items-center space-x-2">
      <button
        class="px-3 py-1 bg-gray-300 text-black rounded-md"
        :disabled="currentPage === 1"
        @click="prevPage"
      >
        이전
      </button>

      <div class="flex space-x-2">
        <button
          v-for="n in totalPages"
          :key="n"
          :class="{
            'bg-gray-800 text-white': currentPage === n,
            'bg-gray-300 text-black': currentPage !== n
          }"
          class="px-3 py-1 rounded-md focus:outline-none"
          @click="goToPage(n)"
        >
          {{ n }}
        </button>
      </div>

      <button
        class="px-3 py-1 bg-gray-300 text-black rounded-md"
        :disabled="currentPage === totalPages"
        @click="nextPage"
      >
        다음
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'domestic',
      currentPage: 1,
      itemsPerPage: 6,
      banners: [
        {
          imageUrl: '/top4.png',
          alt: 'Banner 1',
          title: '[패키지] 중국 상하이 4박 5일',
          details: '#대한항공 #5성급호텔 #쇼핑',
          price: '325,000'
        },
        {
          imageUrl: '/top4.png',
          alt: 'Banner 2',
          title: '[자유여행] 스위스 6박 7일',
          details: '#스위스 #호텔 #자연경관',
          price: '325,000'
        },
        {
          imageUrl: '/top4.png',
          alt: 'Banner 3',
          title: '[패키지] 미국 라스베이거스',
          details: '#미국 #대자연 #관광지',
          price: '325,000'
        },
        // Add more banners here...
      ]
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.banners.length / this.itemsPerPage);
    },
    paginatedBanners() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = this.currentPage * this.itemsPerPage;
      return this.banners.slice(start, end);
    }
  },
  methods: {
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  }
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
