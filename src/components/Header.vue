<template>
  <div :class="['ezy__nav1', isScrolled ? 'bg-black' : 'light', 'text-white fixed top-0 w-full']">
  <nav class="navigation">
    <div class="container  mx-auto">
  <Disclosure as="nav"  v-slot="{ open }">
    <div class="mx-auto ">
      <div class="relative flex h-20 items-center justify-between">
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2   hover:text-yellow focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <router-link to="/"><img src="/logo.png" style="height:45px"></router-link>
            <router-link v-for="item in navigation"  :to="item.pageLink" :class="[item.current ? ' text-yellow  items-center  flex' : 'text-white    hover:text-yellow  items-center  flex', 'rounded-md px-3 py-2 text-sm font-medium items-center  flex']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
          </div>
          
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden sm:ml-6 sm:block">
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
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? ' text-yellow' : 'text-white  hover:text-yellow', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined"><router-link :href="item.href"  :to="item.pageLink">{{ item.name }}</router-link>
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
  </div>
  </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const navigation = [
  { name: '전체상품', pageLink: 'AllProducts', current: true },
  { name: '신상', pageLink: 'merchant', current: true },
  { name: '베스트', pageLink: 'Best', current: false },
  { name: '무료컨설팅', pageLink: 'Consulting', current: false },
  { name: '고객센터', pageLink: 'customer', current: false },
];

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
