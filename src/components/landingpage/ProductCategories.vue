<template>
    <section class="p-8">
      <h2 class="text-2xl font-bold mb-4">LIVING · BEDROOM</h2>
      <div class="grid grid-cols-4 gap-6">
        <div v-for="product in products" :key="product.id" class="text-center">
          <img src="https://via.placeholder.com/150" alt="Product Image" class="w-full h-48 object-cover mb-2">
          <h3 class="text-lg">{{ product.name }}</h3>
          <p class="text-yellow-600">{{ product.price }}</p>
        </div>
      </div>
    </section>
  
    <section class="p-8">
      <h2 class="text-2xl font-bold mb-4">TABLE · POINT</h2>
      <div class="grid grid-cols-4 gap-6">
        <div v-for="product in tableProducts" :key="product.id" class="text-center">
          <img src="https://via.placeholder.com/150" alt="Product Image" class="w-full h-48 object-cover mb-2">
          <h3 class="text-lg">{{ product.name }}</h3>
          <p class="text-yellow-600">{{ product.price }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { id: 1, name: 'Wall Light', price: '215,000원' },
          { id: 2, name: 'Ceiling Light', price: '245,000원' },
          { id: 3, name: 'Sconce', price: '₩275,000' },
          { id: 4, name: 'Table Lamp', price: '₩305,000' },
        ],
        tableProducts: [
          { id: 5, name: 'LED Light', price: '₩200,000' },
          { id: 6, name: 'Gold Pendant', price: '₩275,000' },
          { id: 7, name: 'Modern Table Lamp', price: '₩320,000' },
          { id: 8, name: 'Designer Light', price: '₩350,000' },
        ]
      }
    }
  }
  </script>
  