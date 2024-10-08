<template>
    <div class="max-w-6xl mx-auto py-8">
      <!-- Header Section -->
      <h1 class="text-2xl font-bold text-center mb-8">고객센터</h1>
  
      <!-- Tabs Section -->
      <div class="flex justify-center  my-20">
        <button
          v-for="tab in tabs"
          :key="tab"
          :class="{
            'bg-gray-900 text-white': activeTab === tab,
            'bg-gray-200 text-gray-800': activeTab !== tab
          }"
          class="px-6 py-2 font-semibold p-5"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>
  
      <!-- Sub-Tabs Section -->
      <div class="flex justify-center space-x-2 my-20">
        <button
          v-for="subTab in subTabs"
          :key="subTab"
          class="px-4 py-2 text-sm font-semibold border border-gray-300 rounded-full"
          :class="{
            'border-gray-800 text-gray-800': activeSubTab === subTab,
            'bg-white text-gray-600': activeSubTab !== subTab
          }"
          @click="activeSubTab = subTab"
        >
          {{ subTab }}
        </button>
      </div>
  
      <!-- Search Bar -->
      <div class="flex justify-center  bg-gray-50 py-10 mb-10">
        <button class="mr-10 font-bold">
            FAQ 검색
        </button>
        <input
          type="text"
          placeholder="FAQ 검색"
          class="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-l-md"
          v-model="searchQuery"
        />
        <button class="px-4 py-2 bg-gray-800 text-white rounded-r-md">
          검색
        </button>
      </div>
  
      <!-- FAQ Accordion -->
      <div v-if="activeTab === '자주묻는 질문 (FAQ)'" class="border-t border-gray-300">
        <div
          v-for="(item, index) in filteredFAQs"
          :key="index"
          class="border-b border-gray-300"
        >
          <button
            class="w-full text-left p-4 text-gray-800 flex justify-between items-center"
            @click="toggleAccordion(index)"
          >
            <span>{{ item.question }}</span>
            <span v-if="activeIndex === index">▲</span>
            <span v-else>▼</span>
          </button>
          <div
            v-show="activeIndex === index"
            class="p-4 text-sm text-gray-600 bg-gray-100"
          >
            {{ item.answer }}
          </div>
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
      ]
    };
  },
  computed: {
    filteredFAQs() {
      if (this.searchQuery) {
        return this.faqs.filter(faq => faq.question.includes(this.searchQuery));
      }
      return this.faqs;
    }
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }
};
</script>
  