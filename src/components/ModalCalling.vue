<template>
    <div class="flex items-center justify-center h-screen space-x-4">
      <!-- Button to open the first modal -->
      <button @click="showModal = true" class="bg-blue text-white px-4 py-2 rounded-lg">
        Open First Modal
      </button>
  
      <!-- Button to open the review modal -->
      <button @click="showReviewModal = true" class="bg-green text-white px-4 py-2 rounded-lg">
        Open Review Modal
      </button>
  
      <!-- Button to open the filter modal -->
      <button @click="showFilterModal = true" class="bg-purple text-white px-4 py-2 rounded-lg">
        Open Filter Modal
      </button>
  
      <!-- Button to open the image management modal -->
      <button @click="showImageManagementModal = true" class="bg-yellow-500 text-white px-4 py-2 rounded-lg">
        Open Image Management Modal
      </button>
  
      <!-- First Modal component -->
      <Modal v-model="showModal" />
  
      <!-- Review Modal component -->
      <ReviewModal v-model="showReviewModal" />
  
      <!-- Filter Modal component -->
      <FilterModal v-model="showFilterModal" />
  
      <!-- Image Management Modal component -->
      <ImageManagementModal v-model="showImageManagementModal" />
    </div>
  </template>
  
  <script>
  import Modal from './Modal.vue';              // First modal component
  import ReviewModal from './ReviewModal.vue';  // Second review modal component
  import FilterModal from './FilterModal.vue';  // Third filter modal component
  import ImageManagementModal from './ImageManagementModal.vue';  // New image management modal component
  
  export default {
    components: {
      Modal,
      ReviewModal,
      FilterModal,
      ImageManagementModal
    },
    data() {
      return {
        showModal: false,               // Visibility state for the first modal
        showReviewModal: false,         // Visibility state for the review modal
        showFilterModal: false,         // Visibility state for the filter modal
        showImageManagementModal: false // Visibility state for the image management modal
      };
    }
  };
  </script>
  