<script setup>
import Header from './components/Header.vue'
import { RouterView } from 'vue-router';
import last from './components/last.vue'
</script>
<template>
  <Header/>
  <router-view />
  <last/>
</template>