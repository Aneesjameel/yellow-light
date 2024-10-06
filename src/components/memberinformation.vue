<template>
  <div class="max-w-lg mx-auto p-6 mt-20">
    <!-- Welcome Message -->
    <div class="text-center mb-6">
      <img src="/public/wellcome-let-join-us.svg" alt="" class="mx-auto mb-10">

      <p class="text-sm text-gray-500">노랑조명에 오신것을 환영합니다.<br>
        회원가입 후 다양한 혜택을 누리세요!</p>
    </div>

    <!-- Radio buttons -->
    <div class="">
      <fieldset class="flex gap-4 mt-10 mb-10">
        <div class="flex gap-2">
          <input id="soleProprietor" class="peer/soleProprietor" type="radio" name="membershiptype"
            value="soleProprietor" v-model="selectedOption" />
          <label for="soleProprietor" class="peer-checked/draft:text-[#4B4B4B]">개인사업자</label>
        </div>
        <div class="flex gap-2">
          <input id="corporateBusiness" class="peer/corporateBusiness" type="radio" name="membershiptype" value="phone"
            v-model="selectedOption" />
          <label for="corporateBusiness" class="peer-checked/published:text-[#4B4B4B]">법인사업자</label>
        </div>
      </fieldset>
    </div>

    <!-- Form Section -->
    <form @submit.prevent="submitForm">
      <!-- Username and Password Fields -->
      <div class="space-y-4 mb-6">
        <div>
          <label class="block text-sm font-medium">아이디 *</label>
          <input type="text" class="mt-1 w-full border border-gray-300 rounded-lg p-2" placeholder="영소문자/숫자 4~6자"
            v-model="form.username" />
        </div>
        <div>
          <label class="block text-sm font-medium">비밀번호 *</label>
          <input type="password" class="mt-1 w-full border border-gray-300 rounded-lg p-2"
            placeholder="영문 대소문자/숫자/특수문자 조합, 10자~16자" v-model="form.password" />
        </div>
        <div>
          <label class="block text-sm font-medium">비밀번호 확인 *</label>
          <input type="password" class="mt-1 w-full border border-gray-300 rounded-lg p-2"
            v-model="form.confirmPassword" />
        </div>
      </div>
      <hr class="mt-10 mb-5">
      <!-- Phone Number Section -->
      <div class="space-y-4 mb-6">
        <label class="block text-sm font-medium">본인 인증 *</label>
        <div class="">
          <input
            class="appearance-none border border-[#BABABA] rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email" placeholder="아이디" required="">
        </div>
        <div class="flex space-x-2">
          <select class="w-1/3 border border-gray-300 rounded-lg p-2" v-model="form.phonePrefix">
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="012">012</option>
          </select>
          <input type="text" class="w-1/3 border border-gray-300 rounded-lg p-2 text-center" maxlength="4"
            v-model="form.phoneMiddle" />
          <input type="text" class="w-1/3 border border-gray-300 rounded-lg p-2 text-center" maxlength="4"
            v-model="form.phoneLast" />
        </div>
        <div class="flex space-x-2">
          <input
            class="w-1/2 appearance-none border border-[#BABABA] rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="이름 *" required="">
          <button class="w-1/4 bg-white border border-[#9A9A9A] hover:bg-[#9A9A9A] hover:text-white p-2" type="button">
            인증번호 받기
          </button>
        </div>
        <div class="">
          <input
            class="appearance-none border border-[#BABABA] rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email" placeholder="이메일 *" required="">
        </div>
      </div>

      <!-- Address Section -->
      <div class="space-y-4 mb-6">
        <label class="block text-sm font-medium">배송주소 *</label>
        <div class="flex space-x-2">
          <input type="text" class="w-1/2 border border-gray-300 rounded-lg p-2" v-model="form.address" />
          <button class="w-1/4 bg-white border border-[#9A9A9A] hover:bg-[#9A9A9A] hover:text-white p-2" type="button">
            우편번호 검색
          </button>
        </div>
        <input type="text" class="w-full border border-gray-300 rounded-lg p-2" v-model="form.detailAddress"
          placeholder="기본주소 *" />
        <input type="text" class="w-full border border-gray-300 rounded-lg p-2" v-model="form.extraAddress"
          placeholder="상세주소" />
      </div>

      <!-- Additional Info Section -->
      <div class="space-y-4 mb-6">
        <label class="block text-sm font-medium">추가정보 *</label>
        <div class="flex space-x-2">
          <input type="text" class="w-1/3 border border-gray-300 rounded-lg p-2" v-model="form.birthYear"
            placeholder="생년월일/YYYY" />
          <input type="text" class="w-1/3 border border-gray-300 rounded-lg p-2" v-model="form.birthMonth"
            placeholder="MM" />
          <input type="text" class="w-1/3 border border-gray-300 rounded-lg p-2" v-model="form.birthDay"
            placeholder="DD" />
        </div>
      </div>

      <hr class="mt-10 mb-5">
      <div class="w-full max-w-lg mx-auto">
        <label class="block text-sm font-medium mb-2">이용약관 *</label>
        <!-- Terms Checkbox with Dropdown -->
        <div class="border-b border-gray-200 py-2">
          <div class="flex justify-between items-center">
            <label class="flex items-center space-x-2">
              <input type="checkbox" v-model="checked.terms" class="form-checkbox h-4 w-4 text-gray-600" />
              <span class="text-sm font-medium">쇼핑몰 이용약관에 모두 동의합니다. (필수)</span>
            </label>
            <button @click="toggle('terms')" class="focus:outline-none">
              <svg :class="{ 'rotate-180': isActive('terms') }" class="w-6 h-6 transition-transform duration-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          <transition name="fade">
            <div v-if="isActive('terms')" class="mt-2 p-2 bg-gray-50 text-black text-sm rounded-md">
              <p>제1조(목적) 이 약관은 OO 회사(전자상거래 사업자)가 운영하는 OO 사이버 몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버
                몰과 이용자의 권리?의무 및 책임사항을 규정함을 목적으로 합니다.</p>
            </div>
          </transition>
        </div>

        <!-- Privacy Policy Checkbox with Dropdown -->
        <div class="border-b border-gray-200 py-2">
          <div class="flex justify-between items-center">
            <label class="flex items-center space-x-2">
              <input type="checkbox" v-model="checked.privacy" class="form-checkbox h-4 w-4 text-gray-600" />
              <span class="text-sm font-medium">개인정보 수집 및 이용에 동의합니다. (필수)</span>
            </label>
            <button @click="toggle('privacy')" class="focus:outline-none">
              <svg :class="{ 'rotate-180': isActive('privacy') }" class="w-6 h-6 transition-transform duration-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          <transition name="fade">
            <div v-if="isActive('privacy')" class="mt-2 p-2 bg-gray-50 text-gray-600 text-sm rounded-md">
              <p>개인정보 수집 및 이용에 대한 설명</p>
            </div>
          </transition>
        </div>

        <!-- Optional Checkbox with Dropdown -->
        <div class="border-b border-gray-200 py-2">
          <div class="flex justify-between items-center">
            <label class="flex items-center space-x-2">
              <input type="checkbox" v-model="checked.marketing" class="form-checkbox h-4 w-4 text-gray-600" />
              <span class="text-sm font-medium">쇼핑 정보 수신을 동의합니다. (선택)</span>
            </label>
            <button @click="toggle('marketing')" class="focus:outline-none">
              <svg :class="{ 'rotate-180': isActive('marketing') }" class="w-6 h-6 transition-transform duration-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          <transition name="fade">
            <div v-if="isActive('marketing')" class="mt-2 p-2 bg-gray-50 text-gray-600 text-sm rounded-md">
              <p>쇼핑 정보 수신에 대한 설명</p>
            </div>
          </transition>
        </div>

        <!-- Agreement Checkbox -->
        <div class="border-b border-gray-200 py-2">
          <label class="flex items-center space-x-2">
            <input type="checkbox" v-model="checked.agreeAll" class="form-checkbox h-4 w-4 text-gray-600"
              @change="toggleAll" />
            <span class="text-sm font-medium">전체 동의</span>
          </label>
        </div>
      </div>

      <button
        class="mt-5 rounded-2xl w-full bg-black hover:bg-gray-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit">
        회원가입하기
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: null,
      form: {
        username: "",
        password: "",
        confirmPassword: "",
        phonePrefix: "010",
        phoneMiddle: "",
        phoneLast: "",
        address: "",
        detailAddress: "",
        extraAddress: "",
        birthYear: "",
        birthMonth: "",
        birthDay: "",
        agreeTerms: false,
        agreePersonalInfo: false,
        agreeMarketing: false,
      },
      activeSection: null,
      checked: {
        terms: false,
        privacy: false,
        marketing: false,
        agreeAll: false,
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log(this.form);
    },
    toggle(index) {
      this.active = this.active === index ? null : index;
    },
    toggle(section) {
      this.activeSection = this.activeSection === section ? null : section;
    },
    isActive(section) {
      return this.activeSection === section;
    },
    toggleAll() {
      const agreeAllChecked = this.checked.agreeAll;
      this.checked.terms = agreeAllChecked;
      this.checked.privacy = agreeAllChecked;
      this.checked.marketing = agreeAllChecked;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease;
}

.accordion-enter,
.accordion-leave-to {
  max-height: 0;
  overflow: hidden;
}

.accordion-enter-to,
.accordion-leave {
  max-height: 200px;
  /* Adjust accordingly */
}
</style>
