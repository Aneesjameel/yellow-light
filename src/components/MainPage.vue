<script setup>
import sidebar from './sidebar.vue'
import tabsGrid from './tabsGrid.vue'
</script>
<template>
  <div class="container-fluid">
    <div class="md:flex w-full">
    
        <sidebar/>
      
      <div class="flex-grow md:p-10 p-2">
        <div class="flex justify-between w-full md:w-1/5 mb-4">
          <h1 class="text-2xl">상품관리</h1>
          <h1 class="text-lg">글로벌 여행칭구</h1>
          
        </div>
        <tabsGrid/>
      </div>
      
      
    </div>
  
  </div>
</template>
<style scoped>
</style>