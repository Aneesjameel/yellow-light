<template>
    <div class="max-w-4xl mx-auto py-6">
      <h1 class="text-2xl font-bold mb-4">상품문의 20</h1>
      
      <!-- Inquiry and Answer Section -->
      <div v-for="(item, index) in inquiries" :key="index" class="p-4 border-b border-gray-300 space-y-2">
        
        <!-- Status and Date -->
        <div class="text-yellow-500 font-semibold">답변완료</div>
        <div class="text-gray-600">
          {{ item.username }} · {{ item.date }}
        </div>
  
        <!-- Inquiry Content -->
        <div v-if="item.isPrivate" class="text-gray-700 italic">
          비밀글입니다.
        </div>
        <div v-else class="text-gray-700">
          <div class="flex items-start">
            <span class="font-bold text-lg text-orange-500 mr-2">Q</span>
            <p>{{ item.question }}</p>
          </div>
        </div>
  
        <!-- Answer Section -->
        <div v-if="item.answer" class="text-gray-700">
          <div class="flex items-start">
            <span class="font-bold text-lg text-orange-500 mr-2">A</span>
            <p>{{ item.answer.title }}</p>
          </div>
          <p class="text-sm text-gray-600 mt-2">
            {{ item.answer.description }}
          </p>
        </div>
  
        <!-- Private Inquiry Lock -->
        <div v-if="item.isPrivate" class="mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6 text-gray-400" viewBox="0 0 24 24">
            <path d="M12 2C8.691 2 6 4.691 6 8V11H5C3.896 11 3 11.896 3 13V20C3 21.104 3.896 22 5 22H19C20.104 22 21 21.104 21 20V13C21 11.896 20.104 11 19 11H18V8C18 4.691 15.309 2 12 2zM8 8C8 5.794 9.794 4 12 4C14.206 4 16 5.794 16 8V11H8V8zM19 20H5V13H19V20Z"/>
          </svg>
        </div>
  
      </div>
  
      <!-- Placeholder for Next Inquiry -->
      <div class="mt-6 text-gray-700">
        <div class="text-orange-500 font-semibold">답변대기</div>
        <div class="text-gray-600">
          alksddjf234 · 2024년 08월 02일 16시 53분
        </div>
        <p class="italic">비밀글입니다.</p>
      </div>
    </div>
  </template>
<script>
export default {
  data() {
    return {
      inquiries: [
        {
          username: 'alksddjf234',
          date: '2024년 08월 02일 16시 53분',
          isPrivate: true,
        },
        {
          username: 'alksddjf234',
          date: '2024년 08월 02일 16시 53분',
          isPrivate: false,
          question: '자동충전 단자가 반대로 설치되서 충전이 안되는데 불량일까요',
          answer: {
            title: '노량조명',
            description: '안녕하세요 고객님 저희 제품을 이용해 주셔서 감사합니다. 현재 문의 글로는 고객님 불편사항이 확인이 어려워 [링크]를 통해 상담 진행 부탁드립니다.'
          }
        },
        {
          username: 'alksddjf234',
          date: '2024년 08월 02일 16시 53분',
          isPrivate: true,
        }
      ]
    };
  }
};
</script>
  