<template>
    <div class="container mx-auto mt-10 mb-10 px-4">
        <div class="p-6 px-0">
            <div class="brand mb-8">
                <h1 class="font-semibold text-xl text-center">주문 상세내역</h1>
            </div>
            <!-- Shipping Information -->
            <div class="mb-6 p-4 rounded-lg">
                <h2 class="text-xl font-bold mb-2">배송정보</h2>
                <div class="flex flex-col border border-[#d5d5d5]">
                    <div class="flex justify-between">
                        <div class="flex border-b border-[#d5d5d5] w-1/2">
                            <div class="p-4 bg-[#F5F5F5] min-w-[100px]">주문번호</div>
                            <div class="p-4">
                                <span>1234-5678</span>
                            </div>
                        </div>
                        <div class="flex border-b border-[#d5d5d5] w-1/2">
                            <div class="p-4 bg-[#F5F5F5] min-w-[100px]">주문일자</div>
                            <div class="p-4">
                                <span>2021.11.15</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex border-b border-[#d5d5d5] w-1/2">
                            <div class="p-4 bg-[#F5F5F5] min-w-[100px]">주문자</div>
                            <div class="p-4">
                                <span>홍길동</span>
                            </div>
                        </div>
                        <div class="flex border-b border-[#d5d5d5] w-1/2">
                            <div class="p-4 bg-[#F5F5F5] min-w-[100px]">결제현황</div>
                            <div class="p-4">
                                <span>카드결제 완료</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex  w-full">
                            <div class="p-4 bg-[#F5F5F5] min-w-[100px]">주문메모</div>
                            <div class="p-4">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mb-6 p-4 rounded-lg">
                <h2 class="text-xl font-bold mb-2">배송정보</h2>
                <div class="flex flex-col border border-[#d5d5d5]">
                    <div class="flex justify-between">
                        <div class="flex border-b border-[#d5d5d5] w-1/2">
                            <div class="p-4 bg-[#F5F5F5] min-w-[100px]">주문번호</div>
                            <div class="p-4">
                                <span>우체국택배1234-5678</span> <button type="button" class="border border-black py-1 px-2">배송조회</button>
                            </div>
                        </div>
                        <div class="flex border-b border-[#d5d5d5] w-1/2">
                            <div class="p-4 bg-[#F5F5F5] min-w-[100px]">연락처</div>
                            <div class="p-4">
                                <span>010-1234-1242</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex border-b border-[#d5d5d5] w-1/2">
                            <div class="p-4 bg-[#F5F5F5] min-w-[100px]">수취인</div>
                            <div class="p-4">
                                <span>홍길동</span>
                            </div>
                        </div>
                        <div class="flex border-b border-[#d5d5d5] w-1/2">
                            <div class="p-4 bg-[#F5F5F5] min-w-[100px]">배송메세지</div>
                            <div class="p-4">
                                <span>부재중시 문 앞에 놔주세요</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex  w-full">
                            <div class="p-4 bg-[#F5F5F5] min-w-[100px]">주소</div>
                            <div class="p-4">
                                <span>서울시 강남구 삼성동 11길 3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Order Details -->
            <div class="p-4 rounded-lg">
                <h2 class="text-xl font-bold mb-2">주문 상품정보</h2>
                <div class="  overflow-auto">
                <table class="w-full table-auto border border-[#d5d5d5]">
                    <thead>
                        <tr>
                            <th class="p-2 text-center border border-[#d5d5d5]">주문상품정보</th>
                            <th class="p-2 text-center border border-[#d5d5d5]">상품별주문번호</th>
                            <th class="p-2 text-center border border-[#d5d5d5]">수량</th>
                            <th class="p-2 text-center border border-[#d5d5d5]">가격</th>
                            <th class="p-2 text-center border border-[#d5d5d5]">적립금</th>
                            <th class="p-2 text-center border border-[#d5d5d5]">처리상태</th>
                            <th class="p-2 text-center border border-[#d5d5d5]">환불 및 리뷰</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in orderItems" :key="index">
                            <td class="p-2 text-center border border-[#d5d5d5]">
                                <div class="flex items-center gap-4">
                                    <img src="/products/1.png" alt="" class="w-24 h-24">
                                     {{ item.productName }}
                                </div>
                            </td>
                            <td class="p-2 text-center border border-[#d5d5d5]">{{ item.productOrderNumber }}</td>
                            <td class="p-2 text-center border border-[#d5d5d5]">{{ item.quantity }}</td>
                            <td class="p-2 text-center border border-[#d5d5d5] font-bold">{{ item.price }}원</td>
                            <td class="p-2 text-center border border-[#d5d5d5]">{{ item.rewardPoints }}</td>
                            <td class="p-2 text-center border border-[#d5d5d5]">{{ item.status }}</td>
                            <td class="p-2 text-center border border-[#d5d5d5]">
                                <button type="button" class="border border-black p-2">취소/반품 신청</button>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="7" class="p-2 text-end">
                                <p class="font-semibold">
                                    {{ totalAmount }}(상품구매금액) - {{ discount }}(적립금) - {{ couponDiscount }}(쿠폰할인) + {{ shippingFee
                                    }}(배송료) = {{ finalTotal }}원
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <div class="space-x-2 text-center mt-4">
                <button type="button" class="min-w-[172px] py-2 px-6 bg-[#EAEAEA] text-black rounded-2xl">목록으로</button>
                <button type="button" class="min-w-[172px] py-2 px-6 bg-[#CE8900] text-white rounded-2xl">세금계산서 발행 신청</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            orderItems: [
                {
                    productName: '제품이름 옵션',
                    productOrderNumber: '48472487-38724337',
                    quantity: '1개',
                    price: '9,900',
                    rewardPoints: '90',
                    status: '배송중',
                    refundReview: '취소/반품 신청',
                },
                {
                    productName: '제품이름 옵션',
                    productOrderNumber: '48472487-38724337',
                    quantity: '1개',
                    price: '9,900',
                    rewardPoints: '90',
                    status: '배송완료',
                    refundReview: '취소/반품 신청',
                },
                {
                    productName: '제품이름 옵션',
                    productOrderNumber: '48472487-38724337',
                    quantity: '1개',
                    price: '9,900',
                    rewardPoints: '90',
                    status: '거래완료',
                    refundReview: '상품후기 등록',
                },
            ],
            totalAmount: '19,800',
            discount: '780',
            couponDiscount: '1,250',
            shippingFee: '2,500',
            finalTotal: '20,270',
        };
    },
};
</script>

<style scoped>
.table th,
.table td {
    border-bottom: 1px solid #e2e8f0;
    /* Tailwind's border-gray-300 */
}
</style>