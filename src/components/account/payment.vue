<script>
export default {
  data() {
    return {
      agreeAll: false,
      consentItems: [
        { text: "국외여행 표준약관 동의", agreed: false, required: true },
        { text: "개인정보 수집 및 이용 동의", agreed: false, required: true },
        { text: "고유식별번호 수집 및 처리 동의", agreed: false, required: true },
        { text: "개인정보 제 3자 제공 동의", agreed: false, required: true },
        { text: "민감정보 수집 및 이용 동의", agreed: false, required: true },
        { text: "위치정보 이용약관 동의", agreed: false, required: false }
      ]
    };
  },
  methods: {
    toggleAll() {
      this.consentItems.forEach(item => {
        item.agreed = this.agreeAll;
      });
    },
    watch: {
      consentItems: {
        deep: true,
        handler() {
          this.agreeAll = this.consentItems.every(item => item.agreed);
        }
      }
    }
  }
};
  </script>
<template>
     
    <div class=" mx-auto bg-white rounded-lg shadow-md p-6    ">
        <div class="p-6 bg-white rounded-md border  ">
    
       
      
        <h2 class="text-2xl  font-bold mb-3">약관 및 개인정보 동의 <span class="text-red-500">(필수)</span></h2>
       
  
      
  <!-- Label for 성인1 -->

   

    <!-- 전체 동의 (Agree to all) -->
    <div class="flex items-center mb-4 border border-gray-300 p-3">
      <input 
        type="checkbox" 
        v-model="agreeAll" 
        @change="toggleAll" 
        class="mr-2 h-5 w-5 text-blue-600"
      />
      <label class="text-lg font-medium">전체 동의</label>
    </div>

    <!-- Consent items -->
    <div class="space-y-2">
      <div 
        v-for="(item, index) in consentItems" 
        :key="index" 
        class="flex items-center"
      >
        <input 
          type="checkbox" 
          v-model="item.agreed" 
          class="mr-2 h-5 w-5 text-blue-600"
        />
        <label :class="item.required ? 'text-black' : 'text-black'">
          <span v-if="item.required" class="text-black">(필수)</span>
          <span v-else class="text-black">(선택)</span>
          <span  class="text-blue">  {{ item.text }}</span>
        
        </label>
      </div>
    </div>

</div>
</div>
  </template>
  

  
  <style scoped>
  
  </style>
  