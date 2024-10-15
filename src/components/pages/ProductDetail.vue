<template>
    <div class="container mx-auto my-20 m:px-0 px-4">
      <!-- Product Image and Details -->
      <div class="flex flex-col md:flex-row">
        <!-- Left Section: Product Images -->
        <div class="w-full md:w-1/2" @touchstart="startSwipe" @touchmove="onSwipe" @touchend="endSwipe">
          <img :src="mainImage" class="rounded-lg w-[454px] h-[454px]" alt="Main Product Image" />
          <div class="flex mt-4 space-x-2 relative">
            <button
          class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-400"
          @click="prevImage"
        >
          &#10094; <!-- Left arrow symbol -->
        </button>

        <!-- Right Arrow -->
        <button
          class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-400"
          @click="nextImage"
        >
          &#10095; <!-- Right arrow symbol -->
        </button>
            <img
              v-for="(image, index) in productImages"
              :key="index"
              :src="image"
              class="w-[16] h-16 object-cover rounded-lg cursor-pointer"
              @click="selectImage(index)"
              :class="{'ring-2 ring-gray-400': selectedImageIndex === index}"
            />
           
          </div>
        </div>
  
        <!-- Right Section: Product Details -->
        <div class="w-full md:w-1/2 md:pl-10 gap-3">
          <div class="mt-2 flex space-x-1" v-if="labels">
          <span v-for="(label, labelIndex) in labels" :key="labelIndex" :class="label.class"><img src="/public/car.png" class="h-3 mr-2"/>{{ label.text }}</span>
        </div>
          <h3 class="text-2xl font-bold">{{ productName }}</h3>
         
          <p class="text-sm font-semibold">{{ name }}</p>
        <p class="text-red-500 text-lg font-bold">
          <span class="mr-2" v-if="discountPrice">{{ discountPrice }}</span>
          <span class="text-black font-bold">{{ discountPrice1 }}</span>
          <span class="text-gray-500 line-through">{{ originalPrice }}</span>
        </p>
        <p class="text-sm text-black font-bold">{{ size }}</p>
        <p class="text-sm text-black font-bold">{{ bulbType }}</p>
       
        <div class="flex p-3">
          <Div class="md:w-1/4 w-[20%]  font-bold text-xl">
            색상
          </Div>
          <Div class="md:w-3/4 w-[80%]">
            <div class="grid grid-cols-3 gap-4 ">
    <!-- Option Item -->
    <div
      v-for="(item, index) in items"
      :key="index"
      class="p-4 border rounded-lg text-center"
      :class="item.isSoldOut ? 'bg-gray-400' : 'bg-gray-200'"
    >
      <!-- Image -->
      <img :src="item.image" alt="option image" class="w-full  object-cover mb-2" />

      <!-- Title and Price -->
      <p class="text-lg font-semibold mb-1">{{ item.title }}</p>
      <p class="text-sm text-gray-600">{{ item.price }}</p>

      <!-- Status (Sold out or Sell) -->
      <p
        class="mt-2 text-red-600"
        :class="item.isSoldOut ? 'text-red-600' : 'text-gray-600'"
      >
        {{ item.isSoldOut ? 'Sold out' : 'Sell' }}
      </p>
    </div>
  </div>
          </Div>
        </div>
        <div class="flex p-3">
          <Div class="md:w-1/4 w-[20%]  font-bold text-xl">
            색상
          </Div>
          <Div class="md:w-3/4 w-[80%]">
            <div class="grid grid-cols-3 gap-4 ">
    <!-- Option Item -->
    <div
      v-for="(item, index) in items"
      :key="index"
      class="p-4 border rounded-lg text-center"
      :class="item.isSoldOut ? 'bg-gray-400' : 'bg-gray-200'"
    >
      <!-- Image -->
      <img :src="item.image" alt="option image" class="w-full object-cover mb-2" />

      <!-- Title and Price -->
      <p class="text-lg font-semibold mb-1">{{ item.title }}</p>
      <p class="text-sm text-gray-600">{{ item.price }}</p>

      <!-- Status (Sold out or Sell) -->
      <p
        class="mt-2 text-red-600"
        :class="item.isSoldOut ? 'text-red-600' : 'text-gray-600'"
      >
        {{ item.isSoldOut ? 'Sold out' : 'Sell' }}
      </p>
    </div>
  </div>
          </Div>
        </div>
        <div class="flex p-3 bg-gray-100">
          <Div class="md:w-1/4 w-[20%]  font-bold text-xl">
            색상
          </Div>
          <Div class="md:w-3/4 w-[80%]">
            <div class="grid grid-cols-3 gap-4 ">
    <!-- Option Item -->
    <div
      v-for="(item, index) in items"
      :key="index"
      class="p-4 border rounded-lg text-center"
      :class="item.isSoldOut ? 'bg-gray-400' : 'bg-gray-200'"
    >
      <!-- Image -->
      <img :src="item.image" alt="option image" class="w-full object-cover mb-2" />

      <!-- Title and Price -->
      <p class="text-lg font-semibold mb-1">{{ item.title }}</p>
      <p class="text-sm text-gray-600">{{ item.price }}</p>

      <!-- Status (Sold out or Sell) -->
      <p
        class="mt-2 text-red-600"
        :class="item.isSoldOut ? 'text-red-600' : 'text-gray-600'"
      >
        {{ item.isSoldOut ? 'Sold out' : 'Sell' }}
      </p>
    </div>
  </div>
          </Div>
        </div>
  
    
  
          <!-- Quantity Selector -->
          <div class="mt-4">
            <h3 class="font-semibold">Quantity</h3>
            <div class="flex items-center space-x-2">
              <button
                class="px-2 py-1 bg-gray-200 rounded"
                @click="updateQuantity('decrease')"
              >-</button>
              <span>{{ quantity }}</span>
              <button
                class="px-2 py-1 bg-gray-200 rounded"
                @click="updateQuantity('increase')"
              >+</button>
            </div>
          </div>
  
        
          <div class="flex space-x-2 w-3/4 mt-10 ">
                
                <router-link  to="cart" class="px-4 py-2 bg-gray-600 text-white rounded-[50px] hover:bg-gray-600  w-full text-center items-center justify-center">
                  장바구니
               
              </router-link>
              <router-link   to="cart" class="px-4 py-2 bg-yellow-600 text-white rounded-[50px] hover:bg-yellow-600  w-full text-center items-center justify-center">
            
                  장바구니
             
              </router-link>
              </div>
              
        </div>
      </div>
      <DetailPageTab/>
  <Review/>
  <lock/>
    </div>
  </template>
  
  <script>
  import DetailPageTab from './DetailPageTab.vue';
  import Review from './Review.vue';
  import lock from './lock.vue';
  export default {
   
 components: {
  DetailPageTab,
  Review,lock
 }  ,
    data() {
      return {
        productName: "LED 스넬 센서 직부등 8W",
        productPrice: "55,000₩",
        productDescription:
          "This modern LED wall light can be placed in a variety of locations in your home...",
          discountPrice: '15%',
            discountPrice1: '55,000원',
            originalPrice: '59,800원',
            size: 'W280xD200xH70 [후렌]',
            bulbType: 'LED 일체형 (8W/4000K)',
            labels: [{ text: '신상품', class: 'bg-yellow-500 text-white text-xs px-2 py-1 rounded flex items-center rounded-full  ' }, { text: '오늘출발', class: 'rounded-full items-center bg-yellow-800 text-white text-xs px-2 py-1 rounded flex' }],
            category: 0,
        productImages: [
          "products/1.png", // Replace with actual image paths
          "products/2.png",
          "products/3.png",
        ],
        startX: 0, // To store the initial touch position
        endX: 0, // To store the ending touch position
        selectedImageIndex: 0,
        quantity: 1,
        colors: [
          { value: "bg-gray-500", selected: false },
          { value: "bg-blue-500", selected: false },
          { value: "bg-yellow-500", selected: false },
        ],
        reviews: [
          { name: "User 1", text: "Great product!" },
          { name: "User 2", text: "Really satisfied with the quality." },
        ],
        items: [
        {
          title: '블랙',
          price: '10,000원',
          image: '/products/1.png', // Replace with actual image paths
          isSoldOut: false,
        },
        {
          title: '화이트',
          price: '15,000원',
          image: '/products/1.png', // Replace with actual image paths
          isSoldOut: true,
        },
        {
          title: '골드',
          price: '20,000원',
          image: '/products/1.png', // Replace with actual image paths
          isSoldOut: false,
        },
      ]
      };
    },
    computed: {
      mainImage() {
        return this.productImages[this.selectedImageIndex];
      },
    },
    methods: {
      // Method for selecting a specific image by index
      selectImage(index) {
        this.selectedImageIndex = index;
      },
  
      // Method for navigating to the next image
      nextImage() {
        if (this.selectedImageIndex < this.productImages.length - 1) {
          this.selectedImageIndex++;
        } else {
          this.selectedImageIndex = 0; // Loop back to the first image
        }
      },
  
      // Method for navigating to the previous image
      prevImage() {
        if (this.selectedImageIndex > 0) {
          this.selectedImageIndex--;
        } else {
          this.selectedImageIndex = this.productImages.length - 1; // Loop to the last image
        }
      },
  
      // Method to select a color
      selectColor(index) {
        this.colors.forEach((color, i) => {
          color.selected = i === index;
        });
      },
  
      // Method to update quantity
      updateQuantity(action) {
        if (action === "increase") {
          this.quantity++;
        } else if (action === "decrease" && this.quantity > 1) {
          this.quantity--;
        }
      },
      startSwipe(event) {
      this.startX = event.touches[0].clientX;
    },
    onSwipe(event) {
      this.endX = event.touches[0].clientX;
    },
    endSwipe() {
      const swipeDistance = this.startX - this.endX;
      const threshold = 50; // Minimum swipe distance in pixels to trigger action

      if (swipeDistance > threshold) {
        this.nextImage();
      } else if (swipeDistance < -threshold) {
        this.prevImage();
      }
    },
    },
  };
  </script>
  
  
  <style scoped>
  /* You can add custom styles here if needed */
  </style>
  