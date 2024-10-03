<template>
    <section class="p-8">
      <h2 class="text-2xl font-bold mb-4">NEW PRODUCTS</h2>
      <div class="grid grid-cols-4 gap-6">
        <div v-for="product in products" :key="product.id" class="text-center">
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
          { id: 1, name: 'Chandelier', price: '₩350,000' },
          { id: 2, name: 'Pendant Light', price: '₩150,000' },
          { id: 3, name: 'Modern Lamp', price: '₩175,000' },
          { id: 4, name: 'Wall Light', price: '₩75,000' },
        ]
      }
    }
  }
  </script>
  