<template>
  <div class="container mx-auto mt-10 mb-10 px-4">
    <div class="p-6">
      <div class="brand mb-8">
        <h1 class="font-semibold text-xl text-center">리뷰 관리</h1>
      </div>
      <!-- Tabs -->
      <div class="flex border-b border-gray-200">
        <button
          :class="{ 'text-black': activeTab === 1, 'text-[#7B7B7B]': activeTab !== 1 }"
          class="whitespace-nowrap py-4 px-6 font-bold text-sm" @click="activeTab = 1">
          작성 가능한 리뷰 (3)
        </button>
        <button
          :class="{ 'text-black': activeTab === 2, 'text-[#7B7B7B]': activeTab !== 2 }"
          class="whitespace-nowrap py-4 px-6 font-bold text-sm" @click="activeTab = 2">
          작성 한 리뷰 (3)
        </button>
      </div>

      <!-- Tab Content -->
      <div class="mt-6" v-if="activeTab === 1">
        <TabOne />
      </div>
      <div class="mt-6" v-if="activeTab === 2">
        <TabTwo />
      </div>
    </div>
  </div>
</template>

<script>
import TabOne from './reviewsManagementTabOne.vue';
import TabTwo from './reviewsManagementTabTwo.vue';

export default {
  data() {
    return {
      activeTab: 1,
    };
  },
  components: {
    TabOne,
    TabTwo,
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>