<template>
    <div class="grid h-screen place-items-center">
        <div class="w-full max-w-md">
            <div class="bg-white px-8 pt-6 pb-8 mb-4">
                <div class="brand flex items-center justify-center mb-8">
                    <h1 class="font-semibold text-xl">아이디 찾기</h1>
                </div>

                <!-- Form -->
                <form>
                    <div class="mb-4">
                        <select
                            class="form-select border border-[#BABABA] rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="1">개인회원</option>
                            <option value="2">개인회원</option>
                            <option value="3">개인회원</option>
                            <option value="4">개인회원</option>
                        </select>
                    </div>

                    <div class="mb-4">
                        <input
                            class="appearance-none border border-[#BABABA] rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="이름" required="">
                    </div>



                    <!-- Conditional form based on selected radio button -->
                    <div v-if="selectedOption === 'email'" class="mb-4">
                        <input
                            class="appearance-none border border-[#BABABA] rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email" placeholder="이메일" required="">
                    </div>

                    <div v-if="selectedOption === 'phone'" class="mb-4">
                        <div class="phone-number-container">
                            <div class="flex gap-2">
                                <!-- First input for the phone prefix -->
                                <select class="flex-auto border border-[#BABABA] w-20" v-model="phone.first">
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="012">012</option>
                                    <!-- Add more options as needed -->
                                </select>

                                <!-- Second input for the middle part of the phone number -->
                                <input class="flex-auto border border-[#BABABA]  w-24" type="text"
                                    maxlength="4" v-model="phone.second" placeholder="****" />

                                <!-- Third input for the last part of the phone number -->
                                <input class="flex-auto border border-[#BABABA] w-24" type="text"
                                    maxlength="4" v-model="phone.third" placeholder="****" />
                            </div>
                        </div>
                    </div>
                    <!-- Radio buttons -->
                    <div class="">
                        <fieldset class="flex gap-4 mt-10">
                            <div class="flex gap-2">
                                <input id="byEmail" class="peer/byemail" type="radio" name="find" value="email"
                                    v-model="selectedOption" />
                                <label for="byEmail" class="peer-checked/draft:text-[#4B4B4B]">이메일로 찾기</label>
                            </div>
                            <div class="flex gap-2">
                                <input id="byPhoneNumber" class="peer/byPhoneNumber" type="radio" name="find"
                                    value="phone" v-model="selectedOption" />
                                <label for="byPhoneNumber" class="peer-checked/published:text-[#4B4B4B]">휴대폰번호로
                                    찾기</label>
                            </div>
                        </fieldset>
                    </div>
                    <div class="flex flex-col gap-2 items-center justify-center mt-10">
                        <button
                            class="rounded-2xl w-full bg-black hover:bg-gray-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            아이디 찾기
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedOption: 'email',
            phone: {
                first: "010",
                second: "",
                third: "",
            },
        };
    }
}
</script>
<style scoped>

</style>
