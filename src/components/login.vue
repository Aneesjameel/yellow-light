<template>
    <div class="grid h-screen place-items-center"> <!-- Adjusted margin to account for navbar height -->
        <div class="w-full max-w-md">
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 class="text-center text-2xl font-bold mb-6">로그인</h2>

                <!-- Form -->
                <form>
                    <!-- Email Input -->
                    <div class="mb-4">
                        <input class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="이메일" required="">
                    </div>
     
                    <!-- Password Input -->
                    <div class="mb-6">
                        <input class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="비밀번호" required="">
                    </div>

                    <!-- Login Button -->
                    <div class="flex items-center justify-center">
                        <button class="w-full bg-greyTone hover:bg-gray-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            로그인
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>  
</template>
<script scope>

</script>