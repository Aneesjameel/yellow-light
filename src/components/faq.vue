<template>
<div class="container mx-auto mt-20 mb-20 faqComp">
  <Disclosure>
  <div class="flex flex-auto p-3 ">  
    <DisclosureButton class="py-2 flex-1 border-b mb-4 border-b-dBlue">
    <div class="flex flex-auto justify-between">
  
      <h3 class="amount-bold text-blue">자주 묻는 질문?</h3>
   
 

     <button class=" text-white bg-dBlue px-4 py-2">more</button>

     </div>
    </DisclosureButton>
    </div>
    <DisclosurePanel>
    <ul  class="decoration-dotted p-3">
    <li class="decoration-dotted">여행을 마친 후 불편사항이 있습니다.</li>
    <li class="decoration-dotted">사전 좌석 지정 및 체크인 등 부가서비스에 대해 궁금해요!</li>
    <li class="decoration-dotted">(영업시간 이후) 취소/환불하고 싶은데 어떻게 해야 하나요?</li>
    <li class="decoration-dotted">여행을 마친 후 불편사항이 있습니다.<br>사전 좌석 지정 및 체크인 등 부가서비스에 대해 궁금해요!</li>
    <li class="decoration-dotted">(영업시간 이후) 취소/환불하고 싶은데 어떻게 해야 하나요?</li>
    </ul>
    </DisclosurePanel>
  </Disclosure>
  </div>
</template>

<script setup>
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from '@headlessui/vue'
  import { ChevronRightIcon } from '@heroicons/vue/20/solid'
</script>