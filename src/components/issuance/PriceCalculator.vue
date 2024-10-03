<template>
    <div class="bg-white p-6 rounded-lg w-full border-l border-greyTone">
      <!-- Selected Dates -->
      <div class="mb-6">
        <p class="text-lg font-semibold text-lBlue">선택된 일정</p>
        <p class="font-bold">2023년 8월 16일 ~ 8월 22일 (총 6박 7일)</p>
        <p class="text-xs text-gray-500 mt-1">
          ※ 좌측 캘린더 '출발일'을 클릭하면 출발일을 변경하실 수 있습니다.
        </p>
      </div>
  
      <!-- Input Selection -->
      <div class="space-y-4">
        <!-- Adult -->
        <div class="flex justify-between items-center   ">
          <div>
          <div class="text-greyTone1">성인</div>
          
          <span class="  font-bold">{{ formatPrice(559000) }}원</span>
        </div>
          <div class="flex items-center space-x-2">
            <div class="border border-greyTone">
            <button @click="decrease('adult')" class="px-3 py-1 border border-greyTone text-gray-600 rounded">
              -
            </button>
            <input type="text" v-model="adults" class="w-12 text-center rounded" readonly />
            <button @click="increase('adult')" class="px-3 py-1 border border-greyTone text-gray-600 rounded">
              +
            </button>
            </div>

          </div>
        </div>
  
        <!-- Child -->
        <div class="flex justify-between items-center   ">
          <div>
          <div class="text-greyTone1">아동</div>
          <span class="  font-bold text-bold">{{ formatPrice(459000) }}원</span>
        </div>
          <div class="flex items-center space-x-2">
            <div class="border border-greyTone">
            <button @click="decrease('child')" class="px-3 py-1 border border-greyTone text-gray-600 rounded">
              -
            </button>
            <input type="text" v-model="children" class="w-12 text-center  rounded" readonly />
            <button @click="increase('child')" class="px-3 py-1 border border-greyTone text-gray-600 rounded">
              +
            </button>
        </div>
          </div>
        </div>
  
        <!-- Infant -->
        <div class="flex justify-between items-center   ">
          <div>
          <div class="text-greyTone1">유아</div>
          <span class="  font-bold">{{ formatPrice(35000) }}원</span>
        </div>
          <div class="flex items-center space-x-2">
            <div class="border border-greyTone">
            <button @click="decrease('infant')" class="px-3 py-1 border border-greyTone text-gray-600 rounded">
              -
            </button>
            <input type="text" v-model="infants" class="w-12 text-center rounded" readonly />
            <button @click="increase('infant')" class="px-3 py-1 border border-greyTone text-gray-600 rounded">
              +
            </button>
        </div>
           
          </div>
        </div>
      </div>
  
      <!-- Total Price -->
      <div class="mt-6 text-xl font-semibold text-blue-600 text-right text-blue   flex justify-between items-center">
        <div>
          총 금액 
        </div>
        <div>
        {{ formatPrice(totalPrice) }}원
        <p class="text-xs text-gray-500 mt-1 text-greyTone1">※ 유류할증료&제세공과금 포함</p>
      </div>
      </div>
  
      <!-- Payment Button -->
      <div class="mt-6">
        <button class=" py-3 bg-blue text-white rounded-lg text-lg  w-full rounded-2xl">결제하기</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        adults: 1,
        children: 1,
        infants: 1,
        adultPrice: 559000,
        childPrice: 459000,
        infantPrice: 35000,
      };
    },
    computed: {
      totalPrice() {
        return (
          this.adults * this.adultPrice +
          this.children * this.childPrice +
          this.infants * this.infantPrice
        );
      }
    },
    methods: {
      increase(type) {
        if (type === 'adult') this.adults++;
        if (type === 'child') this.children++;
        if (type === 'infant') this.infants++;
      },
      decrease(type) {
        if (type === 'adult' && this.adults > 0) this.adults--;
        if (type === 'child' && this.children > 0) this.children--;
        if (type === 'infant' && this.infants > 0) this.infants--;
      },
      formatPrice(value) {
        return value.toLocaleString();
      }
    }
  };
  </script>
  
  <style scoped>
  /* Scoped styles, if any */
  </style>
  