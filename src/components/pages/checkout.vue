<template>
  <div class="container mx-auto px-4 mt-10 mb-10">
    <div class="px-[100px] py-[50px] max-w-5xl mx-auto bg-white border border-[#D5D5D5]">
      <div class="brand mb-8 text-center">
        <h1 class="font-semibold text-xl">주문 정보</h1>
      </div>
      <form @submit.prevent="submitForm">

        <div class="flex gap-6 items-center mb-4">
          <label for="name" class="block text-gray-700">주문자*</label>
          <input type="text" id="name" v-model="form.name" placeholder="이름을 입력해 주세요."
            class="mt-2 p-2 border border-gray-300 rounded flex flex-auto" required />
        </div>

        <div class="flex gap-6 items-center mb-4">
          <div class="flex gap-6 items-center w-1/2">
            <label for="email" class="block text-gray-700">이메일*</label>
            <input type="email" id="email" v-model="form.email" placeholder="이메일 주소를 입력해 주세요."
              class="mt-2 p-2 border border-gray-300 rounded flex flex-auto" required />
          </div>
          <div class="flex gap-0 items-center w-1/2">
            <span class="mt-2 p-2 border border-gray-300 rounded-r bg-gray-100 text-gray-700">@</span>
            <select v-model="form.emailDomain" class="mt-2 p-2 border border-gray-300 rounded ml-2 flex flex-auto">
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="other">직접 입력</option>
            </select>
          </div>
        </div>


        <div class="flex gap-6 mb-4 w-1/2">
          <div class="flex gap-6 items-center w-1/2">
            <label for="phone" class="block text-gray-700">일반전화</label>
            <select class="flex flex-auto p-2 border border-gray-300 rounded">
              <option value="02">02</option>
              <option value="031">031</option>
              <option value="032">032</option>
            </select>
          </div>
          <div class="flex flex-auto gap-6 items-center w-1/2">
            <input type="text" v-model="form.landlineMiddle" placeholder="중간 번호"
              class="border border-gray-300 flex flex-auto p-2 rounded w-1/4" />
            <input type="text" v-model="form.landlineEnd" placeholder="끝 번호"
              class="border border-gray-300 flex flex-auto p-2 rounded w-1/4" />
          </div>
        </div>

        <div class="flex gap-6 mb-4 w-1/2">
          <div class="flex gap-6 items-center w-1/2">
            <label for="phone" class="block text-gray-700">휴대전화*</label>
            <select class="flex flex-auto p-2 border border-gray-300 rounded">
              <option value="02">02</option>
              <option value="031">031</option>
              <option value="032">032</option>
            </select>
          </div>
          <div class="flex flex-auto gap-6 items-center w-1/2">
            <input type="text" v-model="form.landlineMiddle" placeholder="중간 번호"
              class="border border-gray-300 flex flex-auto p-2 rounded w-1/4" />
            <input type="text" v-model="form.landlineEnd" placeholder="끝 번호"
              class="border border-gray-300 flex flex-auto p-2 rounded w-1/4" />
          </div>
        </div>

        <!-- 주소* -->
        <div class="mb-4">
          <label for="address" class="block text-gray-700">주소*</label>
          <div class="flex items-center mb-2">
            <input type="text" v-model="form.postcode" placeholder="우편번호"
              class=" flex flex-auto mt-2 p-2 border border-gray-300 rounded" required />
            <button type="button" class="ml-2 mt-2 py-2 px-6 bg-[#AFAFAF] text-white hover:bg-black rounded">
              주소 검색
            </button>
          </div>
          <input type="text" v-model="form.addressLine1" placeholder="기본주소"
            class="w-full mb-2 p-2 border border-gray-300 rounded" required />
          <input type="text" v-model="form.addressLine2" placeholder="나머지 주소"
            class="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div class="brand mb-5 mt-10 text-center">
          <h2 class="font-semibold text-xl">배송지</h2>
        </div>

        <div class="flex gap-6 items-center mb-4">
          <label for="name" class="block text-gray-700">받는사람*</label>
          <input type="text" id="name" v-model="form.name" placeholder="이름을 입력해 주세요."
            class="mt-2 p-2 border border-gray-300 rounded flex flex-auto" required />
        </div>

        <div class="flex gap-6 items-center mb-4">
          <div class="flex gap-6 items-center ">
            <label for="email" class="block text-gray-700">이메일*</label>
            <input type="email" id="email" v-model="form.email" placeholder="이메일 주소를 입력해 주세요."
              class="mt-2 p-2 border border-gray-300 rounded flex flex-auto" required />
          </div>
          <div class="flex gap-0 items-center w-1/2">
            <span class="mt-2 p-2 border border-gray-300 rounded-r bg-gray-100 text-gray-700">@</span>
            <select v-model="form.emailDomain" class="mt-2 p-2 border border-gray-300 rounded ml-2 flex flex-auto">
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="other">직접 입력</option>
            </select>
          </div>
        </div>


        <div class="flex gap-6 mb-4 w-1/2">
          <div class="flex gap-6 items-center w-1/2">
            <label for="phone" class="block text-gray-700">일반전화</label>
            <select class="flex flex-auto p-2 border border-gray-300 rounded">
              <option value="02">02</option>
              <option value="031">031</option>
              <option value="032">032</option>
            </select>
          </div>
          <div class="flex flex-auto gap-6 items-center w-1/2">
            <input type="text" v-model="form.landlineMiddle" placeholder="중간 번호"
              class="border border-gray-300 flex flex-auto p-2 rounded w-1/4" />
            <input type="text" v-model="form.landlineEnd" placeholder="끝 번호"
              class="border border-gray-300 flex flex-auto p-2 rounded w-1/4" />
          </div>
        </div>

        <div class="flex gap-6 mb-4 w-1/2">
          <div class="flex gap-6 items-center w-1/2">
            <label for="phone" class="block text-gray-700">휴대전화*</label>
            <select class="flex flex-auto p-2 border border-gray-300 rounded">
              <option value="02">02</option>
              <option value="031">031</option>
              <option value="032">032</option>
            </select>
          </div>
          <div class="flex flex-auto gap-6 items-center w-1/2">
            <input type="text" v-model="form.landlineMiddle" placeholder="중간 번호"
              class="border border-gray-300 flex flex-auto p-2 rounded w-1/4" />
            <input type="text" v-model="form.landlineEnd" placeholder="끝 번호"
              class="border border-gray-300 flex flex-auto p-2 rounded w-1/4" />
          </div>
        </div>

        <!-- 주소* -->
           <!-- 주소* -->
        <div class="mb-4">
          <label for="address" class="block text-gray-700">주소*</label>
          <div class="flex items-center mb-2">
            <input type="text" v-model="form.postcode" placeholder="우편번호"
              class=" flex flex-auto mt-2 p-2 border border-gray-300 rounded" required />
            <button type="button" class="ml-2 mt-2 py-2 px-6 bg-[#AFAFAF] text-white hover:bg-black rounded">
              주소 검색
            </button>
          </div>
          <input type="text" v-model="form.addressLine1" placeholder="기본주소"
            class="w-full mb-2 p-2 border border-gray-300 rounded" required />
          <input type="text" v-model="form.addressLine2" placeholder="나머지 주소"
            class="w-full p-2 border border-gray-300 rounded" />
        </div>
          <!-- Product Section -->
    <div class="flex border-b pb-4 mb-4">
      <img src="/public/products/2.png" alt="Product Image" class="w-24 h-24 object-cover mr-4">
      <div>
        <h2 class="font-bold text-lg">서브 1등 직부 검용 벽등</h2>
        <p class="text-gray-500">[옵션: 베이지/LED에디슨 인지구(전구색)/백색 (+10,500)]</p>
        <p class="text-gray-500">수량: 1개</p>
        <p class="font-bold text-lg">55,000원</p>
      </div>
    </div>
    <div class="flex border-b pb-4 mb-4">
      <img src="/public/products/2.png" alt="Product Image" class="w-24 h-24 object-cover mr-4">
      <div>
        <h2 class="font-bold text-lg">서브 1등 직부 검용 벽등</h2>
        <p class="text-gray-500">[옵션: 베이지/LED에디슨 인지구(전구색)/백색 (+10,500)]</p>
        <p class="text-gray-500">수량: 1개</p>
        <p class="font-bold text-lg">55,000원</p>
      </div>
    </div>
    <!-- Coupon Section -->
    <div class="mb-4">
      <div class="flex items-center mb-2">
        <input type="text" placeholder="10% 할인쿠폰" class="border p-2 flex-grow mr-2">
        <button class="bg-black text-white px-4 py-2">쿠폰 적용</button>
      </div>
      <div class="flex items-center mb-2">
        <input type="text" placeholder="0원" class="border p-2 flex-grow mr-2">
        <button class="bg-black text-white px-4 py-2">전액 사용</button>
      </div>
      <p class="text-gray-500">잔여 적립금: 850원</p>
    </div>
    <div class="mb-4">
      <div class="flex items-center mb-2">
        <input type="text" placeholder="10% 할인쿠폰" class="border p-2 flex-grow mr-2">
        <button class="bg-black text-white px-4 py-2">쿠폰 적용</button>
      </div>
      <div class="flex items-center mb-2">
        <input type="text" placeholder="0원" class="border p-2 flex-grow mr-2">
        <button class="bg-black text-white px-4 py-2">전액 사용</button>
      </div>
      <p class="text-gray-500">잔여 적립금: 850원</p>
    </div>
    <!-- Request Input Section -->
    <div class="mb-4">
      <textarea placeholder="요청사항 입력" class="w-full border p-2"></textarea>
    </div>

    <!-- Payment Information Section -->
    <div class="border-t pt-4 mb-4">
      <h3 class="font-bold text-xl mb-2">결제정보</h3>
      <div class="text-gray-700 space-y-1">
        <div class="flex justify-between">
          <span>주문상품</span>
          <span>220,000원</span>
        </div>
        <div class="flex justify-between">
          <span>배송비</span>
          <span>0원</span>
        </div>
        <div class="flex justify-between">
          <span>할인/쿠폰결제</span>
          <span>0원</span>
        </div>
        <div class="flex justify-between">
          <span>적립 예정</span>
          <span>0원</span>
        </div>
        <div class="flex justify-between font-bold py-2 border-t mt-2">
          <span>최종 결제금액</span>
          <span>220,000원</span>
        </div>
      </div>
    </div>

    <!-- Payment Method Section -->
    <div class="flex gap-4 font-bold mb-1 flex-wrap md:flex-nowrap">
      <button class="bg-black text-white w-1/2 py-4">가상계좌</button>
      <button class="border border-gray-400 text-gray-700 w-1/2 py-4">무통장입금</button>
    </div>
    <div class="flex gap-4 mt-5 font-bold mb-1 flex-wrap md:flex-nowrap">
      <button class="border border-gray-400 text-gray-700 w-1/2 py-4">가상계좌</button>
      <button class="border border-gray-400 text-gray-700 w-1/2 py-4"><div class="flex items-center justify-center"><img src="/public/pay.png" class="mr-5"/>무통장입금</div></button>
    </div>
    <div class="flex gap-4 mt-5 font-bold mb-1 flex-wrap md:flex-nowrap">
      <button class="border border-gray-400 text-gray-700 w-1/2 py-4">가상계좌</button>
      <button class="border border-gray-400 text-gray-700 w-1/2 py-4">무통장입금</button>
    </div>
        <!-- Checkbox for reusing payment details -->
        <div class="mb-4 mt-10">
      <label class="flex items-center">
        <input type="checkbox" class="form-checkbox h-4 w-4 text-gray-600 mr-2">
        <span>결제수단과 입력정보를 다음에도 사용</span>
      </label>
    </div>

    <!-- Warning message -->
    <div class="mb-4">
      <p class="text-red-600">
        ※결제수단 중, 무통장 입금시에는 입금자명을 정확하게 명시해 주셔야 입금확인이 됩니다 (가상계좌 이용을 권장드립니다)
      </p>
    </div>

    <!-- Checkbox for cash receipt request -->
    <div class="mb-4">
      <label class="flex items-center">
        <input type="checkbox" class="form-checkbox h-4 w-4 text-gray-600 mr-2">
        <span>현금영수증 신청</span>
      </label>
    </div>

    <!-- Input field for phone number -->
    <div class="mb-4">
      <input type="text" placeholder="휴대전화번호 입력" class="border p-2 w-full">
    </div>

    <!-- Radio buttons for tax options -->
    <div class="mb-4 flex items-center space-x-8">
      <label class="flex items-center">
        <input type="radio" name="taxOption" class="form-radio h-4 w-4 text-gray-600 mr-2">
        <span>소득공제용</span>
      </label>
      <label class="flex items-center">
        <input type="radio" name="taxOption" class="form-radio h-4 w-4 text-gray-600 mr-2">
        <span>지출증빙용</span>
      </label>
    </div>

    <div class="flex gap-4 mt-20 font-bold mb-1 flex-wrap md:flex-nowrap">
      <router-link to="orderConfirmation" class="border border-gray-400 text-white w-full py-4 bg-black flex justify-center">220,000원 결제하기</router-link>
    </div>
    <p class="text-gray-600 mt-5 mb-5">주문 변경 시 카드사 혜택 및 할부 적용 여부는 해당 카드사 정책에 따라 변경될 수 있습니다.<br>네이버페이 카드 간편결제는 네이버페이에서 제공하는 카드사별 무이자, 청구 할인 혜택을 받을 수 있습니다.</p>
    <p class="text-gray-600">최소 결제 가능 금액은 결제금액에서 배송비를 제외한 금액입니다.</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        emailDomain: 'naver.com',
        landlineAreaCode: '02',
        landlineMiddle: '',
        landlineEnd: '',
        mobilePrefix: '010',
        mobileMiddle: '',
        mobileEnd: '',
        postcode: '',
        addressLine1: '',
        addressLine2: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.form);
    }
  }
};
</script>

<style scoped>
/* Additional styles if needed */
</style>