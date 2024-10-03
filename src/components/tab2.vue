<template>
    <div class="flex justify-normal items-center ">
        <div class="p-4  w-1/2">
      <!-- MultiSelect for Themes -->
      <div class="mb-2 flex gap-2">
        <label class="block text-gray-700 text-sm font-bold mb-2 w-20">테마</label>
        <MultiSelect 
          v-model="selectedThemes" 
          :options="themes" 
          optionLabel="name" 
          placeholder="테마를 선택하세요" 
          display="chip"
          :filter="true"
          class="w-full"
        />
      </div>
  
      <!-- Input for Title -->
      <div class="mb-2 flex gap-2">
        <label class="block text-gray-700 text-sm font-bold mb-2 w-20">제목</label>
        <InputText
          v-model="title"
          placeholder="일본 소도시 미식여행 / 3박4일"
          class="border border-gray-300 p-2 rounded w-full"
        />
      </div>
  
      <!-- MultiSelect for Travel Dates -->
      <div class="mb-2 flex gap-2">
        <label class="block text-gray-700 text-sm font-bold mb-2 w-20">출발일</label>
        <MultiSelect 
          v-model="selectedDates" 
          :options="availableDates" 
          placeholder="출발일을 선택하세요" 
          display="chip"
          :filter="true"
          class="w-full"
        />
      </div>
    </div>
    <button @click="search" class="bg-white border border-black ml-10 text-black px-6 py-3 rounded-2xl mt-4">추가</button>
    </div>
    
  </template>
  
  <script>
  import MultiSelect from 'primevue/multiselect'
  import InputText from 'primevue/inputtext'; // Import InputText
  
  export default {
    components: {
      MultiSelect,
      InputText
    },
    data() {
      return {
        themes: [
          { name: '힐링' },
          { name: '미식' },
          { name: '온천' }
        ],
        selectedThemes: [],
        title: '',
        availableDates: [
          { name: '2024-08-23' },
          { name: '2024-09-23' },
          { name: '2024-10-24' },
          { name: '2024-11-24' }
        ],
        selectedDates: []
      };
    },
    methods: {
      search() {
        // Implement search logic
        console.log('Searching for:', this.title, this.selectedThemes, this.selectedDates);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  </style>
  