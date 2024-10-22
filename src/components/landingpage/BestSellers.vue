<template>
  <div class="container mx-auto">
    <section class="p-10">
      <h2 class="text-3xl font-bold mb-4">BEST SELLERS</h2>
      <h2 class="text-xl mb-4">이달의 인기상품을 확인해 보세요!</h2>

      <div class="grid md:grid-cols-4 grid-cols-1 gap-6 mt-10  ">
        <div v-for="product in products" :key="product.id" class="text-center relative justify-center md:justify-start items-center w-[276px]">
          <div class="text-center relative justify-center md:justify-start items-center w-[276px]">
          <img :src="product.img" alt="Product Image" class="h-[321px] w-[276px] object-cover mb-2 rounded-tr-2xl">
          <div 
            class="absolute bottom-2 right-2  cursor-pointer" 
            @click="toggleFavorite(product)"
          >
            <img 
              :src="product.isFavorite ? '/heartGray.png' : '/favorite.png'" 
              alt="Favorite Icon" 
              class="w-6 h-6"
            />
          </div>
        </div>
          <h3 class="text-sm text-left font-bold">{{ product.name }}</h3>
          <p class="text-left font-bold text-lg">{{ product.price }}</p>
          <div class="flex gap-2">
            <div class="text-sm text-left font-bold bg-[#F4AB1B] text-white px-2 py-2 flex items-center  mt-2 rounded-[4px]">{{ product.a }}</div>
            <div class="text-sm text-left font-bold bg-[#3C1BF4] text-white px-4 py-2 flex items-center  mt-2 rounded-[4px]"><img src="/car.png" class="mr-3"/>{{ product.b }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: '상품이름 상품이름', price: '215,000원', img: 'products/bestsellers/Rectangle 14.png', a: '신상품', b: '오늘출발', isFavorite: false },
        { id: 2, name: '상품이름 상품이름', price: '245,000원', img: 'products/bestsellers/Rectangle 15.png', a: '신상품', b: '오늘출발', isFavorite: false },
        { id: 3, name: '상품이름 상품이름', price: '275,000원', img: 'products/bestsellers/Rectangle 16.png', a: '신상품', b: '오늘출발', isFavorite: false },
        { id: 4, name: '상품이름 상품이름', price: '305,000원', img: 'products/bestsellers/Rectangle 17.png', a: '신상품', b: '오늘출발', isFavorite: false },
        { id: 5, name: '상품이름 상품이름', price: '215,000원', img: 'products/bestsellers/Rectangle 18.png', a: '신상품', b: '오늘출발', isFavorite: false },
        { id: 6, name: '상품이름 상품이름', price: '245,000원', img: 'products/bestsellers/Rectangle 19.png', a: '신상품', b: '오늘출발', isFavorite: false },
        { id: 7, name: '상품이름 상품이름', price: '275,000원', img: 'products/bestsellers/Rectangle 20.png', a: '신상품', b: '오늘출발', isFavorite: false },
        { id: 8, name: '상품이름 상품이름', price: '305,000원', img: 'products/bestsellers/Rectangle 19.png', a: '신상품', b: '오늘출발', isFavorite: false },
      ]
    }
  },
  methods: {
    toggleFavorite(product) {
      product.isFavorite = !product.isFavorite;
    }
  }
}
</script>

<style scoped>
/* Add any necessary styles here */
</style>
