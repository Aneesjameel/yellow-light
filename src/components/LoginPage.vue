<template>
  <div class="flex min-h-screen items-center justify-center ">
    <div class="w-full max-w-md bg-white px-2 py-8">
      <!-- Logo -->
      <div class="font-bold mb-6">
        <router-link to="/"><img src="/logo.png" style="height:106px" class="mx-auto"></router-link>
      </div>

      <!-- Login Form -->
      <h2 class="text-xl font-bold mb-10  ">로그인</h2>
      <form @submit.prevent="submitLogin">
        <div class="mb-10">
         
          <div class="relative z-0  mb-5 mt-5">
    <input type="text" id="username" v-model="username" class="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-300 focus:outline-none focus:ring-0  peer" placeholder=" " />
    <label for="username" class="absolute  text-lGrey dark:text-gray-400 duration-300 transform -translate-y-6 scale-125 top-1  origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-125 peer-placeholder-shown:translate-y-0 peer-focus:scale-125 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">아이디</label>
</div>
        </div>
        <div class="mb-4">
         
         <div class="relative z-0  mb-5 mt-5">
   <input type="text" id="password" v-model="password" class="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-300 focus:outline-none focus:ring-0  peer" placeholder=" " />
   <label for="password" class="absolute  text-lGrey dark:text-gray-400 duration-300 transform -translate-y-6 scale-125 top-1  origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-125 peer-placeholder-shown:translate-y-0 peer-focus:scale-125 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">비밀번호</label>
</div>
       </div>

        <!-- Options: Save ID / Keep Login Status -->
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <input type="radio" id="saveId" name="selection"  />
            <label for="saveId" class="text-gray-700 ml-3">아이디 저장</label>
         
         
            <input type="radio" id="keepLogin" class="mr-2  ml-3" name="selection"/>
            <label for="keepLogin" class="text-gray-700 ml-3">로그인 상태 유지</label>
          </div>
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-blue text-white py-2 rounded-md hover:bg-blue  h-12 rounded-2xl"
        >
          로그인
        </button>

        <!-- Forgot ID/Password -->
        <div class=" mt-4">
          <a href="#" class="text-blue-600 hover:underline">아이디/비밀번호 찾기</a>
        </div>
      </form>

      <!-- Register Section -->
      <div class="mt-6 ">
        <p class="text-gray-700 font-bold  mb-4">아직 회원이 아니신가요?</p>
        <p class="text-gray-500 mb-4">
          회원가입 하시고 나눔투어의<br>다채로운 여행/체험상품들을 만나 보세요.
        </p>
        <router-link to="/signup"><button class="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800  h-12">회원가입</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submitLogin() {
      // Handle login logic here
      console.log({
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<style>
/* Add any custom styles if needed */
</style>
