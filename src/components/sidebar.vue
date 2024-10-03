<template>
  
    <!-- Sidebar -->
    
    <div>
      <div class="border-r-[#D0D0D0] border  transition-all duration-300 w-full h-cs">
        <button @click="toggleSidebar" class=" mt-5 p-4 flex justify-between w-full">
        <span>메뉴</span><span v-if="isSidebarOpen">←</span>
        <span v-else>→</span>
      </button>
      <hr class="mt-20"/>
      <div v-if="isSidebarOpen" class="p-4">
        <nav>
          <ul>
           
            <li class="mb-2 mt-5">상품관리</li>
            <li class="mb-2">예약관리</li>
            <li class="mb-2">회원관리</li>
            <li class="mb-5 mt-5"><hr/></li>
            <li class="mb-2">여행창구 Story</li>
            <li class="mb-2">FAQ</li>
            <li class="mb-2">공지사항</li>
            <li class="mb-2 mt-5"><hr/></li>
            <li class="mb-2">관리자 계정관리</li>
          </ul>
        </nav>
      </div>
      <button class="p-4 flex justify-between w-full">
       <img src="/logout.svg"/>
      </button>
    </div>
    
    </div>
    
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style scoped>
.h-cs{
  
    height: calc(100vh - 84px);

}
/* Add any additional styles if needed */
</style>
