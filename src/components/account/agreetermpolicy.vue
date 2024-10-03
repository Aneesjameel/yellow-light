<script>
  </script>
<template>
     <div class="mx-auto bg-white rounded-lg shadow-md p-6">
        <div class="p-6 bg-white rounded-md border">
          <div class="flex justify-between items-center mb-5">
        <!-- Kakao Pay -->
        <label class="flex items-center space-x-2">
            <input type="radio" name="payment" class="radio radio-primary" checked>
            <img src="../../../public/pay1.png" alt="Kakao Pay" class="h-6">
       
        </label>

        <!-- Naver Pay -->
        <label class="flex items-center space-x-2">
            <input type="radio" name="payment" class="radio radio-primary">
            <img src="../../../public/pay2.png" alt="Naver Pay" class="h-6">
          
        </label>

        <!-- Payco -->
        <label class="flex items-center space-x-2">
            <input type="radio" name="payment" class="radio radio-primary">
            <img src="../../../public/pay3.png" alt="Payco" class="h-6">
          
        </label>
    </div>
    <div class="flex justify-between items-center">
        <!-- Kakao Pay -->
        <label class="flex items-center space-x-2">
            <input type="radio" name="payment2" class="radio radio-primary" checked>
            <span>알뜰 사용가능</span>
        </label>

        <!-- Naver Pay -->
        <label class="flex items-center space-x-2">
            <input type="radio" name="payment2" class="radio radio-primary">
            <span>실시간 계좌이체</span>
        </label>

        <!-- Payco -->
        <label class="flex items-center space-x-2">
            <input type="radio" name="payment2" class="radio radio-primary">
            <span>간편 계좌결제</span>
        </label>
    </div>
    </div>
    </div>
  </template>
  

  
  <style scoped>
  </style>
  