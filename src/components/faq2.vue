<template>
    <div>
      <!-- Tabs Section -->
      <div class="flex border-b mb-4">
        <button 
          v-for="(tab, index) in tabs" 
          :key="index" 
          @click="selectedTab = tab"
          :class="selectedTab === tab ? 'border-black text-black' : 'text-gray-500'"
          class="py-2 px-4 border-t border-l border-r"
        >
          {{ tab }}
        </button>
      </div>
  
      <!-- Accordion Section -->
      <div class="space-y-2">
        <div v-for="(faq, index) in faqs" :key="index">
          <button
            @click="toggle(index)"
            class="w-full text-left flex justify-between items-center p-4 border rounded-t"
            :class="openIndex === index ? 'bg-black text-white' : 'text-black bg-white'"
          >
            <span>Q. {{ faq.question }}</span>
            <svg
              :class="openIndex === index ? 'transform rotate-180' : ''"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            v-if="openIndex === index"
            class="p-4 border border-t-0 rounded-b bg-gray-50"
          >
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
<script>
export default {
  data() {
    return {
      selectedTab: '여행 관련', // Default tab
      tabs: ['여행 관련', '회원정보 관련', '취소/환불 관련', '기타 문의'],
      openIndex: null, // Tracks the open accordion index
      faqs: [
        {
          question: '자주 묻는 질문 내용을 입력해 주세요.',
          answer:
            '내용을 입력하는 곳입니다. 자주 묻는 질문 내용을 입력해 주세요... (example content)',
        },
        {
          question: '자주 묻는 질문 내용을 입력해 주세요.',
          answer:
            '내용을 입력하는 곳입니다. 자주 묻는 질문 내용을 입력해 주세요... (example content)',
        },
        {
          question: '자주 묻는 질문 내용을 입력해 주세요.',
          answer:
            '내용을 입력하는 곳입니다. 자주 묻는 질문 내용을 입력해 주세요... (example content)',
        },
        {
          question: '자주 묻는 질문 내용을 입력해 주세요.',
          answer:
            '내용을 입력하는 곳입니다. 자주 묻는 질문 내용을 입력해 주세요... (example content)',
        },
      ],
    };
  },
  methods: {
    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
  },
};
</script>
  