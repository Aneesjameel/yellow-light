<script>

import Reservation from './account/reservation.vue';
import Reservation1 from './account/reservation1.vue';
import travelInformation from './account/travelInformation.vue';
import payment from './account/payment.vue';
import paymentdetail from './account/paymentdetail.vue';
import agreetermpolicy from './account/agreetermpolicy.vue';


export default {
 name: 'account',
 components: {
  Reservation,
  Reservation1,
  travelInformation,
  payment,
  paymentdetail,
  agreetermpolicy
 } 
}
</script>
<template>
  <div class="container mx-auto">
  <Reservation/>
  <Reservation1/>
  <travelInformation/>
  <payment/>
  <paymentdetail/>
  <agreetermpolicy/>
  <div class="flex gap-3 mx-auto justify-center mt-10 pt-10">
    <button class="py-3 bg-lGrey text-white text-lg  w-1/3 h-12" type="button">취소</button>
    <button  class="py-3 bg-blue text-white  text-lg w-1/3 h-12 " type="button">결제하기</button>
  </div>

  

</div>


</template>



<style scoped>
</style>
