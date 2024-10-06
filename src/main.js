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


import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';


const routes = [
    {
      path: '',
      component: App,
      children: [
        {
          path: '',
          component: MainPage,
        },
        {
          path: 'MainPage1',
          component: MainPage1,
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
