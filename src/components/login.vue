<template>
    <div class="grid h-screen place-items-center"> <!-- Adjusted margin to account for navbar height -->
        <div class="w-full max-w-md">
            <div class="bg-white  rounded-lg container">
      <div class="flex justify-end pr-8">
        <RouterLink to="/MainPage">
          <button class="text-black text-2xl">✖</button>
        </RouterLink>
      </div></div>
            <div class="bg-white px-8 pt-6 pb-8 mb-4">
                <div class="brand flex items-center justify-center mb-8">
                    <img src="/logo-large.png" alt="">
                </div>
                <!-- Form -->
                <form>
                    <!-- Email Input -->
                    <div class="">
                        <input class="appearance-none border border-b-0 border-[#BABABA] rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="아이디" required="">
                    </div>
     
                    <!-- Password Input -->
                    <div class="mb-6">
                        <input class="appearance-none border border-[#BABABA] rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="비밀번호" required="">
                    </div>

                    <!-- Login Button -->
                
                    <div class="flex flex-col gap-2 items-center justify-center">
                        <router-link to="/Main" class="w-full cursor-pointer">
                        <button class="rounded-2xl w-full bg-black hover:bg-gray-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            로그인
                        </button>
                    </router-link>
                        <router-link to="/Main" class="w-full cursor-pointer">
                        <button class="relative rounded-2xl w-full bg-[#03C75A] text-white font-bold py-3 px-4 focus:outline-none focus:shadow-outline" type="button">
                            <img src="/btnG.png" alt="" class="absolute top-[9px] left-[10px]"> <!-- Adjust 'left' position if needed -->
                            네이버로 로그인
                        </button>
                        </router-link>

                    </div>

                    <div class="flex justify-between mt-10">
                        <div class="flex ">
                            <RouterLink to="findid" class="text-black hover:text-black pr-[2px]">아이디찾기</RouterLink>
                            <hr class=" mx-1 border border-gray-200 h-6"/>
                            <RouterLink to="password" class="text-black hover:text-black">비밀번호찾기</RouterLink>
                        </div>
                        <div>
                            <RouterLink to="memberinformation" class="text-black hover:text-black">회원가입</RouterLink>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>  
</template>
<script scope>

</script>