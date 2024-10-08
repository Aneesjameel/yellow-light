<template>
    <div class=" mx-auto py-6">
      <h1 class="text-2xl font-bold mb-4">리뷰 100</h1>
      
      <!-- Filter section -->
      <div class="flex space-x-4 mb-6 border-t border-b p-2 border-gray-300">
        <button class="text-gray-500 font-semibold">전체리뷰</button>
        <button class="text-gray-500 font-semibold">사진리뷰</button>
      </div>
  
      <!-- Review List -->
      <div v-for="(review, index) in reviews" :key="index" class="p-4 border-b border-gray-300">
        <div class="flex">
          <!-- Photo Section -->
          <div v-if="review.photo" class="mr-4">
            <img :src="review.photo" alt="Product" class="w-16 h-16 object-cover rounded" />
          </div>
  
          <!-- Review Text Section -->
          <div class="flex-1 items-center">
            <p class="text-gold text-2xl ">
              {{ review.content1 }}
            </p>
            <p class="text-gray-700">
              {{ review.content }}
            </p>
          </div>
  
          <!-- Review Ratings -->
          <div class="flex items-center ml-4 flex-col">
            <span class="text-gray-600 mr-2">{{ review.username }}</span>
            <div class="flex">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                :class="{'text-yellow-400': i <= review.rating, 'text-gray-300': i > review.rating}" class="w-5 h-5">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.974 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.974-2.89a1 1 0 00-1.175 0l-3.974 2.89c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.003 9.1c-.783-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <img src="/public/products/1.png" class="mt-6 mb-6"/>
      <!-- Pagination -->
      <div class="flex justify-center mt-6 ">
        <button @click="prevPage" class="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300">Previous</button>
        <button v-for="page in totalPages" :key="page" @click="goToPage(page)" 
          :class="{'bg-gray-300': page === currentPage}" 
          class="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300">
          {{ page }}
        </button>
        <button @click="nextPage" class="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300">Next</button>
      </div>
     
    </div>
 
  </template>
<script>
export default {
  data() {
    return {
      reviews: [
        { content: ' 써보니까 정말 좋네요. 리뷰텍스트 써보니까 정말 좋네요. 리뷰텍스트 써보니까 정말 좋네요. 리뷰텍스트 써보니까 정말 좋네요. 리뷰텍스트 써보...',content1:'[포토리뷰]', rating: 5, photo: '/watermelon.png', username: '네이버구매자' },
        { content: ' 써보니까 정말 좋네요. 리뷰텍스트 써보니까 정말 좋네요. 리뷰텍스트 써보니까 정말 좋네요. 리뷰텍스트 써보니까 정말 좋네요. 리뷰텍스트 써보...',content1:'[포토리뷰]', rating: 5, photo: '/watermelon.png', username: '네이버구매자' },
        { content: ' 써보니까 정말 좋네요. 리뷰텍스트 써보니까 정말 좋네요. 리뷰텍스트 써보니까 정말 좋네요. 리뷰텍스트 써보니까 정말 좋네요. 리뷰텍스트 써보...',content1:'[포토리뷰]', rating: 5, username: '네이버구매자' },
        { content: ' 써보니까 정말 좋네요. 리뷰텍스트 써보니까 정말 좋네요. 리뷰텍스트 써보니까 정말 좋네요. 리뷰텍스트 써보니까 정말 좋네요. 리뷰텍스트 써보...',content1:'[포토리뷰]', rating: 5, username: '네이버구매자' },
      ],
      currentPage: 1,
      reviewsPerPage: 5,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.reviews.length / this.reviewsPerPage);
    },
    paginatedReviews() {
      const start = (this.currentPage - 1) * this.reviewsPerPage;
      const end = start + this.reviewsPerPage;
      return this.reviews.slice(start, end);
    },
  },
  methods: {
    goToPage(page) {
      this.currentPage = page;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>
  