<template>
  <div class="container mx-auto mt-10 mb-10 p-10">
    <div class="brand mb-8 text-center">
      <h1 class="font-semibold text-xl">쿠폰내역</h1>
    </div>
    <div class="flex flex-auto justify-center mb-10">
      <form action="">
        <div class="space-x-2">
          <input type="text" class="border border-[#D4D1D1] py-2 px-6">
          <button class="bg-black text-white py-2 px-6 border border-black">쿠폰번호 등록하기</button>
        </div>
      </form>
    </div>
    <div>
      <table class="min-w-full table-auto border-y border-x-0">
        <thead>
          <tr>
            <th class="py-2 px-4 text-center font-bold">쿠폰이름</th>
            <th class="py-2 px-4 text-center font-bold">쿠폰내용</th>
            <th class="py-2 px-4 text-center font-bold">사용기간</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <td class="py-3 border-y">
              회원가입 전용 쿠폰
            </td>
            <td class="py-3 border-y">[전품목] 3% 할인</td>
            <td class="py-3 border-y">2011.08.02 - 2012.09.31</td>
          </tr>
          <tr class="text-center">
            <td class="py-3 border-y">
              SILVER등급 전용 쿠폰
            </td>
            <td class="py-3 border-y">배송비 무료(2,500원)</td>
            <td class="py-3 border-y">2011.08.02 - 2012.09.31</td>
          </tr>
          <tr class="text-center">
            <td class="py-3 border-y">
              블랙프라이데이 기념 50% 할인쿠폰
            </td>
            <td class="py-3 border-y">전 상품 50% 할인</td>
            <td class="py-3 border-y">2011.08.02 - 2012.09.31</td>
          </tr>
          <tr class="text-center">
            <td class="py-3 border-y">
              [브랜드] 브랜드 전용 쿠폰
            </td>
            <td class="py-3 border-y">이투바이오 제품 한정 5%할인</td>
            <td class="py-3 border-y">2011.08.02 - 2012.09.31</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-10">
      <p class="font-bold">주문 할인쿠폰 적용방법</p>
      <p>주문서 쿠폰 선택에서 고객님이 보유하신 [쿠폰이름]을 선택하시면 할인금액(또는 적립금액)이 나타납니다.</p>
      <br>
      <p class="font-bold">쿠폰 사용시 유의사항</p>
      <p>① 쿠폰마다 사용 가능 금액과 사용기한이 정해져 있으며, 1개 주문서에 1개의 쿠폰만을 사용하실 수 있습니다.</p>
      <p>② 쿠폰을 사용한 주문 후 반품/환불/취소의 경우 한번 사용하신 쿠폰은 다시 사용하실 수 없습니다.</p>
      <p>③ 쿠폰 적용 품목 및 카테고리가 제한된 경우 해당 품목 또는 카테고리에서만 쿠폰을 사용하실 수 있습니다.</p>
      <p>④ 할인/적립 쿠폰은 적립금할인 등을 제외한 실제 결제금액에 적용됩니다.</p>
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