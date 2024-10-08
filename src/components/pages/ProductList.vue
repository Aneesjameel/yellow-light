<template>
  <div class="container mx-auto my-20 m:px-0 px-4">
    <h1 class="text-2xl text-gold text-center text-bold">현관/베란다 조명</h1>
    
    <!-- Tabs Section -->
    <div class="flex items-center justify-center space-x-4 md:space-y-0 mb-10 mt-5 flex-wrap space-y-4">
      <button 
        v-for="(tab, index) in tabs" 
        :key="index" 
        :class="{'bg-yellow-500 text-white': activeTab === index, 'border-gold text-gold border text-bold': activeTab !== index}"
        @click="activeTab = index"
        class="px-4 py-2 rounded-full focus:outline-none">
        {{ tab.label }}
      </button>
    </div>

    <!-- Total Items and Sort Section -->
    <div class="flex justify-between items-center mb-4">
      <span class="text-gray-600">TOTAL {{ filteredProducts.length }} Items</span>
      <select class="text-gray-600 bg-white border-0 px-2 py-1 w-[100px]">
        <option>정렬방식</option>
        <option>가격순</option>
        <option>인기순</option>
      </select>
    </div>
    
    <hr />
    
    <!-- Product Grid -->
    <div class="mt-10 grid md:grid-cols-4 gap-6 grid-cols-1">
      <!-- Product Cards Displayed Based on Active Tab -->
      <div 
        v-for="(product, index) in paginatedProducts" 
        :key="index"
        class="">
        <img :src="product.image" :alt="product.name" class="w-full mb-2">
        <p class="text-sm font-semibold">{{ product.name }}</p>
        <p class="text-red-500 text-lg font-bold">
          <span class="mr-2" v-if="product.discountPrice">{{ product.discountPrice }}</span>
          <span class="text-black font-bold">{{ product.discountPrice1 }}</span>
          <span class="text-gray-500 line-through">{{ product.originalPrice }}</span>
        </p>
        <p class="text-sm text-black font-bold">{{ product.size }}</p>
        <p class="text-sm text-black font-bold">{{ product.bulbType }}</p>
        <div class="mt-2 flex space-x-1" v-if="product.labels">
          <span v-for="(label, labelIndex) in product.labels" :key="labelIndex" :class="label.class">{{ label.text }}</span>
        </div>
      </div>
    </div>
    
    <!-- Pagination Section -->
    <div class="flex justify-between items-center mt-4">
      <button @click="prevPage" :disabled="currentPage === 1" class="px-4 py-2 bg-gray-200 text-black rounded-full">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="px-4 py-2 bg-gray-200 text-black rounded-full">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCatalog',
  data() {
    return {
      activeTab: 0, // Default to the first tab
      currentPage: 1, // Track current page
      itemsPerPage: 10, // Items per page
      tabs: [
        { label: '전체보기' },
        { label: '직부등' },
        { label: '센서등' },
        { label: '디자인 직부/센서' },
        { label: '다운라이트' }
      ],
      products: [
          {
            name: 'LED 스넬 센서 직부등 8W',
            image: 'products/1.png',
            discountPrice: '15%',
            discountPrice1: '55,000원',
            originalPrice: '59,800원',
            size: 'W280xD200xH70 [후렌]',
            bulbType: 'LED 일체형 (8W/4000K)',
            labels: [{ text: '신상품', class: 'bg-yellow-500 text-white text-xs px-2 py-1 rounded' }, { text: '오늘출발', class: 'bg-gray-800 text-white text-xs px-2 py-1 rounded' }],
            category: 0 // This product belongs to '전체보기'
          },
          {
            name: '원통 투투 갓 1부 직부등',
            image: 'products/2.png',
            discountPrice: '',
            discountPrice1: '40,000원',
            originalPrice: '',
            size: 'W280xD200xH70 [후렌]',
            bulbType: 'LED 일체형 (8W/4000K)',
            category: 1 // This product belongs to '직부등'
          },
          {
            name: '서브 1등 직부 겸용 벽등',
            image: 'products/3.png',
            discountPrice: '15%',
            discountPrice1: '55,000원',
            originalPrice: '59,800원',
            size: 'Ø100xD70mm',
            bulbType: 'E26x1ea',
            labels: [{ text: '신상품', class: 'bg-yellow-500 text-white text-xs px-2 py-1 rounded' }, { text: '오늘출발', class: 'bg-yellow-800 text-white text-xs px-2 py-1 rounded' }],
            category: 2 // This product belongs to '센서등'
          },
          {
            name: 'LED 스넬 센서 직부등 8W',
            image: 'products/4.png',
            discountPrice: '15%',
            discountPrice1: '55,000원',
            originalPrice: '59,800원',
            size: 'W280xD200xH70 [후렌]',
            bulbType: 'LED 일체형 (8W/4000K)',
            category: 3 // This product belongs to '디자인 직부/센서'
          },
          {
            name: 'LED 스넬 센서 직부등 8W',
            image: 'products/1.png',
            discountPrice: '15%',
            discountPrice1: '55,000원',
            originalPrice: '59,800원',
            size: 'W280xD200xH70 [후렌]',
            bulbType: 'LED 일체형 (8W/4000K)',
            labels: [{ text: '신상품', class: 'bg-yellow-500 text-white text-xs px-2 py-1 rounded' }, { text: '오늘출발', class: 'bg-gray-800 text-white text-xs px-2 py-1 rounded' }],
            category: 0 // This product belongs to '전체보기'
          },
          {
            name: '원통 투투 갓 1부 직부등',
            image: 'products/2.png',
            discountPrice: '',
            discountPrice1: '40,000원',
            originalPrice: '',
            size: 'W280xD200xH70 [후렌]',
            bulbType: 'LED 일체형 (8W/4000K)',
            category: 1 // This product belongs to '직부등'
          },
          {
            name: '서브 1등 직부 겸용 벽등',
            image: 'products/3.png',
            discountPrice: '15%',
            discountPrice1: '55,000원',
            originalPrice: '59,800원',
            size: 'Ø100xD70mm',
            bulbType: 'E26x1ea',
            labels: [{ text: '신상품', class: 'bg-yellow-500 text-white text-xs px-2 py-1 rounded' }, { text: '오늘출발', class: 'bg-yellow-800 text-white text-xs px-2 py-1 rounded' }],
            category: 2 // This product belongs to '센서등'
          },
          {
            name: 'LED 스넬 센서 직부등 8W',
            image: 'products/4.png',
            discountPrice: '15%',
            discountPrice1: '55,000원',
            originalPrice: '59,800원',
            size: 'W280xD200xH70 [후렌]',
            bulbType: 'LED 일체형 (8W/4000K)',
            category: 3 // This product belongs to '디자인 직부/센서'
          },
          {
            name: 'LED 스넬 센서 직부등 8W',
            image: 'products/1.png',
            discountPrice: '15%',
            discountPrice1: '55,000원',
            originalPrice: '59,800원',
            size: 'W280xD200xH70 [후렌]',
            bulbType: 'LED 일체형 (8W/4000K)',
            labels: [{ text: '신상품', class: 'bg-yellow-500 text-white text-xs px-2 py-1 rounded' }, { text: '오늘출발', class: 'bg-gray-800 text-white text-xs px-2 py-1 rounded' }],
            category: 0 // This product belongs to '전체보기'
          },
          {
            name: '원통 투투 갓 1부 직부등',
            image: 'products/2.png',
            discountPrice: '',
            discountPrice1: '40,000원',
            originalPrice: '',
            size: 'W280xD200xH70 [후렌]',
            bulbType: 'LED 일체형 (8W/4000K)',
            category: 1 // This product belongs to '직부등'
          },
          {
            name: '서브 1등 직부 겸용 벽등',
            image: 'products/3.png',
            discountPrice: '15%',
            discountPrice1: '55,000원',
            originalPrice: '59,800원',
            size: 'Ø100xD70mm',
            bulbType: 'E26x1ea',
            labels: [{ text: '신상품', class: 'bg-yellow-500 text-white text-xs px-2 py-1 rounded' }, { text: '오늘출발', class: 'bg-yellow-800 text-white text-xs px-2 py-1 rounded' }],
            category: 2 // This product belongs to '센서등'
          },
          {
            name: 'LED 스넬 센서 직부등 8W',
            image: 'products/4.png',
            discountPrice: '15%',
            discountPrice1: '55,000원',
            originalPrice: '59,800원',
            size: 'W280xD200xH70 [후렌]',
            bulbType: 'LED 일체형 (8W/4000K)',
            category: 3 // This product belongs to '디자인 직부/센서'
          },
          {
            name: 'LED 스넬 센서 직부등 8W',
            image: 'products/1.png',
            discountPrice: '15%',
            discountPrice1: '55,000원',
            originalPrice: '59,800원',
            size: 'W280xD200xH70 [후렌]',
            bulbType: 'LED 일체형 (8W/4000K)',
            labels: [{ text: '신상품', class: 'bg-yellow-500 text-white text-xs px-2 py-1 rounded' }, { text: '오늘출발', class: 'bg-gray-800 text-white text-xs px-2 py-1 rounded' }],
            category: 0 // This product belongs to '전체보기'
          },
          {
            name: '원통 투투 갓 1부 직부등',
            image: 'products/2.png',
            discountPrice: '',
            discountPrice1: '40,000원',
            originalPrice: '',
            size: 'W280xD200xH70 [후렌]',
            bulbType: 'LED 일체형 (8W/4000K)',
            category: 1 // This product belongs to '직부등'
          },
          {
            name: '서브 1등 직부 겸용 벽등',
            image: 'products/3.png',
            discountPrice: '15%',
            discountPrice1: '55,000원',
            originalPrice: '59,800원',
            size: 'Ø100xD70mm',
            bulbType: 'E26x1ea',
            labels: [{ text: '신상품', class: 'bg-yellow-500 text-white text-xs px-2 py-1 rounded' }, { text: '오늘출발', class: 'bg-yellow-800 text-white text-xs px-2 py-1 rounded' }],
            category: 2 // This product belongs to '센서등'
          },
          {
            name: 'LED 스넬 센서 직부등 8W',
            image: 'products/4.png',
            discountPrice: '15%',
            discountPrice1: '55,000원',
            originalPrice: '59,800원',
            size: 'W280xD200xH70 [후렌]',
            bulbType: 'LED 일체형 (8W/4000K)',
            category: 3 // This product belongs to '디자인 직부/센서'
          },
          {
            name: 'LED 스넬 센서 직부등 8W',
            image: 'products/1.png',
            discountPrice: '15%',
            discountPrice1: '55,000원',
            originalPrice: '59,800원',
            size: 'W280xD200xH70 [후렌]',
            bulbType: 'LED 일체형 (8W/4000K)',
            labels: [{ text: '신상품', class: 'bg-yellow-500 text-white text-xs px-2 py-1 rounded' }, { text: '오늘출발', class: 'bg-gray-800 text-white text-xs px-2 py-1 rounded' }],
            category: 0 // This product belongs to '전체보기'
          },
          {
            name: '원통 투투 갓 1부 직부등',
            image: 'products/2.png',
            discountPrice: '',
            discountPrice1: '40,000원',
            originalPrice: '',
            size: 'W280xD200xH70 [후렌]',
            bulbType: 'LED 일체형 (8W/4000K)',
            category: 1 // This product belongs to '직부등'
          },
          {
            name: '서브 1등 직부 겸용 벽등',
            image: 'products/3.png',
            discountPrice: '15%',
            discountPrice1: '55,000원',
            originalPrice: '59,800원',
            size: 'Ø100xD70mm',
            bulbType: 'E26x1ea',
            labels: [{ text: '신상품', class: 'bg-yellow-500 text-white text-xs px-2 py-1 rounded' }, { text: '오늘출발', class: 'bg-yellow-800 text-white text-xs px-2 py-1 rounded' }],
            category: 2 // This product belongs to '센서등'
          },
          {
            name: 'LED 스넬 센서 직부등 8W',
            image: 'products/4.png',
            discountPrice: '15%',
            discountPrice1: '55,000원',
            originalPrice: '59,800원',
            size: 'W280xD200xH70 [후렌]',
            bulbType: 'LED 일체형 (8W/4000K)',
            category: 3 // This product belongs to '디자인 직부/센서'
          },
          {
            name: 'LED 스넬 센서 직부등 8W',
            image: 'products/1.png',
            discountPrice: '15%',
            discountPrice1: '55,000원',
            originalPrice: '59,800원',
            size: 'W280xD200xH70 [후렌]',
            bulbType: 'LED 일체형 (8W/4000K)',
            labels: [{ text: '신상품', class: 'bg-yellow-500 text-white text-xs px-2 py-1 rounded' }, { text: '오늘출발', class: 'bg-gray-800 text-white text-xs px-2 py-1 rounded' }],
            category: 0 // This product belongs to '전체보기'
          },
          {
            name: '원통 투투 갓 1부 직부등',
            image: 'products/2.png',
            discountPrice: '',
            discountPrice1: '40,000원',
            originalPrice: '',
            size: 'W280xD200xH70 [후렌]',
            bulbType: 'LED 일체형 (8W/4000K)',
            category: 1 // This product belongs to '직부등'
          },
          {
            name: '서브 1등 직부 겸용 벽등',
            image: 'products/3.png',
            discountPrice: '15%',
            discountPrice1: '55,000원',
            originalPrice: '59,800원',
            size: 'Ø100xD70mm',
            bulbType: 'E26x1ea',
            labels: [{ text: '신상품', class: 'bg-yellow-500 text-white text-xs px-2 py-1 rounded' }, { text: '오늘출발', class: 'bg-yellow-800 text-white text-xs px-2 py-1 rounded' }],
            category: 2 // This product belongs to '센서등'
          },
          {
            name: 'LED 스넬 센서 직부등 8W',
            image: 'products/4.png',
            discountPrice: '15%',
            discountPrice1: '55,000원',
            originalPrice: '59,800원',
            size: 'W280xD200xH70 [후렌]',
            bulbType: 'LED 일체형 (8W/4000K)',
            category: 3 // This product belongs to '디자인 직부/센서'
          }
        ],
    };
  },
  computed: {
    filteredProducts() {
      if (this.activeTab === 0) {
        return this.products; // Show all products in the '전체보기' tab
      }
      return this.products.filter(product => product.category === this.activeTab);
    },
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage); // Calculate total pages
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage; // Calculate start index
      const end = start + this.itemsPerPage; // Calculate end index
      return this.filteredProducts.slice(start, end); // Return sliced products for the current page
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--; // Decrease current page
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++; // Increase current page
      }
    }
  }
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
