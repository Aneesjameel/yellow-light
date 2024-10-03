<template>
    <div >
      <ul class="flex border-b">
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          class="mr-1"
          @click="activeTab = index"
        >
          <a
            :class="[
              ' inline-block py-2 px-4 text-blue-500 hover:text-blue-800',
              activeTab === index ? 'border-2 border-b-primary' : ''
            ]"
            href="#"
          >
            {{ tab }}
          </a>
        </li>
      </ul>
      <div v-if="activeTab === 0">

        <Grid />
        <button class="bg-greyTone text-white px-6 py-3 rounded-2xl mt-4">추가</button>
      </div>
      <div v-if="activeTab === 1">

<tab2 />
<calendar/>
<Grid/>

</div>
<div v-if="activeTab === 2">
        <!-- Placeholder for other tabs -->
       <ModalCalling/>
      </div>
    </div>
  </template>
  
  <script>
  import Grid from "./Grid.vue";
  import tab2 from "./tab2.vue";
  import calendar from "./calendar.vue";
  import ModalCalling from "./ModalCalling.vue";
  
  export default {
    components: {
      Grid,
      tab2,
      calendar,
      ModalCalling
    },
    data() {
      return {
        activeTab: 0,
        tabs: ["글로벌 여행창구", "세상에 없던 여행", "체험여행"],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  