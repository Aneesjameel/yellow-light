<template>
  <div class="font-sans">
    <Hero />
    <CategorySlider/>
    <NewProducts />
    <BestSellers />
    <LifeStyleGuide />
    <ProductCategories />
    <Footer />
  </div>
</template>

<script>

import Hero from '../landingpage/Hero.vue';
import NewProducts from '../landingpage/NewProducts.vue';
import CategorySlider from '../landingpage/CategorySlider.vue';

import BestSellers from '../landingpage/BestSellers.vue';
import LifeStyleGuide from '../landingpage/LifeStyleGuide.vue';
import ProductCategories from '../landingpage/ProductCategories.vue';
import Footer from '../landingpage/Footer.vue';

export default {
  components: {
    Hero,
    CategorySlider,
    NewProducts,
    BestSellers,
    LifeStyleGuide,
    ProductCategories,
    Footer
  }
}
</script>

<style scoped>
/* You can include custom styles here */
</style>

