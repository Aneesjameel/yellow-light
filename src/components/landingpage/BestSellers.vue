<template>
  <div class="container mx-auto">
    <section class=" p-10">
      <h2 class="text-xl font-bold mb-4">BEST SELLERS</h2>
      <h2 class="text-xl  mb-4">이달의 인기상품을 확인해 보세요!</h2>
      
      <div class="grid grid-cols-4 gap-6 mt-10">
        <div v-for="product in products" :key="product.id" class="text-center">
          <img :src=" product.img" alt="Product Image" class=" h-[376px] w-[276px] object-cover mb-2 rounded-tr-2xl">
          <h3 class="text-lg text-left">{{ product.name }}</h3>
          <p class=" text-left font-bold">{{ product.price }}</p>
          <div class="flex gap-2">
            <div class=" text-left font-bold bg-yellow-600 text-white px-2 py-1 flex items-center text-sm">{{ product.a }}</div>
          <div class=" text-left font-bold bg-blue text-white px-5 py-3 flex items-center text-sm"><img src="/car.png" class="mr-3"/>{{ product.b }}</div>
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
          { id: 1, name: 'Wall Light', price: '₩215,000',img:'products/bestsellers/Rectangle 16.png',a:'신상품',b:'오늘출발' },
          { id: 2, name: 'Ceiling Light', price: '₩245,000' ,img:'products/bestsellers/Rectangle 17.png',a:'신상품',b:'오늘출발'},
          { id: 3, name: 'Sconce', price: '₩275,000',img:'products/bestsellers/Rectangle 18.png',a:'신상품',b:'오늘출발' },
          { id: 4, name: 'Table Lamp', price: '₩305,000',img:'products/bestsellers/Rectangle 19.png',a:'신상품',b:'오늘출발' },
          { id: 1, name: 'Wall Light', price: '₩215,000',img:'products/bestsellers/Rectangle 16.png',a:'신상품',b:'오늘출발' },
          { id: 2, name: 'Ceiling Light', price: '₩245,000' ,img:'products/bestsellers/Rectangle 17.png',a:'신상품',b:'오늘출발'},
          { id: 3, name: 'Sconce', price: '₩275,000',img:'products/bestsellers/Rectangle 18.png',a:'신상품',b:'오늘출발' },
          { id: 4, name: 'Table Lamp', price: '₩305,000',img:'products/bestsellers/Rectangle 19.png',a:'신상품',b:'오늘출발' },
        ]
      }
    }
  }
  </script>
  