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

          <div class="flex items-center mb-2">
            <div>
              <label for="address" class="block text-gray-700">주소*</label>
            </div>
            <div>
              <input type="text" v-model="form.postcode" placeholder="우편번호"
                class=" flex flex-auto mt-2 p-2 border border-gray-300 rounded" required />
              <button type="button" class="ml-2 mt-2 py-2 px-6 bg-[#AFAFAF] text-white hover:bg-black rounded">
                주소 검색
              </button>
              <div>
                <input type="text" v-model="form.addressLine1" placeholder="기본주소"
                  class="w-full mb-2 p-2 border border-gray-300 rounded" required />
                <input type="text" v-model="form.addressLine2" placeholder="나머지 주소"
                  class="w-full p-2 border border-gray-300 rounded" />
              </div>

            </div>
          </div>

          <div class="flex gap-6 items-center">
            <label for="phone" class="block text-gray-700">휴대전화*</label>
            <select class="flex flex-auto p-2 border border-gray-300 rounded">
              <option value="02">부재시 경비실에 맡겨주세요.</option>
              <option value="031">부재시 경비실에 맡겨주세요.</option>
              <option value="032">부재시 경비실에 맡겨주세요.</option>
            </select>
          </div>
        </div>

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