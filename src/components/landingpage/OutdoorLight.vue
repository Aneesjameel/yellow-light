<template>
    <div class="container mx-auto">
      <section class=" px-2 md:px-10 py-20">
        <h2 class="text-4xl font-bold mb-4 text-gold ">Outdoor Light</h2>
        <h2 class="text-xl  mb-4 text-gold">야외조명</h2>
        
        <div class="grid md:grid-cols-4 grid-cols-2  gap-6 mt-10 justify-center md:justify-start">
          <div v-for="product in products" :key="product.id" class="text-center">
            <img :src=" product.img" alt="Product Image" class=" h-[376px] w-[276px] object-cover rounded-tr-2xl mb-5">
            <h3 class="text-lg text-left">{{ product.name }}</h3>
            <p class=" text-left font-bold">{{ product.price }}</p>
          
            
          </div>
        
          
        </div>
        <div class="flex justify-center w-full my-16">
          <button class="w-[240px] h-[48px] border-[#5C4715] border-2 text-[#5C4715] rounded-[50px] flex items-center justify-center "><img src="/icons/plus.png" class="mr-3"/><span>야외조명 더보기</span></button>
         </div>
      </section>
      <hr class="border-golden"/>
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
      }
    }
    </script>
    