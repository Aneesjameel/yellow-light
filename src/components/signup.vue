<template>
    <div class="flex min-h-screen items-center justify-center">
      <div class="w-full max-w-md bg-white px-2 py-8 ">
        <!-- Logo -->
        <div class="font-bold mb-6">
          <h2 class="text-2xl font-bold mb-10  ">로그인</h2>
        </div>
  
        <!-- Login Form -->
       
        <form @submit.prevent="submitLogin">
          <div class="mb-10">
           
            <div class="relative z-0  mb-5 mt-5">
      <input type="text" id="username" v-model="username" class="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-300 focus:outline-none focus:ring-0  peer" placeholder=" " />
      <label for="username" class="absolute  text-lGrey dark:text-gray-400 duration-300 transform -translate-y-6 scale-125 top-1  origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-125 peer-placeholder-shown:translate-y-0 peer-focus:scale-125 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">아이디</label>
     
    </div>
          </div>
          <div class="mb-4">
         <div class="relative z-0  mb-5 mt-5">
      <input type="text" id="id" v-model="id" class="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-300 focus:outline-none focus:ring-0  peer" placeholder=" " />
      <label for="id" class="absolute  text-lGrey dark:text-gray-400 duration-300 transform -translate-y-6 scale-125 top-1  origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-125 peer-placeholder-shown:translate-y-0 peer-focus:scale-125 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">아이디</label>
      <div class="mt-2"><label class="text-lPink mt-2">영문 대/소문자, 숫자, 특수문자를 포함한 8~16자여야 합니다.</label></div>
    </div>
</div> 
          <div class="mb-4">
           
           <div class="relative z-0  mb-5 mt-5">
     <input type="text" id="password" v-model="password" class="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-300 focus:outline-none focus:ring-0  peer" placeholder=" " />
     <label for="password" class="absolute  text-lGrey dark:text-gray-400 duration-300 transform -translate-y-6 scale-125 top-1  origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-125 peer-placeholder-shown:translate-y-0 peer-focus:scale-125 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">비밀번호</label>
     <div class="mt-2"><label class="text-lPink mt-2">중복된 아이디 입니다.</label></div>
    </div>
         </div>
        
          <div class="mb-4">
           
           <div class="relative z-0  mb-5 mt-5">
     <input type="text" id="vpassword" v-model="vpassword" class="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-300 focus:outline-none focus:ring-0  peer" placeholder=" " />
     <label for="vpassword" class="absolute  text-lGrey dark:text-gray-400 duration-300 transform -translate-y-6 scale-125 top-1  origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-125 peer-placeholder-shown:translate-y-0 peer-focus:scale-125 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">비밀번호</label>
     <div class="mt-2"><label class="text-lPink mt-2">비밀번호가 일치하지 않습니다.</label></div>
    </div>
         </div>
         <div class="mb-4">
         <div class="relative z-0  mb-5 mt-5">
      <input type="email" id="email" v-model="email" class="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-300 focus:outline-none focus:ring-0  peer" placeholder=" " />
      <label for="email" class="absolute  text-lGrey dark:text-gray-400 duration-300 transform -translate-y-6 scale-125 top-1  origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-125 peer-placeholder-shown:translate-y-0 peer-focus:scale-125 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">아이디</label>
      <div class="mt-2"><label class="text-lPink mt-2">이메일을 입력해 주세요.</label></div>
    </div>
</div>
          <div class="mb-4">
           
           <div class="relative z-0  mb-5 mt-5">
     <input type="number" id="phone" v-model="phone" class="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-300 focus:outline-none focus:ring-0  peer" placeholder=" " />
     <label for="phone" class="absolute  text-lGrey dark:text-gray-400 duration-300 transform -translate-y-6 scale-125 top-1  origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-125 peer-placeholder-shown:translate-y-0 peer-focus:scale-125 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">비밀번호</label>
  </div>
         </div>
          <!-- Options: Save ID / Keep Login Status -->
          <div class="flex items-center justify-between mb-4 mt-20">
            <div class="flex items-center">
            
              <input type="checkbox" id="keepLogin" class="mr-2  ml-3" name="selection"/>
              <label for="keepLogin" class="text-gray-700 ml-3 font-bold">만 14세 이상입니다. (필수)</label>
            </div>
          </div>
          <p class="text-greyTone1">* 만 14세 미만의 아동은 회원가입 시 법적대리인의 동의가 필요합니다. 회원가입이 필요할 시 당사 고객센터로 연락해주세요.<br><br>

* 회원가입에 필요한 최소한의 정보만 입력 받음으로써 고객님의 개인정보 수집을 최소화하고 편리한 회원가입을 제공합니다.</p>
          <!-- Login Button -->
         
        </form>
  
      
      </div>
    </div>
    <div class="max-w-md mx-auto p-4 space-y-4">
    <!-- Section 1: 이용약관 동의 -->
    <div class="border rounded-md p-4">
    
    
      <p class="text-gray-600 mt-2 text-sm">
        제1조(목적)
이 약관은 주식회사 여행칭구(전자상거래 사업자)가 운영하는 나눔투어(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리.의무 및 책임사항을 규정함을 목적으로 합니다.
※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」

제2조(정의)
① “몰”이란 주식회사 여행칭구가 재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.
② “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
③ ‘회원’이라 함은 “몰”에 회원등록을 한 자로서, 계속적으로 “몰”이 제공하는 서비스를 이용할 수 있는 자를 말합니다.
④ ‘비회원’이라 함은 회원에 가입하지 않고 “몰”이 제공하는 서비스를 이용하는 자
      </p>
    </div>

    <!-- Section 2: 개인정보 수집 및 이용 동의 -->
    <div class="border rounded-md p-4">
      <div class="flex justify-between items-center">
        <label class="font-semibold text-lg">개인정보 수집 및 이용 동의 (필수)</label>
        <button @click="viewAll('privacy')" class="text-blue-500">전체보기<input type="checkbox" v-model="privacyAccepted" class="mr-2 ml-5"></button>
      </div>
    
      <p class="text-gray-600 mt-2 text-sm">
        [개인정보 수집 및 이용 동의]

1. 개인정보 수집목적 및 이용목적

가. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산

콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는 청구지 등 발송 , 금융거래 본인 인증 및 금융 서비스

나. 회원 관리

회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정 이용 방지와 비인가 사용 방지 , 가입 의사 확인 , 연령확인 , 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인, 불만처리 등 민원처리 , 고지사항 전달

2. 수집하는 개인정보 항목 : 이름 , 생년월일 , 성별 , 로그인ID , 비밀번호 , 자택 전화번호 , 휴대전화번호 , 이메일 , 14세미만 가입자의 경우 법정대리인의 정보
      </p>
    </div>

    <!-- Section 3: 쇼핑정보 수신 동의 -->
    <div class="border rounded-md p-4">
      <div class="flex justify-between items-center">
        <label class="font-semibold text-lg">쇼핑정보 수신 동의 (선택)</label>
        <button @click="viewAll('shoppingInfo')" class="text-blue-500 ">전체보기<input type="checkbox" v-model="shoppingInfoAccepted" class="mr-2 ml-5"></button>
      </div>
    
      <p class="text-gray-600 mt-2 text-sm">
        할인쿠폰 및 혜택, 이벤트, 신상품 소식 등 쇼핑몰에서 제공하는
유익한 쇼핑정보를 SMS와 이메일로 받아보실 수 있습니다.

단, 주문/거래 정보 및 주요 정책과 관련된 내용은
수신동의 여부와 관계없이 발송됩니다.

선택 약관에 동의하지 않으셔도 회원가입은 가능하며,
회원가입 후 회원정보수정 페이지에서 언제든지 수신여부를 변경하실 수 있습니다.
      </p>
    </div>
    <button
          type="submit"
          class="w-full bg-blue text-white py-2 rounded-md hover:bg-blue  h-12"
        >
        회원가입
        </button>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        id: '',
        password: '',
        vpassword: '',
        email: '',
        phone: '',
        termsAccepted: false,
      privacyAccepted: false,
      shoppingInfoAccepted: false,
      };
    },
    methods: {
    
        viewAll(section) {
      alert(`View all details for ${section}`);
    }  ,
      submitLogin() {
        // Handle login logic here
        console.log({
          username: this.username,
          password: this.password,
        })
      },
    },
  };
  </script>
  
  <style>
  /* Add any custom styles if needed */
  </style>
  