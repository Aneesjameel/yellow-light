<template>
  <div class="page-header bg-consulting flex items-center min-h-[450px] bg-cover">
    <div class="container mx-auto px-4 text-end">
      <h1 class="text-white font-bold text-4xl">CONSULTING</h1>
      <p class="text-white">온/오프라인 무료 견적 및 상담</p>
    </div>
  </div>
  <div class="container mx-auto px-4">
    <div class="border border-[#CBCBCB] mx-auto md:px-20 py-10 max-w-4xl px-2">
      <div class="brand mb-12">
        <h1 class="text-center text-2xl">
          방문견적/설치관련/디자인관련/기타 문의 등<br>
          무엇이든 물어보세요.
        </h1>
      </div>
      <div class="mt-8">
        <h2 class="font-semibold text-xl mb-4">
          회원정보 수정
        </h2>
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col">
            <div class="flex items-center">
              <div class="min-w-[90px] p-2">
                <p class="font-bold">
                  상담종류*
                </p>
              </div>
              <div class="p-2">
                <select name="" id="" class="bg-[#f5f5f5] border-0 border-[#d5d5d5] py-2 px-4 w-auto pr-8">
                  <option value="">방문 견적 요청</option>
                  <option value="">방문 견적 요청</option>
                  <option value="">방문 견적 요청</option>
                </select>
              </div>
            </div>
            <div class="flex">
              <div class="min-w-[90px] p-2">
                <p class="font-bold">
                  상담종류*
                </p>
              </div>
              <div class="flex flex-auto p-2 w-full">
                <input type="text" name="" id="" placeholder="이름을 입력해 주세요."
                  class="bg-[#f5f5f5] border-0 border-[#d5d5d5] pr-8 px-4 w-full">
              </div>
            </div>
            <div class="flex">
              <div class="min-w-[90px] p-2">
                <p class="font-bold">
                  상담내용*
                </p>
              </div>
              <div class="p-2 w-full">
                <textarea name="" id=""
                  placeholder="[필독]방문 견적 요청시, 연락처와 방문 주소 및 시간을 반드시 선택해 주세요.기타 디자인이나 설치관련 문의는 조명을 설치할 장소의 대략적인 크기나 사진을 첨부해 주시면더욱 정확한 답변을 드릴 수 있으니 첨부하시는 것을 권장합니다."
                  class="bg-[#f5f5f5] border-0 border-[#d5d5d5] py-2 px-4 w-full" rows="25"></textarea>
              </div>
            </div>
            <div class="flex border-t border-[#d5d5d5]">
              <div class="min-w-[90px] p-2">
                <p class="font-bold">
                  사진 첨부
                </p>
              </div>
              <div class="p-2">
                <div class="flex gap-2 flex-wrap">
                  <div class="w-24 h-24" v-for="index in 5" :key="index">
                    <input type="file" ref="fileInputs" @change="uploadImage($event, index)" class="hidden w-24 h-24"
                      accept="image/*">
                    <div
                      class="img-upl-ph w-24 h-24 bg-[#f5f5f5] flex items-center justify-center cursor-pointer hover:text-stone-700"
                      @click="triggerFileInput(index)">
                      <i class="fa fa-plus text-[#C5C5C5]"></i>
                    </div>
                  </div>
                </div>
                <div class="mt-2">
                  <p class="text-[#929292] font-[14px]">사진은 10MB이하의 PNG, GIF, JPG 파일만 등록 가능합니다.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8">
            <p class="font-bold">
              답변 받을 연락처 선택
            </p>
            <div class="mt-4 mb-2">
              <label for=""><input type="checkbox" name="" id="" class="mr-3"> E-mail</label>
            </div>
            <div class="mb-2">
              <label for=""><input type="checkbox" name="" id="" class="mr-3"> 문자</label>
            </div>
            <div class="mb-2">
              <label for=""><input type="checkbox" name="" id="" class="mr-3"> 전화</label>
            </div>
          </div>
          <div class="flex justify-center space-x-2 mt-10 flex-wrap">
            <button class="min-w-[259px] mt-4 px-6 py-3 bg-[#fff] text-black border border-black rounded-2xl">
              취소
            </button>
            <button class="min-w-[259px] mt-4 px-6 py-2 bg-black text-white rounded-2xl">
              문의하기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      selectedProduct: {
        product: "서브 1등 직부 겸용 벽등",
        description: "[옵션: 베이지/LED에디슨 인지구(전구색)/백색 (+10,500)]",
        rating: '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>',
        image: "/products/product.png", // Replace with actual image path
      },
    };
  },
  methods: {
    triggerFileInput(index) {
      // Trigger click on the specific input file
      this.$refs.fileInputs[index - 1].click();
    },
    uploadImage(event, index) {
      const file = event.target.files[0];
      if (file) {
        // Handle the uploaded file (e.g., show a preview, upload it, etc.)
        console.log(`Uploaded image for slot ${index}:`, file);
        // You can also set the image to display it if needed
      }
    },
  }
};
</script>

<style scoped>
/* Additional styles if needed */
.bg-consulting {
  background-image: url('/bg-consulting.jpg');
}
</style>
