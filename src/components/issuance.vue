<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
<div class="container mx-auto">
  <div class="issuance flex flex-wrap mt-8 mb-8">
  <div class="gradientYellow   p-8  md:w-1/2">
  <div class="mb-4">🇨🇳 중국 비자발급 전문기업 나눔투어</div>
  <h4 class="amount-bold mb-4">개인/단체 발급신청 가능<br>
비자발급 위탁업체로 빠르고 신속하게 발급 가능합니다.</h4>
    <button type="button" class=" inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-mehroon travelBadge">발급신청하기</button>
  </div>
<div class="gradientRed p-8  md:w-1/2"></div>


    </div>

  </div>
</template>

<style scoped>

</style>
