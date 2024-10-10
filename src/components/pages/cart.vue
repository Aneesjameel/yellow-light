<template>
  <div class="container mx-auto px-4 mt-10 mb-10">
    <div class="p-6">
      <div class="brand mb-8">
        <h1 class="font-semibold text-xl">장바구니</h1>
      </div>
      <!-- Cart Table -->
       <div class="  overflow-auto">
      <table class="min-w-full table-auto">
        <thead class="bg-white border-t-2 border-black border-b-[1px] border-b-[#D0D0D0]">
          <tr>
            <th class="px-6 py-2 text-left">
              <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" class="mr-2" />
              전체선택
            </th>
            <th class="px-6 py-2 text-center">상품정보</th>
            <th class="px-6 py-2 text-center">수량</th>
            <th class="px-6 py-2 text-center">상품금액</th>
            <th class="px-6 py-2 text-center">배송비</th>
            <th class="px-6 py-2 text-center">선택</th>
          </tr>
        </thead>
        <tbody class="overflow-auto">
          <tr v-for="(item, index) in cartItems" :key="index" class="border-b" valign="middle">
            <td class="px-6 py-6">
              <input type="checkbox" v-model="item.selected" class="mr-2" />
            </td>
            <td class="px-6 py-6">
              <div class="flex items-center">
                <img :src="item.image" alt="Product Image" class="w-16 h-16 mr-4" />
                <div>
                  <p class="font-bold">{{ item.name }}</p>
                  <p class="text-sm text-gray-500">{{ item.options }}</p>
                </div>
              </div>
            </td>
            <td class="px-6 py-6">
              <div class="flex items-center text-center justify-center space-x-2 border border-[#D5D5D5] rounded-[2px]">
                <button @click="decreaseQuantity(index)" class="px-2 py-1 flex-auto">
                  -
                </button>
                <span class="flex-auto">{{ item.quantity }}</span>
                <button @click="increaseQuantity(index)" class="px-2 py-1 flex-auto">
                  +
                </button>
              </div>
            </td>
            <td class="px-6 py-6 font-bold text-center justify-center">{{ (item.price) }}원</td>
            <td class="px-6 py-6 text-center justify-center">무료</td>
            <td class="px-6 py-6 text-center justify-center flex-col flex gap-2">
              <router-link to="/checkout" class="text-white bg-[#D68F00] py-2 px-6 rounded-full hover:bg-black"><button @click="removeItem(index)" class="">
                구매하기
              </button></router-link>
              <router-link to="/checkout" class="bg-white py-2 px-6 rounded-full hover:bg-black border border-[#4E4E4E] text-black hover:text-white"><button
                class="">
                삭제하기
              </button></router-link>
              <router-link to="/checkout" class="bg-white py-2 px-6 rounded-full hover:bg-black border border-[#4E4E4E] text-black hover:text-white"><button
                class="">
                관심상품 등록
              </button></router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
      <!-- Total Price Section -->
      <div class="min-w-full mt-6 flex justify-end">
        <div class="space-x-2">
          <button @click="removeSelectedItems"
            class="px-4 py-2 bg-gray-100 text-[#4e4e4e] rounded-full hover:bg-black hover:text-white">
            선택 삭제
          </button>
          <button @click="clearCart"
            class="px-4 py-2 bg-gray-100 text-[#4e4e4e] rounded-full hover:bg-black hover:text-white">
            장바구니 비우기
          </button>
          <button class="px-4 py-2 bg-gray-100 text-[#4e4e4e] rounded-full hover:bg-black hover:text-white">
            견적서 출력
          </button>
        </div>
      </div>
      <div class="mt-16 border-t-2 border-b border-b-[#D0D0D0] border-black flex justify-between py-6">
        <div class="flex w-full justify-around">

          <div class="flex gap-4">
            <div>총 주문금액</div>
            <div>
              <p>
                {{ formatPrice(totalPrice) }}원
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div>
              <p>
                총 배송비
              </p>
            </div>
            <div>
              <p>
                0원
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div>
              <p>
                총 결제금액
              </p>
            </div>
            <div>
              <p class="text-lg font-semibold">
                {{ formatPrice(totalPrice) }}
              </p>
            </div>
          </div>

        </div>
      </div>
      <div class="flex justify-end space-x-2 mt-10">
        <router-link to="/checkout"><button class="mt-4 px-6 py-2 bg-[#4E4E4E] text-white hover:bg-black hover:text-white rounded-full">
          선택 상품 주문
        </button></router-link>
        <router-link to="/checkout"><button class="mt-4 px-6 py-2 bg-[#D68F00] text-white hover:bg-black hover:text-white rounded-full">
          전체 상품 주문
        </button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectAll: false,
      cartItems: [
        {
          image: '/products/1.png',
          name: '서브 1등 직부 검정 벽등',
          options: '베이지/LED에디슨 인지구(전구색/백색)',
          price: 55000,
          quantity: 1,
          selected: false
        },
        {
          image: '/products/1.png',
          name: '서브 1등 직부 검정 벽등',
          options: '베이지/LED에디슨 인지구(전구색/백색)',
          price: 55000,
          quantity: 1,
          selected: false
        },
        {
          image: '/products/1.png',
          name: '서브 1등 직부 검정 벽등',
          options: '베이지/LED에디슨 인지구(전구색/백색)',
          price: 55000,
          quantity: 1,
          selected: false
        }
      ]
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
  },
  methods: {
    formatPrice(value) {
      return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(value);
    },
    increaseQuantity(index) {
      this.cartItems[index].quantity++;
    },
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
      }
    },
    removeItem(index) {
      this.cartItems.splice(index, 1);
    },
    clearCart() {
      this.cartItems = [];
    },
    removeSelectedItems() {
      this.cartItems = this.cartItems.filter(item => !item.selected);
    },
    toggleSelectAll() {
      this.cartItems.forEach(item => {
        item.selected = this.selectAll;
      });
    },
    checkout() {
      alert('Checkout complete');
    }
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}


</style>
