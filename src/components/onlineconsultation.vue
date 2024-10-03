<script>


import Faq2 from './faq2.vue';

export default {
 components:{
    Faq2
 },
 data() {
    return {
      selectedTab: 'scheduled', // Default tab
      tabs: [
        { name: 'scheduled', label: '1:1 문의하기' },
        { name: 'past', label: '자주묻는 질문' },
      ],
    };
  },
}
</script>
<template>
    <!--5-->
<div class="container mx-auto mt-10">
  <h2 class="text-2xl font-semibold mb-6">여행정보</h2>

<div>



<div class="md:flex gap-5">
    <!-- Sidebar (Tabs) -->
    <div class="md:w-1/4 border w-full">
      <ul>
        <li 
          v-for="tab in tabs" 
          :key="tab.name"
          @click="selectedTab = tab.name"
          :class="selectedTab === tab.name ? 'bg-blue-500 bg-gray-200 font-bold border-l-4 border-blue' : 'text-gray-600'"
          class="cursor-pointer py-3 px-4  h-16 items-center flex "
        >
          {{ tab.label }}
        </li>
      </ul>
    </div>
    
    <!-- Content -->
    <div class="md:w-3/4 p-6 w-full">
      <div v-if="selectedTab === 'scheduled'">
        <!-- Content for '예정된 여행' (Scheduled Travel) -->
        <div class="border rounded p-4 flex  w-full ">
          <div class=" w-full">
            <div class="items-center mb-4 flex gap-4">
                <div class="md:w-1/2">
                    <label class="block text-gray-700 font-bold w-full">예금주</label>
                <div>
                    <input type="email" class="border rounded-md px-3 py-2 w-full" placeholder="이름을 입력해 주세요.">
                </div>
                </div>
                <div class="md:w-1/2">
                    <label class="block text-gray-700 font-bold w-full">예금주</label>
                <div>
                    <input type="email" class="border rounded-md px-3 py-2 w-full" placeholder="이름을 입력해 주세요.">
                </div>
                </div>
                
            </div>
            <div class="items-center mb-4"><label class="block text-gray-700 font-bold w-full">이메일</label>
                <div>
                    <input type="email" class="border rounded-md px-3 py-2 w-full" placeholder="admin1@naver.com">
                </div>
            </div>
            <div class="items-center mb-4"><label class="block text-gray-700 font-bold w-full">제목</label>
                <div>
                    <input type="email" class="border rounded-md px-3 py-2 w-full" placeholder="제목을 입력해 주세요.">
                </div>
            </div>
            <div class="items-center mb-4"><label class="block text-gray-700 font-bold w-full">내용</label>
                <div>
                    <textarea type="text" class="border rounded-md px-3 py-2 w-full" placeholder="내용을 입력해 주세요." rows="10"></textarea>
                </div>
            </div>
            <div class="items-center mb-4"><label class="block text-gray-700 font-bold w-full mb-4 ">첨부파일</label>
                <div class="md:w-1/2">
                    <input class="border rounded-md px-3 py-2 w-full  mb-5" id="multiple_files" type="file" multiple placeholder="jpg, jpeg, png 등 이미지 파일 업로드">
                    <div class="flex gap-3">
                    <div class="md:w-1/2">
                        <label class="block text-gray-700 font-bold w-full mb-4">여권사본.jpg</label>
                    <label class="block text-gray-700 font-bold w-full mb-4">여권사본1.jpg</label>
                    <label class="block text-gray-700 font-bold w-full mb-4">여권사본2.jpg</label>
                    </div>
                    <div class="md:w-1/2">
                        <label class="block text-gray-700 font-bold w-full mb-4">여권사본.jpg</label>
                    <label class="block text-gray-700 font-bold w-full mb-4">여권사본1.jpg</label>
                    <label class="block text-gray-700 font-bold w-full mb-4">여권사본2.jpg</label>
                    </div>
                </div></div>
            </div>
           

                
<div class="flex gap-3 mx-auto justify-center mt-10 pt-10">
    <button class="py-3 bg-gray-200  text-lg  w-1/3 h-12" type="button">취소</button>
    <button  class="py-3 bg-blue text-white  text-lg w-1/3 h-12 " type="button">결제하기</button>
  </div>
          </div>
      
          
        </div>
      </div>

      <div v-if="selectedTab === 'past'">
      <Faq2/>
     
      </div>

    </div>
</div>
</div>
</div>

<!--5-->
</template>