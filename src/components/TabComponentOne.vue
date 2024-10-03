<!-- TabsComponent.vue -->

<script>
export default {
  data() {
    return {
      selectedTab: 0, // default active tab
      tabs: ['숙박여행', '당일치기','숙박여행', '당일치기', '당일치기'], // Tab names
      selectedOption: "", // Stores the selected option
      options: ["추천순", "최신순", "마감일 순"], // List of dropdown options
    };
  },
  methods: {
    selectTab(index) {
      this.selectedTab = index;
    },
  },
};

</script>
<template>
  <div>
   
    <!-- Tab Headers -->
    <ul class="flex  w-2/3 tab">
      <li 
        v-for="(tab, index) in tabs" 
        :key="index" 
        @click="selectTab(index)" 
        class="cursor-pointer py-2 px-4  flex-1 h-14 items-center flex justify-center" 
        :class="{
          'text-blue-500 border-blue-500 tabactive': selectedTab === index,
          'text-gray-500 border-transparent hover:text-blue-500': selectedTab !== index
        }"
      >
        {{ tab }}
      </li>
    </ul>

    <!-- Tab Content -->
    <div class="dropdowntabs mt-6 flex  justify-end items-center text-right w-full">
    <!-- Label for Dropdown -->
     <Div class="flex items-center">
    <label for="dropdown" class="block mb-2 text-sm font-medium text-gray-700 pr-2">정렬 :</label>
    
    <!-- Dropdown Menu -->
     <div>
    <select 
      id="dropdown" 
      v-model="selectedOption" 
      class="w-full px-3 py-2 border border-gray-300 rounded-md bg-transparent text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
      <option disabled value="">Please select</option>
      <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>
    </select>
  </Div>
  </div>
  </div>
    <div class="mt-6">
      <div v-if="selectedTab === 0">
        <slot name="tab1"></slot>
      </div>
      <div v-if="selectedTab === 1">
        <slot name="tab2"></slot>
      </div>
      <div v-if="selectedTab === 2">
        <slot name="tab3"></slot>
      </div>
      <div v-if="selectedTab === 4">
        <slot name="tab4"></slot>
      </div>
      <div v-if="selectedTab === 5">
        <slot name="tab5"></slot>
      </div>
    </div>
  </div>
</template>



<style scoped>
.tab{
  background:#EBEBEB;
  color:#EBEBEB;
  text-align:center;
      border: none;
  }
  .tab li{
    color: #818181;
    border-right: 5px solid #fff;
  }
  .tab li.tabactive{
    background-color:#0078B3;
    color:white;
  }
/* Optionally, you can use additional custom styles here */
</style>
