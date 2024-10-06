<template>
  <div class="font-sans bg-[#FBFAF8]">
    <Hero />
   
  
    <CategorySlider/>
    <Ad1/>
    <NewProducts1 />
    <BestSellers />
    <LifeStyleGuide2 />
    <LivingBedroom />
    <OutdoorLight />
    <TablePoint />
    <Recomended/>
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
import LifeStyleGuide from '../landingpage/LifeStyleGuide.vue';
import Recomended from '../landingpage/Recomended.vue';
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
    Recomended,
    NewProducts,
    NewProducts1,
    TablePoint,
    OutdoorLight,
    LivingBedroom,
    DesignRail,
    BestSellers,
    RealShowRoom,
    LifeStyleGuide,
    LifeStyleGuide2,
    Footer
  }
}
</script>

<style scoped>
/* You can include custom styles here */
</style>

