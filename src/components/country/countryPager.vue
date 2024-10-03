

<script>
import TabsComponentOne from '../TabComponentOne.vue';

export default {
  components: {
    TabsComponentOne,
  },
  data() {
    return {
      currentPage: 1,  // Starting page
      itemsPerPage: 10,  // Number of items per page
      totalItems: 60,  // Total number of items (you can adjust this as needed)
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    }
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    }
  }
};
</script>

<template>
<div class="priceTour container mx-auto    pb-11 mt-10">

    <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 ">
  <div class="relative w-full overflow-hidden">
     <TabsComponentOne>
      <template #tab1>
     
        <div class="flex transition-transform duration-500 ease-in-out flex-wrap">
        <div class="w-full md:w-1/4 flex-shrink-0 p-3">
            <div class="h-full rounded-lg shadow-xl overflow-hidden rounded-2xl">
                <img class="lg:h-256 md:h-256 w-full object-cover object-center h-auto" src="/top4.png" alt="Banner 1">
                <div class="p-6 text-left bg-white"><h6 class="mb-2">[패키지] 중국 상하이 4박 5일</h6><h4 class="mb-2">#대한항공 #5성급호텔 #쇼핑</h4>
                    <p class="amount-bold">325,000원~</p>
                </div>
            </div>
        </div>
          <div class="w-full md:w-1/4 flex-shrink-0 p-3">
            <div class="h-full rounded-lg shadow-xl overflow-hidden rounded-2xl">
                <img class="lg:h-256 md:h-256 w-full object-cover object-center h-auto" src="/top4.png" alt="Banner 1">
                <div class="p-6 text-left bg-white"><h6 class="mb-2">[패키지] 중국 상하이 4박 5일</h6><h4 class="mb-2">#대한항공 #5성급호텔 #쇼핑</h4>
                    <p class="amount-bold">325,000원~</p>
                </div>
            </div>
        </div>
          <div class="w-full md:w-1/4 flex-shrink-0 p-3">
            <div class="h-full rounded-lg shadow-xl overflow-hidden rounded-2xl">
                <img class="lg:h-256 md:h-256 w-full object-cover object-center h-auto" src="/top4.png" alt="Banner 1">
                <div class="p-6 text-left bg-white"><h6 class="mb-2">[패키지] 중국 상하이 4박 5일</h6><h4 class="mb-2">#대한항공 #5성급호텔 #쇼핑</h4>
                    <p class="amount-bold">325,000원~</p>
                </div>
            </div>
        </div>
          <div class="w-full md:w-1/4 flex-shrink-0 p-3">
            <div class="h-full rounded-lg shadow-xl overflow-hidden rounded-2xl">
                <img class="lg:h-256 md:h-256 w-full object-cover object-center h-auto" src="/top4.png" alt="Banner 1">
                <div class="p-6 text-left bg-white"><h6 class="mb-2">[패키지] 중국 상하이 4박 5일</h6><h4 class="mb-2">#대한항공 #5성급호텔 #쇼핑</h4>
                    <p class="amount-bold">325,000원~</p>
                </div>
            </div>
        </div>
         <div class="w-full md:w-1/4 flex-shrink-0 p-3">
            <div class="h-full rounded-lg shadow-xl overflow-hidden rounded-2xl">
                <img class="lg:h-256 md:h-256 w-full object-cover object-center h-auto" src="/top4.png" alt="Banner 1">
                <div class="p-6 text-left bg-white"><h6 class="mb-2">[패키지] 중국 상하이 4박 5일</h6><h4 class="mb-2">#대한항공 #5성급호텔 #쇼핑</h4>
                    <p class="amount-bold">325,000원~</p>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/4 flex-shrink-0 p-3">
            <div class="h-full rounded-lg shadow-xl overflow-hidden rounded-2xl">
                <img class="lg:h-256 md:h-256 w-full object-cover object-center h-auto" src="/top4.png" alt="Banner 1">
                <div class="p-6 text-left bg-white"><h6 class="mb-2">[패키지] 중국 상하이 4박 5일</h6><h4 class="mb-2">#대한항공 #5성급호텔 #쇼핑</h4>
                    <p class="amount-bold">325,000원~</p>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/4 flex-shrink-0 p-3">
            <div class="h-full rounded-lg shadow-xl overflow-hidden rounded-2xl">
                <img class="lg:h-256 md:h-256 w-full object-cover object-center h-auto" src="/top4.png" alt="Banner 1">
                <div class="p-6 text-left bg-white"><h6 class="mb-2">[패키지] 중국 상하이 4박 5일</h6><h4 class="mb-2">#대한항공 #5성급호텔 #쇼핑</h4>
                    <p class="amount-bold">325,000원~</p>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/4 flex-shrink-0 p-3">
            <div class="h-full rounded-lg shadow-xl overflow-hidden rounded-2xl">
                <img class="lg:h-256 md:h-256 w-full object-cover object-center h-auto" src="/top4.png" alt="Banner 1">
                <div class="p-6 text-left bg-white"><h6 class="mb-2">[패키지] 중국 상하이 4박 5일</h6><h4 class="mb-2">#대한항공 #5성급호텔 #쇼핑</h4>
                    <p class="amount-bold">325,000원~</p>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-center items-center space-x-2 mt-4">
    <!-- Left Arrow -->
    <button @click="previousPage" :disabled="currentPage === 1" class="px-3 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300" aria-label="Previous Page">
      &lt;
    </button>
    
    <!-- Page Numbers -->
    <span
      v-for="page in totalPages"
      :key="page"
      @click="goToPage(page)"
      :class="{
        'px-3 py-2 rounded cursor-pointer': true,
        'bg-blue-500 bg-greyTone': currentPage === page,
        'bg-gray-200 text-gray-600 hover:bg-gray-300': currentPage !== page
      }"
    >
      {{ page }}
    </span>
    
    <!-- Right Arrow -->
    <button @click="nextPage" :disabled="currentPage === totalPages" class="px-3 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300" aria-label="Next Page">
      &gt;
    </button>
  </div>
      </template>

      <template #tab2>
        <p class="text-lg">This is the content of Tab 2.</p>
      </template>

    
    </TabsComponentOne>
    <!-- Slider container -->
   
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




  