<template>
  <div class="font-sans bg-[#FBFAF8]">
    <Hero />
    <CategorySlider/>
    <Ad1/>
    <NewProducts />
    <BestSellers />
    <BestSellers1 />
    <LifeStyleGuide1 />
    <LivingBedroom />
    <OutdoorLight />
    <TablePoint />
    <DesignRail />
    <RealShowRoom />
    <Footer />
  </div>
</template>

<script>

import Hero from '../landingpage/Hero.vue';
import Ad from '../landingpage/Ad.vue';
import Ad1 from '../landingpage/Ad1.vue';
import NewProducts from '../landingpage/NewProducts.vue';
import NewProducts1 from '../landingpage/NewProducts1.vue';
import CategorySlider from '../landingpage/CategorySlider.vue';
import BestSellers from '../landingpage/BestSellers.vue';
import BestSellers1 from '../landingpage/BestSellers1.vue';
import LifeStyleGuide from '../landingpage/LifeStyleGuide.vue';
import LifeStyleGuide1 from '../landingpage/LifeStyleGuide1.vue';
import LifeStyleGuide2 from '../landingpage/LifeStyleGuide2.vue';
import OutdoorLight from '../landingpage/OutdoorLight.vue';
import LivingBedroom from '../landingpage/LivingBedroom.vue';
import TablePoint from '../landingpage/TablePoint.vue';
import DesignRail from '../landingpage/DesignRail.vue';
import RealShowRoom from '../landingpage/RealShowRoom.vue';
import Footer from '../landingpage/Footer.vue';

export default {
  components: {
    Hero,
    Ad,
    Ad1,
    CategorySlider,
    NewProducts,
    NewProducts1,
    TablePoint,
    BestSellers1,
    OutdoorLight,
    LivingBedroom,
    DesignRail,
    BestSellers1,
    RealShowRoom,
    LifeStyleGuide,
    LifeStyleGuide1,
    LifeStyleGuide2,
    Footer
  }
}
</script>

<style scoped>
/* You can include custom styles here */
</style>

