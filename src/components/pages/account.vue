<template>
  <div class="container mx-auto px-4 mt-10 mb-10 overflow-auto">
    <div class="brand mb-8 text-center">
      <h1 class="font-semibold text-xl">마이페이지</h1>
    </div>
    <div class="flex items-center justify-between py-3 px-16 bg-[#F2F2F2] mb-5 flex-wrap">
      <p class="p-4 font-bold">주문내역</p>
      <p class="p-4 font-bold">쿠폰내역</p>
      <p class="p-4 font-bold">장바구니</p>
      <p class="p-4 font-bold">관심상품</p>
      <p class="p-4 font-bold">리뷰 관리</p>
      <p class="p-4 font-bold">회원정보</p>
    </div>
    <div class="mt-8">
      <h2 class="font-semibold text-xl mb-4">
        회원정보 수정
      </h2>
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col flex-wrap">
          <div class="flex border-t border-[#d5d5d5]  flex-wrap   ">
            <div class="min-w-[206px] p-2">
              <p class="font-bold">
                이름
              </p>
            </div>
            <div class="p-2">
              <p>홍길동</p>
            </div>
          </div>
          <div class="flex border-t border-[#d5d5d5]  flex-wrap   ">
            <div class="min-w-[206px] p-2">
              <p class="font-bold">
                아이디
              </p>
            </div>
            <div class="p-2">
              <p>admin1</p>
            </div>
          </div>
          <div class="flex border-t border-[#d5d5d5] items-center  flex-wrap  ">
            <div class="min-w-[206px] p-2">
              <p class="font-bold">
                비밀번호 변경
              </p>
            </div>
            <div class="p-2">
              <p><input type="text" name="" id="" class="border border-[#d5d5d5] p-1"> * 영문 대소문자/숫자/특수문자 중 2종류 10~16자 또는
                3종류 8~16자</p>
            </div>
          </div>
          <div class="flex border-t border-[#d5d5d5] items-center  flex-wrap ">
            <div class="min-w-[206px] p-2">
              <p class="font-bold">
                비밀번호 확인
              </p>
            </div>
            <div class="p-2">
              <p><input type="text" name="" id="" class="border border-[#d5d5d5] p-1"></p>
            </div>
          </div>
          <div class="flex border-t border-[#d5d5d5]  flex-wrap">
            <div class="min-w-[206px] p-2">
              <p class="font-bold">
                생년월일
              </p>
            </div>
            <div class="p-2 flex gap-2  flex-wrap">
              <p>
                <select name="" id="" class="min-w-[90px] border border-[#d5d5d5] p-1">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
                년
              </p>
              <p>
                <select name="" id="" class="min-w-[90px] border border-[#d5d5d5] p-1">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
                월
              </p>
              <p>
                <select name="" id="" class="min-w-[90px] border border-[#d5d5d5] p-1">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
                일
              </p>
            </div>
          </div>
          <div class="flex border-t items-center border-[#d5d5d5]  flex-wrap">
            <div class="min-w-[206px] p-2">
              <p class="font-bold">
                주소
              </p>
            </div>
            <div class="p-2">
              <p class="mb-2 space-x-2"><input type="text" name="" id="" class="border border-[#d5d5d5] p-1"> <button
                  type="button" class="py-1 px-4 border border-[#242424] text-white bg-[#242424]">우편번호</button></p>
              <p class="space-x-2"><input type="text" name="" id="" class="border border-[#d5d5d5] p-1"> <input
                  placeholder="상세 주소를 입력해 주세요." type="text" name="" id="" class="border border-[#d5d5d5] p-1"></p>
            </div>
          </div>
          <div class="flex md:flex-row flex-col border-t items-center border-[#d5d5d5]  flex-wrap">
            <div class="min-w-[206px] p-2">
              <p class="font-bold">
                이메일
              </p>
            </div>
            <div class="p-2 flex gap-2  flex-wrap">
              <div>
                <input type="text" name="" id="" class="border border-[#d5d5d5] p-1">
              </div>
              <div>
                @ <input type="url" placeholder="naver.com" name="" id="" class="border border-[#d5d5d5] p-1">
              </div>
              <div>
                <select name="" id="" class="min-w-[90px] border border-[#d5d5d5] p-1">
                  <option value="">naver.com</option>
                  <option value="">naver.com</option>
                  <option value="">naver.com</option>
                </select>
              </div>
            </div>
          </div>
          <div class="flex items-center border-t border-[#d5d5d5]">
            <div class="min-w-[206px] p-2">
              <p class="font-bold">
                연락처
              </p>
            </div>
            <div class="p-2 flex gap-2">
              <p>
                <input type="tel" placeholder="" name="" id="" class="max-w-[90px] border border-[#d5d5d5] p-1"> -
              </p>
              <p>
                <input type="tel" placeholder="" name="" id="" class="max-w-[90px] border border-[#d5d5d5] p-1"> -
              </p>
              <p>
                <input type="tel" placeholder="" name="" id="" class="max-w-[90px] border border-[#d5d5d5] p-1">
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <h2 class="font-semibold text-xl mb-4">
        회원정보 수정
      </h2>
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col">
          <div class="flex border-t border-[#d5d5d5]">
            <div class="p-2 space-y-4">
              <p><label for="sms"><input type="checkbox" name="sms" id=""> SMS</label></p>
              <p><label for="email"><input type="checkbox" name="email" id=""> E-mail</label></p>
            </div>
          </div>
        </div>
      </div>
      <div class="space-x-2 text-center mt-4">
        <button type="button" class="min-w-[172px] py-2 px-6 bg-[#EAEAEA] text-black rounded-2xl">회원탈퇴</button>
        <button type="button" class="min-w-[172px] py-2 px-6 bg-[#CE8900] text-white rounded-2xl">회원정보 수정</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        { date: '2022.11.08', product: '서브1등 직부 검용 벽등', amount: '20,270원' },
        { date: '2022.11.08', product: '서브1등 직부 검용 벽등', amount: '20,270원' },
        { date: '2022.11.08', product: '서브1등 직부 검용 벽등', amount: '20,270원' },
        { date: '2022.11.08', product: '서브1등 직부 검용 벽등', amount: '20,270원' },
        { date: '2022.11.08', product: '서브1등 직부 검용 벽등', amount: '20,270원' },
        { date: '2022.11.08', product: '서브1등 직부 검용 벽등', amount: '20,270원' },
        { date: '2022.11.08', product: '서브1등 직부 검용 벽등', amount: '20,270원' },
        { date: '2022.11.08', product: '서브1등 직부 검용 벽등', amount: '20,270원' },
        { date: '2022.11.08', product: '서브1등 직부 검용 벽등', amount: '20,270원' },
        { date: '2022.11.08', product: '서브1등 직부 검용 벽등', amount: '20,270원' },
        { date: '2022.11.08', product: '서브1등 직부 검용 벽등', amount: '20,270원' },
        // Add more data as needed
      ],
      currentPage: 1,
      perPage: 5,
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.orders.length / this.perPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.orders.slice(start, end);
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    }
  }
}
</script>

<style scoped>
/* Additional styles if needed */
</style>