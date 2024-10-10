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
    <div class="mt-14">
      <h2 class="font-semibold text-xl mb-4">
        주문내역
      </h2>
      <div class="max-w-7xl mx-auto">
        <div class="  overflow-auto">
        <!-- Order Table -->
        <table class="table-auto w-full border-collapse border  border-x-0 border-gray-200">
          <thead>
            <tr class="bg-white">
              <th class="text-center border  border-x-0 px-4 py-2">주문일자</th>
              <th class="text-center border  border-x-0 px-4 py-2">상품명</th>
              <th class="text-center border  border-x-0 px-4 py-2">결제금액</th>
              <th class="text-center border  border-x-0 px-4 py-2">주문상세</th>
              <th class="text-center border  border-x-0 px-4 py-2">배송현황</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in paginatedData" :key="index" class="hover:bg-gray-100">
              <td class="text-center border border-x-0 px-4 py-2">{{ order.date }}</td>
              <td class="text-center border border-x-0 px-4 py-2">{{ order.product }}</td>
              <td class="text-center border border-x-0 px-4 py-2">{{ order.amount }}</td>
              <td class="text-center border border-x-0 px-4 py-2">
                <button class="bg-gray-200 px-6 py-1 rounded">조회</button>
              </td>
              <td class="text-center border border-x-0 px-4 py-2">
                <button class="bg-black text-white px-6 py-1 rounded">배송조회</button>
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
      perPage: 10,
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