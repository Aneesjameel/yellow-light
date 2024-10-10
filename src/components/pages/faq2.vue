<template>
  <div class="max-w-6xl mx-auto py-8">
    <!-- Header Section -->
    <h1 class="text-2xl font-bold text-center mb-8">고객센터</h1>

    <!-- Tabs Section -->
    <div class="flex justify-center  my-20">
      <button v-for="tab in tabs" :key="tab" :class="{
        'bg-gray-900 text-white': activeTab === tab,
        'bg-gray-200 text-gray-800': activeTab !== tab
      }" class="px-6 py-2 font-semibold p-5" @click="activeTab = tab">
        {{ tab }}
      </button>
    </div>
    <!-- Search Bar -->
    <div class="flex justify-center  bg-gray-50 py-10 mb-10">
      <button class="mr-10 font-bold">
        FAQ 검색
      </button>
      <input type="text" placeholder="FAQ 검색" class="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-l-md"
        v-model="searchQuery" />
      <button class="px-4 py-2 bg-gray-800 text-white rounded-r-md">
        검색
      </button>
    </div>

    <div class="max-w-7xl mx-auto">
      <!-- Order Table -->
      <div class="  overflow-auto">
      <table class="table-auto w-full border-collapse border  border-x-0 border-gray-200">
        <thead>
          <tr class="bg-white">
            <th class="text-center border  border-x-0 px-4 py-2">번호</th>
            <th class="text-center border  border-x-0 px-4 py-2">상품정보</th>
            <th class="text-center border  border-x-0 px-4 py-2">카테고리</th>
            <th class="text-center border  border-x-0 px-4 py-2">제목</th>
            <th class="text-center border  border-x-0 px-4 py-2">작성자</th>
            <th class="text-center border  border-x-0 px-4 py-2">작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in paginatedData" :key="index" class="border-b">
            <td class="p-2 border border-x-0">{{ item.number }}</td>
            <td class="p-2 border border-x-0">
              <div class="flex items-center">
                <img :src="item.image" alt="img" class="w-12 h-12 mr-4">
                <span>{{ item.productInfo }}</span>
              </div>
            </td>
            <td class="p-2 border border-x-0">{{ item.category }}</td>
            <td class="p-2 border border-x-0">
              <div class="flex items-center">
                <span>{{ item.title }}</span>
                <span v-if="item.new" class="ml-2 bg-yellow-200 px-2 py-1 text-sm rounded">NEW</span>
              </div>
            </td>
            <td class="p-2 border border-x-0">{{ item.author }}</td>
            <td class="p-2 border border-x-0">{{ item.date }}</td>
          </tr>
        </tbody>
      </table>
</div>
      <!-- Pagination Controls -->
      <div class="mt-4 flex justify-center">
        <button @click="prevPage" :disabled="currentPage === 1"
          class="px-3 py-1 mx-1 bg-white text-black rounded-full hover:bg-gray-400">
          <i class="fa fa-chevron-left"></i>
        </button>

        <button v-for="page in totalPages" :key="page" @click="goToPage(page)"
          :class="{ 'bg-black text-white': currentPage === page, 'bg-white': currentPage !== page }"
          class="px-3 py-1 mx-1 rounded-full hover:bg-gray-400">
          {{ page }}
        </button>

        <button @click="nextPage" :disabled="currentPage === totalPages"
          class="px-3 py-1 mx-1 bg-white rounded-full hover:bg-gray-400">
          <i class="fa fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: ['질의응답 (QnA)', '자주묻는 질문 (FAQ)'],
      subTabs: ['전체', '회원정보', '주문결제', '적립금/쿠폰', '배송문의', '교환/반품문의', '설치문의', 'A/S문의'],
      activeTab: '자주묻는 질문 (FAQ)',
      activeSubTab: '전체',
      searchQuery: '',
      activeIndex: null,
      faqs: [
        {
          question: '발급된 가상계좌번호는 어디에서 확인할 수 있나요?',
          answer: '발급된 가상계좌번호는 메인페이지 우측상단 ORDER-> 주문조회를 클릭하면 확인 가능합니다.'
        },
        {
          question: '아이디 또는 비밀번호를 분실했어요.',
          answer: '비밀번호 찾기를 이용해 아이디/비밀번호를 찾을 수 있습니다.'
        },
        {
          question: '주문한 상품은 언제 배송 되나요?',
          answer: '주문하신 상품의 배송은 영업일 기준 3-5일 소요됩니다.'
        },
        {
          question: '적립금은 어떻게 쓰나요?',
          answer: '적립금은 주문 시 할인금액으로 사용할 수 있습니다.'
        }
      ],
      items: [
        {
          number: '1231',
          image: '/products/product.png',
          productInfo: '상품문의',
          category: '카테고리',
          title: '피프 1200 식탁레일조명_블랙 노랑조명에 문의합니다.',
          new: true,
          author: '한**',
          date: '2022-11-11',
        },
        {
          number: '1231',
          image: '/products/product.png',
          productInfo: '상품문의',
          category: '카테고리',
          title: '└ 문의 답변 드립니다.',
          new: false,
          author: '관리자',
          date: '2022-11-11',
        },
        {
          number: '1231',
          image: '/products/product.png',
          productInfo: '상품문의',
          category: '카테고리',
          title: '노랑조명에 문의합니다.',
          new: true,
          author: '한**',
          date: '2022-11-11',
        },
        {
          number: '1231',
          image: '/products/product.png',
          productInfo: '상품문의',
          category: '카테고리',
          title: '└ 문의 답변 드립니다.',
          new: false,
          author: '관리자',
          date: '2022-11-11',
        },
        {
          number: '1231',
          image: '/products/product.png',
          productInfo: '상품문의',
          category: '카테고리',
          title: '피프 1200 식탁레일조명_블랙 노랑조명에 문의합니다.',
          new: true,
          author: '한**',
          date: '2022-11-11',
        },
        {
          number: '1231',
          image: '/products/product.png',
          productInfo: '상품문의',
          category: '카테고리',
          title: '└ 문의 답변 드립니다.',
          new: false,
          author: '관리자',
          date: '2022-11-11',
        },
        {
          number: '1231',
          image: '/products/product.png',
          productInfo: '상품문의',
          category: '카테고리',
          title: '노랑조명에 문의합니다.',
          new: true,
          author: '한**',
          date: '2022-11-11',
        },
        {
          number: '1231',
          image: '/products/product.png',
          productInfo: '상품문의',
          category: '카테고리',
          title: '└ 문의 답변 드립니다.',
          new: false,
          author: '관리자',
          date: '2022-11-11',
        },
        {
          number: '1231',
          image: '/products/product.png',
          productInfo: '상품문의',
          category: '카테고리',
          title: '피프 1200 식탁레일조명_블랙 노랑조명에 문의합니다.',
          new: true,
          author: '한**',
          date: '2022-11-11',
        },
        {
          number: '1231',
          image: '/products/product.png',
          productInfo: '상품문의',
          category: '카테고리',
          title: '└ 문의 답변 드립니다.',
          new: false,
          author: '관리자',
          date: '2022-11-11',
        },
        {
          number: '1231',
          image: '/products/product.png',
          productInfo: '상품문의',
          category: '카테고리',
          title: '노랑조명에 문의합니다.',
          new: true,
          author: '한**',
          date: '2022-11-11',
        },
        {
          number: '1231',
          image: '/products/product.png',
          productInfo: '상품문의',
          category: '카테고리',
          title: '└ 문의 답변 드립니다.',
          new: false,
          author: '관리자',
          date: '2022-11-11',
        },
      ],
      currentPage: 1,
      perPage: 10,
    };
  },
  computed: {
    filteredFAQs() {
      if (this.searchQuery) {
        return this.faqs.filter(faq => faq.question.includes(this.searchQuery));
      }
      return this.faqs;
    },
    totalPages() {
      return Math.ceil(this.items.length / this.perPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.items.slice(start, end);
    }
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
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
    },
    goToPage(page) {
      this.currentPage = page;
    }
  }
};
</script>