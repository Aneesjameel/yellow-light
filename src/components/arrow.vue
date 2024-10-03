<template>
    <div>
      <!-- Main content of the page -->
      <div >
        <!-- Your page content here -->
      </div>
  
      <!-- Floating Scroll-to-Top Button -->
      <button 
        v-if="showButton" 
        @click="scrollToTop"
        class="fixed bottom-8 right-8 bg-blue text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-blue transition duration-300"
      >
        <!-- Arrow Up Icon (Using SVG) -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showButton: false, // This controls the visibility of the button
      };
    },
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      },
      handleScroll() {
        // Show button when the page is scrolled down by 300px
        this.showButton = window.scrollY > 300;
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  };
  </script>
  
  <style scoped>
  /* Optional: You can add any additional styling here if needed */
  </style>
  