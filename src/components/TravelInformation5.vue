<script>




export default {
 data() {
    return {
      selectedTab: 'scheduled', // Default tab
      tabs: [
        { name: 'scheduled', label: '예정된 여행' },
        { name: 'past', label: '지난 여행' },
        { name: 'canceled', label: '취소된 여행' },
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
          <div class="md:flex w-full">
            <div class="md:w-2/3 w-full">
              <div class="flex items-center mb-4 border-r w-full">
            <img src="../../public/cone.png" alt="Travel" class="h-28 rounded">
            <div class="ml-4 flex-1">
              <Div class="flex flex-col md:flex-row justify-between w-full">
                <button class="bg-gray-100 py-2 px-4 rounded   border border-gray-800 mb-3 font-bold ">
                예약완료
          </button>
          <RouterLink to="" class="text-ferozi mr-5">여행정보 상세페이지 바로가기 ></RouterLink>
        </Div>
              <p class="font-bold text-lg">[출발확정] [스마트초이스] 규슈/...</p>
              <p class="text-sm text-ferozi">2023.09.02 출발 <Span class="text-orange-400 ">(D-9)</Span></p>
            </div>
          </div>
            </div>
            <div class=" flex flex-col md:w-1/3 px-10 justify-center w-full">
          <button class="bg-white py-2 px-4 rounded hover:bg-blue-600 w-full border mb-3">
            문의하기
          </button>
          <button class=" bg-blue text-white py-2 px-4 rounded   w-full">
            취소하기
          </button>
          <p class="text-sm text-ferozi"><span class="text-orange-400 ">☀︎ 출발 7일 전엔 취소가 불가능 합니다.</span></p>
        </div>
          </div>
          
          
        </div>
      </div>

      <div v-if="selectedTab === 'past'">
        <ol class="relative border-s border-gray-200 ">                  
          <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
        <div class="timeline">
        <p class="text-lg">9월 2일 (토)</p>
        <div class="border rounded p-4 flex  w-full mb-4">
          <div class="md:flex w-full">
           
              <div class="flex items-center mb-4  w-full">
            <img src="../../public/cone.png" alt="Travel" class="h-28 rounded">
            <div class="ml-4 flex-1">
              <Div class="flex flex-col md:flex-row justify-between w-full ">
                <button class="bg-gray-100 py-2 px-4 rounded   border border-gray-800 mb-3 font-bold ">
                예약완료
          </button>
       
        </Div>
              <p class="font-bold text-lg mb-2">[출발확정][스마트초이스] 규슈/아소/유후인 3일#가성비추천 #온천호텔1박 #동화같은유후인마을 #라라포트</p>
              <p class="text-lg">성인 1명, 어린이 2명</p>
            </div>
          </div>
         
          </div>
          
          
        </div>
      </div>
    </li>
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
        <div class="timeline">
        <p class="text-lg">5월 2일 (토)</p>
        <div class="border rounded p-4 flex  w-full ">
          <div class="md:flex w-full">
           
              <div class="flex items-center mb-4  w-full">
            <img src="../../public/cone.png" alt="Travel" class="h-28 rounded">
            <div class="ml-4 flex-1">
              <Div class="flex flex-col md:flex-row justify-between w-full">
                <button class="bg-gray-100 py-2 px-4 rounded   border border-gray-800 mb-3 font-bold ">
                예약완료
          </button>
       
        </Div>
              <p class="font-bold text-lg mb-2">[출발확정][스마트초이스] 규슈/아소/유후인 3일#가성비추천 #온천호텔1박 #동화같은유후인마을 #라라포트</p>
              <p class="text-lg">성인 1명, 어린이 2명</p>
            </div>
          </div>
         
          </div>
          
        </div>
        </div>
    </li>
    
</ol>
       
     
      </div>

      <div v-if="selectedTab === 'canceled'">
        <div class="timeline">
        <div class="border rounded p-4 flex  w-full ">
          <div class="md:flex w-full"><div class="md:w-2/3 w-full"><div class="flex items-center mb-4 border-r w-full ">
            <img src="/public/cone.png" alt="Travel" class="h-28 rounded"><div class="ml-4 flex-1">
              <div class="flex justify-between w-full">
                <button class="bg-gray-100 py-2 px-4 rounded border border-gray-800 mb-3 font-bold"> 예약완료 </button>
                </div>
                <p class="font-bold text-lg">[출발확정] [스마트초이스] 규슈/...</p><p class="text-lg">성인 1명, 어린이 2명</p></div></div></div>
                <div class="flex flex-col md:w-1/3 w-full px-10 items-center justify-center"><button class="bg-ferozi text-white py-2 px-4 rounded w-full"> 취소하기 </button>
                  </div></div>
          
        </div>
        </div>
      </div>
    </div>
</div>
</div>
</div>

<!--5-->
</template>