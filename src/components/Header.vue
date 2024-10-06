


<template>
  <div class="ezy__nav1 light  bg-black text-white relative">
    <div class="container mx-auto flex items-center justify-between py-4 px-4">
      <!-- Logo Section -->
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <router-link to="/"><img src="/logo.png" style="height:45px"></router-link>
          <router-link v-for="item in navigation"  :to="item.pageLink" :class="[item.current ? ' text-yellow  items-center  flex' : 'text-white    hover:text-yellow  items-center  flex', 'rounded-md px-3 py-2 text-sm font-medium items-center  flex']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
        </div>
        
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 sm:pr-0 hidden md:ml-6 md:block">
        <div class="flex space-x-4">
        
          <!-- <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? ' text-yellow  items-center  flex' : 'text-white  hover:text-yellow  items-center  flex', 'rounded-md px-3 py-2 text-sm font-medium items-center  flex']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a> -->
        <!-- Right side (B2B, search, cart, login) -->
<div class="flex items-center space-x-4">
  <!-- B2B Button -->
  <button class="border border-white rounded-full px-3 py-1 text-sm">
    B2B
  </button>

  <!-- Search Icon -->
  <button class="text-white hover:text-yellow-500">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </button>

  <!-- Cart Icon -->
  <button class="relative text-white hover:text-yellow-500">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l1.5-6H6.4M16 13a3 3 0 11-6 0M7 13V6a2 2 0 012-2h8a2 2 0 012 2v7" />
    </svg>
    <!-- Cart item count -->
    <span class="absolute -top-1 -right-2 bg-red-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">0</span>
  </button>

  <!-- User Account Links -->
  <div class="flex space-x-4">
    <a href="#" class="text-white hover:text-yellow-500">마이페이지</a>
    <a href="#" class="text-white hover:text-yellow-500">로그아웃</a>
  </div>
      
        </div>
      </div>

      <!-- Profile dropdown -->
     
    </div>
      <!-- Desktop Menu (hidden on mobile) -->
     

      <!-- Mobile Menu Button (visible on mobile only) -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu (hidden by default, toggles with button) -->
    <nav v-if="isMenuOpen" class="md:hidden bg-black py-2">
      <router-link @click="closeMenu" v-for="item in navigation"  :to="item.pageLink" :class="[item.current ? ' text-yellow  items-center  flex' : 'text-white    hover:text-yellow  items-center  flex', 'rounded-md px-3 py-2 text-sm font-medium items-center  flex']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
     
    </nav>
  </div>
</template>

<script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ref, onMounted, onUnmounted } from 'vue';

// Reactive property to manage the mobile menu state
const isMenuOpen = ref(false);
const closeMenu = () => {
  isMenuOpen.value = false;
};
// Function to toggle the mobile menu visibility
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
// Reactive property to track scroll state
const isScrolled = ref(false);

// Function to handle scroll event
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50; // Adjust this value as needed
};

// Add scroll event listener when the component mounts
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Clean up the event listener when the component unmounts
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

   


const navigation = [
  { name: '전체상품', pageLink: 'AllProducts', current: true },
  { name: '신상', pageLink: 'merchant', current: true },
  { name: '베스트', pageLink: 'Best', current: false },
  { name: '무료컨설팅', pageLink: 'Consulting', current: false },
  { name: '고객센터', pageLink: 'customer', current: false },
];



</script>

<style scoped>
  .navigation {
    background-color: rgb(0 0 0 / 12%);
    transition: background-color 0.3s ease; /* Smooth transition for background color change */
  }
  .ezy__nav1 {
    z-index: 1;
  }
  </style>