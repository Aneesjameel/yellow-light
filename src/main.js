import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import './style.css'
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App.vue'
import MainPage from './components/pages/MainPage.vue'
import MainPage1 from './components/pages/MainPage1.vue'
import MainPage2 from './components/pages/MainPage2.vue'
import AllProducts from './components/pages/AllProducts.vue'
import merchant from './components/pages/merchant.vue'
import Best from './components/pages/Best.vue'
import Consulting from './components/pages/Consulting.vue'
import customer from './components/pages/customer.vue'
import login from './components/login.vue'
import signup from './components/signup.vue'
import findid from './components/findid.vue'
import password from './components/password.vue'
import memberinformation from './components/memberinformation.vue'
import cart from './components/pages/cart.vue'
import checkout from './components/pages/checkout.vue'
import orderConfirmation from './components/pages/orderConfirmation.vue'
import orderSummary from './components/pages/orderSummary.vue'
import orderDetails from './components/pages/orderDetails.vue'
import myPage from './components/pages/myPage.vue'
import myPageTwo from './components/pages/myPageTwo.vue'
import myReviews from './components/pages/myReviews.vue'
import reviewsManagement from './components/pages/reviewsManagement.vue'
import account from './components/pages/account.vue'
import wishlist from './components/pages/wishlist.vue'
import couponDetails from './components/pages/couponDetails.vue'
import ProductList from './components/pages/ProductList.vue'
import ProductDetail from './components/pages/ProductDetail.vue'
import faq from './components/pages/faq.vue'


import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';


const routes = [
    {
      path: '',
      component: App,
      children: [
        {
          path: '',
          component: login,
        },
        {
          path: 'MainPage1',
          component: MainPage1,
        },
        {
          path: 'MainPage',
          component: MainPage,
        },
        {
          path: 'faq',
          component: faq,
        },
        {
          path: 'MainPage2',
          component: MainPage2,
        },
        {
          path: 'AllProducts',
          component: AllProducts,
        },
        {
          path: 'merchant',
          component: merchant,
        },
        {
          path: 'Best',
          component: Best,
        },
        {
          path: 'Consulting',
          component: Consulting,
        }
        ,
        {
          path: 'customer',
          component: customer,
        },
        {
          path: 'login',
          component: login,
        }
        ,
        {
          path: 'signup',
          component: signup,
        }
        ,
        {
          path: 'findid',
          component: findid,
        }
        ,
        {
          path: 'password',
          component: password,
        }
        ,
        {
          path: 'memberinformation',
          component: memberinformation,
        },
        {
          path: 'cart',
          component: cart,
        },
        {
          path: 'checkout',
          component: checkout,
        },
        {
          path: 'orderDetails',
          component: orderDetails,
        }
        ,
        {
          path: 'orderConfirmation',
          component: orderConfirmation,
        }
        ,
        {
          path: 'orderSummary',
          component: orderSummary,
        }
        ,
        {
          path: 'account',
          component: account,
        }
        ,
        {
          path: 'myPage',
          component: myPage,
        }
        ,
        {
          path: 'myPageTwo',
          component: myPageTwo,
        }
        ,
        {
          path: 'myReviews',
          component: myReviews,
        }
        ,
        {
          path: 'reviewsManagement',
          component: reviewsManagement,
        }
        ,
        {
          path: 'wishlist',
          component: wishlist,
        }
        ,
        {
          path: 'couponDetails',
          component: couponDetails,
        }
        ,
        {
          path: 'ProductList',
          component: ProductList,
        }
        ,
        {
          path: 'ProductDetail',
          component: ProductDetail,
        }
      ],
    },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
const app = createApp(App);

app.use(PrimeVue, {
  theme: {
      preset: Aura
  }
})
.use(router)
.mount('#app')
