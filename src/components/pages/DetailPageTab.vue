<template>
     <div class="container mx-auto my-20 m:px-0 px-4">
      <!-- Tabs Navigation -->
      <div class="flex border-b border-gray-200">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectedTab = index"
          :class="[
            'py-2 px-4 text-gray-700 hover:text-yellow-500 focus:outline-none',
            selectedTab === index ? 'border-b-2 border-yellow-500 font-semibold' : '',
          ]"
        >
          {{ tab }}
        </button>
      </div>
  
      <!-- Tab Content -->
      <div class="mt-4">
        <div v-if="selectedTab === 0" class="flex">
          <!-- Image Section -->
          <div class="w-1/2 pr-4">
            <img src="/public/products/long.png" alt="Product Image" class="rounded-lg w-full h-auto" />
          </div>
  
          <!-- Form Section -->
          <div class="w-1/2 pl-4">
            <div class="space-y-4">
              <!-- Color Selection -->
              <div>
                <label for="color" class="block font-semibold">> 컬러</label>
                <select id="color" class="w-full mt-1 p-2 border rounded">
                  <option>옵션을 선택해 주세요. (필수)</option>
                  <option>Color 1</option>
                  <option>Color 2</option>
                </select>
              </div>
  
              <!-- Bulb Selection -->
              <div>
                <label for="bulb" class="block font-semibold">> 램프선택</label>
                <select id="bulb" class="w-full mt-1 p-2 border rounded">
                  <option>옵션을 선택해 주세요. (필수)</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
  
              <!-- Switch Cord Selection -->
              <div>
                <label for="cord" class="block font-semibold">> 스위치 코드선</label>
                <select id="cord" class="w-full mt-1 p-2 border rounded">
                  <option>옵션을 선택해 주세요. (필수)</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
              <div class=" bg-gray-100 p-5">
              <!-- Quantity Selector -->
              <div class="flex  gap-4 items-start  justify-between flex-col mb-5">
                <label class="font-semibold">LED 스넬 센서 직부등 8W (블랙)</label>
                <div class="border bg-white ">
                <button
                  class="px-2 py-1 bg-white rounded"
                  @click="updateQuantity('decrease')"
                >-</button>
                <span class="px-2 py-1 bg-white rounded">{{ quantity }}</span>
                <button
                  class="px-2 py-1 bg-white rounded"
                  @click="updateQuantity('increase')"
                >+</button>
              </div>
              </div>
  
              <!-- Price Display -->
              <div class="flex items-center space-x-2 md:flex-row flex-col">
                <span class="line-through text-gray-500">55,000₩</span>
                <span class="text-xl font-semibold">50,000₩</span>
              </div>
            </div>
              <!-- Add to Cart Buttons -->
               <h1 class="font-bold">주문금액</h1>
              <div class="flex space-x-2 md:flex-row flex-col gap-2">
                
                <router-link   to="cart" ><button class="px-4 py-2 bg-gray-600 text-white rounded-[50px] hover:bg-gray-600">
                  장바구니
                </button></router-link>
                <router-link   to="cart" ><button class="px-4 py-2 bg-yellow-600 text-white rounded-[50px] hover:bg-yellow-600">
                  바로구매
                </button></router-link>
                <img
      @click="toggleHeart"
      :src="[ isHearted ?  '/public/heart1.png' :'/public/heart2.png']"/>
   

              </div>
            </div>
          </div>
        </div>
  
        <!-- Placeholder for other tabs -->
        <div v-else-if="selectedTab === 1">
          <p>Purchase Guide Content...</p>
        </div>
  
        <div v-else-if="selectedTab === 2">
          <p>Reviews Content...</p>
        </div>
  
        <div v-else-if="selectedTab === 3">
          <p>Product Inquiry Content...</p>
        </div>
      </div>
    </div>
  </template>
<script>
export default {
  data() {
    return {
      tabs: ["상품정보", "구매가이드", "리뷰 100", "상품문의 23"],
      selectedTab: 0, // Default to the first tab
      quantity: 1, 
      isHearted: false, // Toggle state for the heart icon
    };
  },
  methods: {
    toggleHeart() {
      this.isHearted = !this.isHearted; // Toggle the heart state
    },
    updateQuantity(action) {
      if (action === "increase") {
        this.quantity++;
      } else if (action === "decrease" && this.quantity > 1) {
        this.quantity--;
      }
    },
  },
};
</script>
  