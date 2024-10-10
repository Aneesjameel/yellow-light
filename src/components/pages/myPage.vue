<template>
  <div class="container mx-auto px-4 mt-10 mb-10">
    <div class="brand mb-8">
      <h1 class="font-semibold text-xl">마이페이지</h1>
    </div>
    <div class="flex items-center justify-between py-3 px-16 bg-[#FFF2D4] mb-5">
      <p class="p-4 font-bold">주문내역</p>
      <p class="p-4 font-bold">쿠폰내역</p>
      <p class="p-4 font-bold">장바구니</p>
      <p class="p-4 font-bold">관심상품</p>
      <p class="p-4 font-bold">리뷰 관리</p>
      <p class="p-4 font-bold">회원정보</p>
    </div>
    <div class="flex bg-[#F3F3F3] py-10 px-10 items-center">
      <div class="flex flex-auto flex-col">
        <p class="font-bold">홍길동 <small class="font-normal">(admin1)</small></p>
      </div>
      <div class="flex flex-auto flex-col border-l pl-6 border-[#d5d5d5]">
        <p>쿠폰</p>
        <p class="font-bold">0</p>
      </div>
      <div class="flex flex-auto flex-col  border-l pl-6 border-[#d5d5d5]">
        <p>적립금</p>
        <p class="font-bold">560</p>
      </div>
      <div class="flex flex-auto flex-col  border-l pl-6 border-[#d5d5d5]">
        <p>작성 가능 리뷰</p>
        <p class="font-bold">0</p>
      </div>
    </div>
    <div class="mt-10">
      <div class="min-w-full my-10 ">
        <!-- Order Status Header -->
        <h2 class="text-xl font-semibold mb-4">주문 처리 현황</h2>

        <!-- Order Status Steps -->
        <div class="flex justify-between items-center border-b border-t p-4">
          <div class="flex items-center space-x-10 pl-6">
            <!-- Step 1 -->
            <div class="text-center">
              <span class="block text-lg font-bold">0</span>
              <span class="block text-gray-500">입금 전</span>
            </div>
            <span class="text-gray-300">></span>

            <!-- Step 2 -->
            <div class="text-center">
              <span class="block text-lg font-bold">0</span>
              <span class="block text-gray-500">배송준비중</span>
            </div>
            <span class="text-gray-300">></span>

            <!-- Step 3 -->
            <div class="text-center">
              <span class="block text-lg font-bold">0</span>
              <span class="block text-gray-500">배송중</span>
            </div>
            <span class="text-gray-300">></span>

            <!-- Step 4 -->
            <div class="text-center">
              <span class="block text-lg font-bold">0</span>
              <span class="block text-gray-500">배송완료</span>
            </div>
          </div>

          <!-- Cancel, Exchange, Return -->
          <div class="text-right space-y-1">
            <p class="text-gray-500">취소: <span class="font-bold">0건</span></p>
            <p class="text-gray-500">교환: <span class="font-bold">0건</span></p>
            <p class="text-gray-500">반품: <span class="font-bold">0건</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <h2 class="font-semibold text-xl mb-4">
        최근 주문 정보
      </h2>
      <div class="max-w-7xl mx-auto">
        <!-- Order Table -->
        <div class="  overflow-auto">
        <table class="table-auto w-full border-collapse border  border-x-0 border-gray-200">
          <thead>
            <tr class="bg-white">
              <th class="text-center border  border-x-0 px-4 py-2">주문일자</th>
              <th class="text-center border  border-x-0 px-4 py-2">상품명</th>
              <th class="text-center border  border-x-0 px-4 py-2">결제금액</th>
              <th class="text-center border  border-x-0 px-4 py-2">주문상세</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in paginatedData" :key="index" class="hover:bg-gray-100">
              <td class="text-center border border-x-0 px-4 py-2">{{ order.date }}</td>
              <td class="text-center border border-x-0 px-4 py-2">{{ order.product }}</td>
              <td class="text-center border border-x-0 px-4 py-2">{{ order.amount }}</td>
              <td class="text-center border border-x-0 px-4 py-2">
                <button class="bg-gray-200 px-4 py-2 rounded">조회</button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        <!-- Pagination Controls -->
        <div class="mt-4 flex justify-center">
          <button @click="prevPage" :disabled="currentPage === 1"
            class="px-3 py-1 mx-1 bg-white text-black rounded-full hover:bg-gray-400">
            <i class="fa fa-chevron-left"></i>
          </button>

          <button v-for="page in totalPages" :key="page" @click="goToPage(page)"
            :class="{ 'bg-black text-white': currentPage === page, 'bg-white': currentPage !== page }"
            class="px-3 py-1 mx-1 rounded-full hover:bg-gray-400">
            {{ page }}
          </button>

          <button @click="nextPage" :disabled="currentPage === totalPages"
            class="px-3 py-1 mx-1 bg-white rounded-full hover:bg-gray-400">
            <i class="fa fa-chevron-right"></i>
          </button>
        </div>
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