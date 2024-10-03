<template>
    <!-- 4 -->

  <div class="mx-auto border p-6 mt-20" style="max-width: 792px;">
    <h1 class="mb-10"><span class="text-2xl font-bold text-center  text-ferozi ">성이름 고객</span><span class="text-xl  text-center mb-4 text-ferozi">님</span></h1>
    <form class="space-y-4 ">
      <div>
      <div class="flex ">
        <label class="block text-gray-700 font-bold w-2/6">이메일</label>
        <label class="block text-gray-700">admin1@naver.com</label>
      </div>
    </div>
      <div>
      <div class="flex ">
        <label class="block text-gray-700 font-bold w-2/6">연락처</label>
        <label class="block text-gray-700">010-2414-2142</label>
      </div>
    </div>
      <div>
      <div class="flex ">
        <label class="block text-gray-700 font-bold w-2/6">아이디</label>
        <label class="block text-gray-700">admin1</label>
      </div>
    </div>
      <div>
      <div class="flex  ">
        <label class="block text-gray-700 font-bold w-2/6">Email</label>
        <div>
        <input type="email" class=" border rounded-md px-3 py-2" placeholder="Enter your email" /> 
        <div class="text-red-400 text-sm"> * 영문 대소문자/숫자/특수문자 중 2종류 10~16자 또는 3종류 8~16자</div>
      </div>
      </div>
    </div>
      <div>
      <div class="flex   items-center">
        <label class="block text-gray-700 font-bold w-2/6">Password</label>
        <input type="password" class=" border rounded-md px-3 py-2" placeholder="Enter your password">
      </div>
    </div>
      <div>
      <div class="flex ">
        <label class="block text-gray-700  font-bold">주소</label>
      </div>
    </div>
      <div>
      <div class="flex gap-2 w-1/2">
        <input type="text" class="w-full border rounded-md px-3 py-2 ">
        <button type="submit" class="bg-black text-white font-bold px-4 rounded-md w-40 py-2">주소검색</button>
      </div>
    </div>
      <div>
      <div class="mb-4 flex gap-2 ">
        <div class="w-1/2">
        <input type="text" placeholder="‘-’를 제외한 핸드폰 번호를 입력해 주세요." class="border border-gray-300 p-2 rounded w-full h-14"></div><div class="w-1/2">
        <input type="text" placeholder="‘-’를 제외한 핸드폰 번호를 입력해 주세요." class="border border-gray-300 p-2 rounded w-full h-14">
      </div>
      </div>
    </div>
      <div class="flex gap-3 mx-auto justify-center mt-10 pt-10">
    <button class="py-3 bg-lGrey text-white text-lg  w-full h-12" type="button">취소</button>
    <button  class="py-3 bg-blue text-white  text-lg w-full h-12 " type="button">결제하기</button>
  </div>
    </form>
  </div>

  <div class="mx-auto border p-6 mt-20" style="max-width: 792px;">
    <h1  class="mb-10"><span class="text-2xl font-bold text-center mb-4 ">환불계좌 등록</span></h1>
    <form class="space-y-4 ">
     
      <div>
      <div class="  items-center">
        <label class="block text-gray-700 font-bold w-full">예금주</label>
        <div>
        <input type="email" class=" border rounded-md px-3 py-2 w-full" placeholder="이름을 입력해 주세요." /> 
      </div>
      </div>
    </div>
      <div>
        <div class="  items-center">
        <label class="block text-gray-700 font-bold w-full">입금은행</label>
        <div>
        <select  class=" border rounded-md px-3 py-2 w-full" placeholder="은행선택" /> 
      </div>
      </div>
    </div>
    <div>
      <div class="  items-center">
        <label class="block text-gray-700 font-bold w-full">입금은행</label>
        <div>
        <input type="email" class=" border rounded-md px-3 py-2 w-full" placeholder="계좌번호를 입력해 주세요." /> 
      </div>
      </div>
    </div>
      <div>
    
    </div>
   
      <div>
    
    </div>
      <div class="flex gap-3 mx-auto justify-center mt-10 pt-10">
    <button  class="py-3 bg-blue text-white  text-lg w-full h-12 " type="button">저장하기</button>
  </div>
    </form>
  </div>
</template>
<script>


export default {
  name: 'memberinformation',
}
</script>