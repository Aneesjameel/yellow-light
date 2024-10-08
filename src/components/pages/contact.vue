<template>
    <div class="container mx-auto px-4">
        <div class="p-6 max-w-4xl mx-auto">
            <h1 class="text-xl font-semibold mb-4">문의하기</h1>

            <!-- Image & Product Info -->
            <div class="flex items-center mb-6">
                <div class="w-32 h-32 bg-gray-200 flex justify-center items-center text-gray-500 mr-4">img</div>
                <div class="flex items-center space-x-4">
                    <p>상품상세보기</p>
                    <button class="bg-white text-black py-2 px-4 border border-[#9A9A9A]">상품 정보 선택</button>
                </div>
            </div>

            <!-- Title Section -->
            <div class="grid grid-cols-2 gap-6 mb-4">
                <div>
                    <label class="block text-gray-700">제목</label>
                    <select class="w-full border border-gray-300 p-2 rounded">
                        <option>상품문의</option>
                        <option>기타문의</option>
                    </select>
                </div>
                <div>
                    <label class="block text-gray-700">문의내용</label>
                    <input type="text" class="w-full border border-gray-300 p-2 rounded" placeholder="노랑조명에 문의드립니다." />
                </div>
            </div>

            <!-- Author & Email Section -->
            <div class="grid grid-cols-2 gap-6 mb-4">
                <div>
                    <label class="block text-gray-700">작성자</label>
                    <input type="text" class="w-full border border-gray-300 p-2 rounded" placeholder="작성자 입력" />
                </div>
                <div>
                    <label class="block text-gray-700">이메일</label>
                    <div class="flex">
                        <input type="email" class="w-2/3 border border-gray-300 p-2 rounded-l" placeholder="example" />
                        <span class="border border-gray-300 p-2">@</span>
                        <select class="w-1/3 border border-gray-300 p-2 rounded-r">
                            <option>이메일 선택</option>
                            <option>gmail.com</option>
                            <option>naver.com</option>
                            <option>daum.net</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Text Editor -->
            <div class="mb-6">
                <label class="block text-gray-700">문의 내용</label>
                <textarea rows="8" class="w-full border border-gray-300 p-2 rounded"
                    placeholder="문의 내용을 입력하세요"></textarea>
            </div>

            <!-- File Uploads -->
            <div class="space-y-2 mb-4">
                <div v-for="n in 5" :key="n" class="flex items-center space-x-2">
                    <span class="min-w-[90px]">첨부파일{{ n }}</span>
                    <input type="file" class="border border-gray-300 p-2 rounded w-full" />
                </div>
            </div>

            <!-- Privacy & Submit Options -->
            <div class="flex items-center space-x-4 mb-4">
                <label class="block text-gray-700 min-w-[90px]">공개설정</label>
                <div class="flex items-center space-x-2">
                    <label class="flex items-center space-x-1">
                        <input type="radio" name="privacy" class="form-radio" value="public" />
                        <span>공개글</span>
                    </label>
                    <label class="flex items-center space-x-1">
                        <input type="radio" name="privacy" class="form-radio" value="private" />
                        <span>비밀글</span>
                    </label>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-end space-x-4">
                <button class="bg-gray-300 text-gray-700 px-4 py-2 rounded">취소</button>
                <button class="bg-black text-white px-4 py-2 rounded">문의등록</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>