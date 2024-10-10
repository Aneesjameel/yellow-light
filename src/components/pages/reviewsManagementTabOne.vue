<!-- TabOne.vue -->
<template>
    <div>
        <div class="  overflow-auto">
        <table class="min-w-full divide-y divide-gray-200">
            <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="item in tabOneData" :key="item.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 h-24 w-24">
                                <img class="rounded-2xl h-24 w-24" :src="item.image" alt="" />
                            </div>
                            <div class="ml-4">
                                <div class="text-sm font-bold text-gray-900">{{ item.product }}</div>
                                <div class="text-sm text-gray-500">{{ item.description }}</div>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-bold text-center">{{ item.price }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-center">{{ item.date }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <button @click="openModal(item)" class="text-white bg-black rounded-full py-2 px-4">리뷰
                            작성</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    <!-- Modal popup -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div class="bg-white p-16 w-1/2 relative">
            <div class="absolute right-[34px] top-[39px]">
                <button @click="closeModal" class="bg-white text-black px-[15px] py-[10px]">
                    <i class="fa fa-x"></i>
                </button>
            </div>
            <div class="mb-4">
                <h2 class="text-black font-bold text-2xl text-center">
                    리뷰쓰기
                </h2>
            </div>
            <div class="flex justify-between items-center">
                <div class="flex gap-6 items-center">
                    <div>
                        <img :src="selectedProduct.image" alt="Product Image"
                            class="w-24 h-24 object-cover rounded-2xl" />
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold mt-2">{{ selectedProduct.product }}</h3>
                        <p class="text-gray-600">{{ selectedProduct.description }}</p>
                    </div>
                </div>

                <div v-html="selectedProduct.rating" class="mt-2"></div>
            </div>

            <div class="mt-8">
                <label for="" class="font-bold">내용</label>
                <textarea placeholder="솔직한 리뷰를 남겨주세요. (단, 일부 특수문자는 정상적으로 입력되지 않을 수 있습니다.)"
                    class="mt-4 w-full bg-[#F9F9F9] border-0 rounded p-4 h-48"></textarea>
            </div>

            <!-- Five image upload placeholders -->
            <div class="mt-8">
                <div class="mb-4">
                    <p class="text-black font-bold">
                        포토
                    </p>
                </div>
                <div class="flex gap-2">
                    <div class="w-24 h-24" v-for="index in 5" :key="index">
                        <input type="file" ref="fileInputs" @change="uploadImage($event, index)"
                            class="hidden w-24 h-24" accept="image/*">
                        <div class="img-upl-ph w-24 h-24 bg-[#f5f5f5] flex items-center justify-center cursor-pointer hover:text-stone-700"
                            @click="triggerFileInput(index)">
                            <i class="fa fa-plus text-[#C5C5C5]"></i>
                        </div>
                    </div>
                </div>
                <div class="mt-2">
                    <p class="text-[#929292] font-[14px]">사진은 10MB이하의 PNG, GIF, JPG 파일만 등록 가능합니다.</p>
                </div>
            </div>

            <!-- Modal buttons -->
            <div class="flex justify-center mt-8">
                <button @click="submit"
                    class="bg-white border border-black text-black px-16 py-1 rounded-2xl mr-2">취소</button>
                <button @click="closeModal"
                    class="bg-black border border-black text-white px-16 py-1 rounded-2xl">등록하<br>기</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabOneData: [
                {
                    id: 1,
                    product: "서브 1등 직부 겸용 벽등",
                    description: "[옵션: 베이지/LED에디슨 인지구(전구색)/백색 (+10,500)]",
                    price: "55,000원",
                    date: "리뷰작성 가능 (2024년 12월 24일까지)",
                    image: "/products/product.png",
                },
                {
                    id: 2,
                    product: "서브 1등 직부 겸용 벽등",
                    description: "[옵션: 베이지/LED에디슨 인지구(전구색)/백색 (+10,500)]",
                    price: "55,000원",
                    date: "리뷰작성 가능 (2024년 12월 24일까지)",
                    image: "/products/product.png",
                },
                {
                    id: 3,
                    product: "서브 1등 직부 겸용 벽등",
                    description: "[옵션: 베이지/LED에디슨 인지구(전구색)/백색 (+10,500)]",
                    price: "55,000원",
                    date: "리뷰작성 가능 (2024년 12월 24일까지)",
                    image: "/products/product.png",
                },
                {
                    id: 4,
                    product: "서브 1등 직부 겸용 벽등",
                    description: "[옵션: 베이지/LED에디슨 인지구(전구색)/백색 (+10,500)]",
                    price: "55,000원",
                    date: "리뷰작성 가능 (2024년 12월 24일까지)",
                    image: "/products/product.png",
                },
                {
                    id: 5,
                    product: "서브 1등 직부 겸용 벽등",
                    description: "[옵션: 베이지/LED에디슨 인지구(전구색)/백색 (+10,500)]",
                    price: "55,000원",
                    date: "리뷰작성 가능 (2024년 12월 24일까지)",
                    image: "/products/product.png",
                }
            ],
            showModal: false,
            selectedProduct: {
                product: "서브 1등 직부 겸용 벽등",
                description: "[옵션: 베이지/LED에디슨 인지구(전구색)/백색 (+10,500)]",
                rating: '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>',
                image: "/products/product.png", // Replace with actual image path
            },
        };
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        submit() {
            // Handle submit action here
            console.log("Submitted");
            this.closeModal(); // Optionally close the modal after submitting
        },
        triggerFileInput(index) {
            // Trigger click on the specific input file
            this.$refs.fileInputs[index - 1].click();
        },
        uploadImage(event, index) {
            const file = event.target.files[0];
            if (file) {
                // Handle the uploaded file (e.g., show a preview, upload it, etc.)
                console.log(`Uploaded image for slot ${index}:`, file);
                // You can also set the image to display it if needed
            }
        },
    }
};
</script>
<style>
/* Modal Styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
}

.image-upload input[type="file"] {
    margin: 10px 0;
    display: block;
}
</style>