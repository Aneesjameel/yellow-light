<template>
    <div class="container mx-auto mt-10 mb-10 p-10">
      <div class="flex flex-col items-center justify-center max-w-5xl mx-auto">
        <div class=" mb-6 flex gap-6">
          <div class="text-[#D68F00] text-5xl">
            <img src="/icons/check_circle_outline.png" alt="">
          </div>
          <div>
            <h2 class="text-2xl font-semibold mt-2">고객님의 주문이 완료되었습니다.</h2>
            <p class="text-gray-600 mt-1">주문정보 및 배송안내는 주문조회를 통해 가능합니다.</p>
            <div class="flex gap-6 mb-8 mt-2">
              <p><strong>주문번호 :</strong> 2024192412</p>
              <p>주문일자 2024-12-01</p>
            </div>
          </div>
        </div>
      </div>
      <div>
  
         <div>
          <div class="w-2/3 mx-auto">
            <table class="min-w-full table-auto">
              <thead class="bg-white ">
                <tr>
                  <th class="text-left border border-r-0 p-3">최종결제금액</th>
                  <th class="text-left border p-3">310,000원</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border p-3">
                    결제수단
                  </td>
                  <td class="border p-3">
                    <p>무통장 입금</p>
                    <p>입금자 : 테스트    계좌번호 : 국민은행 032009-01-832432</p>
                    <p>현금영수증 : 신청안함</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
         </div>
  
        <!-- Buttons Section -->
        <div class="flex justify-center gap-4 mt-6">
          <button class="bg-[#4D4D4D] text-white hover:bg-black py-2 px-6 rounded-full">주문조회</button>
          <button class="bg-[#D68F00] text-white hover:bg-black py-2 px-6 rounded-full">쇼핑 계속하기</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "OrderConfirmation",
  };
  </script>
  
  <style scoped>
  /* You can add custom styles here if needed */
  </style>