<template>
    <div class="container mx-auto">
      <section class="px-2 md:px-10 py-20">
        <h2 class="text-4xl font-bold mb-4 text-gold ">Design Rail</h2>
        <h2 class="text-xl  mb-4 text-gold">레일조명</h2>
        
        <div class="grid md:grid-cols-4 grid-cols-2 gap-6 mt-10 justify-center md:justify-start">
          <div v-for="product in products" :key="product.id" class="text-center">
            <img :src=" product.img" alt="Product Image" class=" h-[376px] w-[276px] object-cover rounded-tr-2xl mb-5">
            <h3 class="text-lg text-left">{{ product.name }}</h3>
            <p class=" text-left font-bold">{{ product.price }}</p>
          
            
          </div>
        
          
        </div>
        <div class="flex justify-center w-full my-16">
          <button class="w-[240px] h-[48px] border-[#5C4715] border-2 text-[#5C4715] rounded-[50px] flex items-center justify-center "><img src="/icons/plus.png" class="mr-3"/><span>레일조명 더보기</span></button>
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
    