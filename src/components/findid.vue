<template>
 <div class="grid h-screen place-items-center"> <!-- Adjusted margin to account for navbar height -->
        <div class="w-full max-w-md">
            <div class="bg-white px-8 pt-6 pb-8 mb-4">
                <div class="brand flex items-center justify-center mb-8">
                    <h1 class="font-semibold text-xl">아이디 찾기</h1>
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
                        <button class="rounded-2xl w-full bg-black hover:bg-gray-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            로그인
                        </button>
                        <button class="relative rounded-2xl w-full bg-[#03C75A] text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            <img src="/btnG.png" alt="" class="absolute top-[9px]">
                            네이버로 로그인
                        </button>
                    </div>

                    <div class="flex justify-between mt-10">
                        <div>
                            <a href="#" class="text-gray-600 hover:text-gray-900">아이디찾기 |</a>
                            <a href="#" class="text-gray-600 hover:text-gray-900">비밀번호찾기</a>
                        </div>
                        <div>
                            <a href="#" class="text-gray-600 hover:text-gray-900">회원가입</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>  
</template>
<script scope>

</script>