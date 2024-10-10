<!-- TabTwo.vue (same structure as TabOne.vue but with different data) -->
<template>
  <div>
    <div class="  overflow-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="item in tabTwoData" :key="item.id" valign="middle">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-24 w-24">
                <img class="rounded-2xl h-24 w-24" :src="item.image" alt="" />
              </div>
              <div class="ml-4">
                <div class="text-sm font-bold text-gray-900">{{ item.product }}</div>
                <div class="text-sm text-gray-500">{{ item.description }}</div>
                <div class="text-sm text-gray-500 flex gap-2"><span>
                    <div v-html="item.rating" class="text-[#9E7921]"></div>
                  </span> <span class="text-[#bcbcbc]">{{ item.date }}</span></div>
                <div class="text-sm text-black font-bold mt-4 text-wrap">{{ item.reviewText }}</div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-bold text-center">{{ item.price }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-center">{{ item.date }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium flex flex-col gap-2">
            <button class="text-white bg-[#D68F00] rounded-full py-2 px-4">수정하기</button>
            <button class="text-black bg-[#FFF4D7] rounded-full py-2 px-4">삭제하기</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabTwoData: [
        {
          id: 1,
          product: "서브 1등 직부 겸용 벽등",
          description: "[옵션: 베이지/LED에디슨 인지구(전구색)/백색 (+10,500)]",
          rating: '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>',
          reviewText: "아이보리보단 베이지에 가깝긴 한데 오래돼서 지저분한 멀티탭 옷입혀주니까 지저분한 느낌은 사라지고 인테리어 ...",
          price: "55,000원",
          date: "리뷰작성 가능 (2024년 12월 24일까지)",
          image: "/products/product.png",
        },
        {
          id: 2,
          product: "서브 1등 직부 겸용 벽등",
          description: "[옵션: 베이지/LED에디슨 인지구(전구색)/백색 (+10,500)]",
          rating: '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>',
          reviewText: "아이보리보단 베이지에 가깝긴 한데 오래돼서 지저분한 멀티탭 옷입혀주니까 지저분한 느낌은 사라지고 인테리어 ...",
          price: "55,000원",
          date: "리뷰작성 가능 (2024년 12월 24일까지)",
          image: "/products/product.png",
        },
        {
          id: 3,
          product: "서브 1등 직부 겸용 벽등",
          description: "[옵션: 베이지/LED에디슨 인지구(전구색)/백색 (+10,500)]",
          rating: '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>',
          reviewText: "아이보리보단 베이지에 가깝긴 한데 오래돼서 지저분한 멀티탭 옷입혀주니까 지저분한 느낌은 사라지고 인테리어 ...",
          price: "55,000원",
          date: "리뷰작성 가능 (2024년 12월 24일까지)",
          image: "/products/product.png",
        },
        {
          id: 4,
          product: "서브 1등 직부 겸용 벽등",
          description: "[옵션: 베이지/LED에디슨 인지구(전구색)/백색 (+10,500)]",
          rating: '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>',
          reviewText: "아이보리보단 베이지에 가깝긴 한데 오래돼서 지저분한 멀티탭 옷입혀주니까 지저분한 느낌은 사라지고 인테리어 ...",
          price: "55,000원",
          date: "리뷰작성 가능 (2024년 12월 24일까지)",
          image: "/products/product.png",
        },
        {
          id: 5,
          product: "서브 1등 직부 겸용 벽등",
          description: "[옵션: 베이지/LED에디슨 인지구(전구색)/백색 (+10,500)]",
          rating: '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>',
          reviewText: "아이보리보단 베이지에 가깝긴 한데 오래돼서 지저분한 멀티탭 옷입혀주니까 지저분한 느낌은 사라지고 인테리어 ...",
          price: "55,000원",
          date: "리뷰작성 가능 (2024년 12월 24일까지)",
          image: "/products/product.png",
        }
      ],
    };
  },
};
</script>
