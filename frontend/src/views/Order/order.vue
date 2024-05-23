<script setup>
import {useRouter, useRoute} from 'vue-router';
// import { ElMessage } from 'element-plus';
// import { ElInputNumber } from 'element-plus';
import {reactive, onMounted, ref} from 'vue';
import AddressDropdown from '@/components/orders/AddressDropdown.vue';

import axios from 'axios';

const route = useRoute();
const router = useRouter();


const token = localStorage.getItem('token');
console.log(token);
const productId = route.params.id;


// //商品信息
// const productInfo = reactive({
//   title: '',
//   description: '',
//   price: 0,
//   stock:0,
//   shopname: '',
//   url: '',
//   sellerId:0
// });

const productInfo = reactive({});

//订单信息
const data = reactive({
  address: '',
  consignee: '',
  phonenumber: ''
});


// 更新选定的地址
const updateSelectedAddress = (selectedAddress) => {
  address.value = selectedAddress; // 更新 address
};


//商品数量
const quantity = ref(1);


//挂载时获取商品信息展示在页面的商品详情处
onMounted(async () => {
  try {
    const itemResponse = await axios.get(
        `http://localhost:8081/item/${productId}`, {
          headers: {
            // Authorization: `Bearer ${token}`
            token: `${token}`,
          }
        });

    const productData = itemResponse.data.data;
    productInfo.name = productData.title;
    productInfo.description = productData.description;
    productInfo.price = productData.price;
    // productInfo.shopname = productData.sellerId;
    productInfo.pictureUrl = productData.url;
    productInfo.stock = productData.stock;
    productInfo.sellerId = productData.sellerId;

    console.log('商品信息：', productData);

    // 动态设置 el-input-number 组件的最大值为商品库存
    const inputNumberElement = document.querySelector('.custom-input');
    inputNumberElement.setAttribute('max', productInfo.stock);

  } catch (error) {
    console.error('Error fetching product details:', error);
  }
});

function onClick() {
  console.log("返回详情页");
  router.push({name: 'Detail', params: {productId: productId.value}});
}

//处理支付方式
const selectedMethod = ref('alipay'); // 默认选择支付宝支付
const selectPayment = (method) => {
  selectedMethod.value = method;
  // 禁用另一个支付方式盒子的点击事件
  if (method === 'alipay') {
    selectedMethod.value = 'alipay';
  } else if (method === 'wechat') {
    selectedMethod.value = 'wechat';
  }
};

// 确保 token 的值不为空
if (!token) {
  console.error('Token is empty!');
  // 处理 token 为空的情况，例如跳转到登录页面或者重新获取 token
}

//处理下单
const handlePayment = async () => {
  try {
    const address = data.address;
    const consignee = data.consignee;
    const phonenumber = data.phonenumber;
    const sellerId = productInfo.sellerId;
    const orderData = [{
      itemId: productId,
      quantity: quantity.value,
      unitPrice: productInfo.price,
    }];

    console.log('Order Data:', orderData);

// 构建完整的请求 URL，包含查询参数
    const requestUrl = `http://localhost:8081/order/order?addrDesc=${address}&addrUsername=${consignee}&addrPhone=${phonenumber}&sellerId=${sellerId}`;

    //下单接口
    const orderResponse = await axios.post(
        // 'http://localhost:8081/order/order',
        requestUrl,
        orderData,
        {
          headers: {
            'token': `${token}`,
          }
        });
    console.log(token);
    //检查是否下单成功
    if (orderResponse.status === 200) {
      // const { traceNo, totalAmount, subject } = orderResponse.data;
      const traceNo = orderResponse.data.data.id;
      const totalAmount = orderResponse.data.data.totalAmount;
      const subject = orderResponse.data.data.userId;

      localStorage.setItem("traceNo", traceNo);
      localStorage.setItem("totalAmount", totalAmount);
      localStorage.setItem("subject", subject);
      console.log(traceNo)
      console.log(totalAmount)
      console.log(subject)

      // Redirect to payment page with order data as URL parameters
      console.log("pay参数：", orderResponse.data)
      window.location.href = `/pay?traceNo=${traceNo}&totalAmount=${totalAmount}&subject=${subject}`;
      console.log("跳转支付界面")
    } else {
      throw new Error('Failed to place order');
    }

  } catch (error) {
    console.error('Failed to place order:', error);
    alert('Failed to place order. Please try again.');
  }
};
// //处理下单&支付
// const handlePayment = async () => {
//   try {
//     const headers = {
//       Authorization: `Bearer ${token}`,
//       'Content-type':'application/json'
//     };
//     // 收集订单数据（现在只有一个商品的购买）
//     const orderData = [{
//       itemId:productId,
//       quantity: quantity.value,
//       unitPrice:productInfo.price,
//       address: data.address,
//       consignee: data.consignee,
//       phonenumber:data.phonenumber,
//       sellerId:productInfo.sellerId,
//     }];
//     console.log('订单数据：',orderData)

//     // 发送订单数据到后台请求生成订单
//     const orderResponse = await axios.post(
//       'http://127.0.0.1:4523/m1/4275135-0-default/order',
//       orderData,
//       {
//         headers//请求头中携带token
//       }
//     );

//     //弹窗显示下单成功，增加一个支付按钮，点击这个进行支付
//      alert("Order Successfully");
//     // ElMessage.success('下单成功！');

//     // 等待 0.5 秒后进行支付
//     // await new Promise(resolve => setTimeout(resolve, 500));

//     console.log('orderResponse ：',orderResponse);
//     // 处理后台返回的信息给支付接口
//     const traceNo = orderResponse.data.traceNo; 
//     const totalAmount = orderResponse.data.totalAmount;
//     const subject = orderResponse.data.subject; 

//     // 支付接口的参数对象
//     const paymentParams = {
//       traceNo: traceNo, 
//       totalAmount: totalAmount,
//       // subject: payRequestData.encodeURIComponent(subject) 
//       subject: subject
//     };

// //      //发送请求到支付接口
// //     const paymentResponse = await axios.get('http://127.0.0.1:4523/m1/4275135-0-default/pay/create',  { 
// //       params: paymentParams , 
// //       headers:{
// //          Authorization: `Bearer ${token}`
// //       },
// //       responseType: 'text' 
// //       });

// //     //获取返回的支付页面的HTML内容
// //     const paymentHtml = paymentResponse.data;
// //     console.log('调用接口获得的内容：',paymentHtml);
// //     // 打开新的窗口，并将支付页面的 HTML 内容加载到新窗口中
// //     const paymentWindow = window.open('', '_blank');
// //     paymentWindow.document.write(paymentHtml);

// //   } catch (error) {
// //     console.error('Failed to pay:', error);
// //     ElMessage.error('下单失败或支付失败，请重试。');
// //   }
// // };

</script>

<template>
  <div class="flex-col page">
    <div class="flex-col header">
      <div class="flex-row justify-center items-start relative group">
        <div class="flex-row items-end pos">
          <img
              class="shrink-0 image"
              src="/public/image/s1.png"
          />
          <span class="ml-22 text">Easy BUY</span>
        </div>
        <span class="text_2">fill order</span>
      </div>
      <div class="mt-42 flex-row">
        <img
            class="image_2"
            src="/src/assets/return.png"
            alt="Description of the image2"
            @click="onClick"
        />
        <span class="text_3 ml-15" @click="onClick">Return</span>
      </div>
    </div>
    <div class="flex-col flex-1 group_2">
      <div class="shrink-0 self-start relative divider"></div>
      <span class="self-start font text_4">Order Details</span>
      <div class="flex-col self-center group_3">
        <div class="flex-col">
          <!-- 收货地址那一行 -->

          <div class="flex-row items-center">
            <img
                class="shrink-0 image_3"
                src="/src/assets/address.png"
            />
            <span class="font_2 text_5 ">address:</span>
            <div class="input-wrapper">
              <!-- <input
                  v-model="data.address"
                  class="font_2 text_7 flex-col justify-start items-start flex-1 view"
                  type="text"
                  placeholder="Please enter your address"
              />  -->

              <!-- 下拉框选择地址 -->
              <div >
                <AddressDropdown @address-selected="updateSelectedAddress"/>
              </div>
              <!-- 下拉框选择地址 -->

            </div>
          </div>

          <div class="mt-22 flex-row items-center">
            <img
                class="shrink-0 image_3"
                src="/src/assets/profltPhoto.png"
            />
            <span class="font_2 text_8">consignee:</span>
            <div class="input-wrapper">
              <input
                  v-model="data.consignee"
                  class="font_2 text_9 flex-col justify-start items-start flex-1 view_2"
                  type="text"
                  placeholder="Please enter your consignee"
              />
            </div>
          </div>
          <div class="mt-22 flex-row items-center">
            <img
                class="shrink-0 image_4"
                src="/src/assets/telephone.png">
            <span class="font_2 text_10 ">phonenumber:</span>
            <div class="input-wrapper">
              <input
                  v-model="data.phonenumber"
                  class="font_2 text_9 flex-col justify-start items-start flex-1 text-wrapper_2"
                  type="text"
                  placeholder="Please enter your phone number"
              />
            </div>
          </div>
        </div>

        <!-- 商品的信息展示 -->
        <div class="flex-col group_4">
          <div class="flex-row items-center">
            <img
                class="image_5"
                src="/src/assets/shop.png"
            />
            <!-- <span class="ml-9"> 店铺名称: {{ productInfo.shopname }} </span> -->
            <span class="ml-9"> shop </span>
          </div>
          <div class="flex-row mt-19">
            <img class="image_7" :src="productInfo.pictureUrl" alt="Product Image"/>
            <div class="flex-col self-start group_5 ml-4">
              <div class="flex-col items-start self-stretch">
                <span class="text_12">{{ productInfo.name }}</span>
                <span class="mt-14 font_3 text_13">
                  {{ productInfo.description }}
                </span>
                <br/>
                <span class="ml-9">stock:{{ productInfo.stock - quantity }}</span>
              </div>
              <div class="flex-row items-center mt-10">
                <span class="font text_14 mr-4">￥{{ productInfo.price }}</span>
                <el-input-number v-model="quantity" :min="0" :max="productInfo.stock"
                                 class="custom-input"></el-input-number>
              </div>
            </div>
          </div>
        </div>

        <!-- 支付方式选择，默认选择支付宝支付-->
        <div class="flex-row items-center group_7">
          <span class="font_2 text_16">payment</span>
          <div class="flex-row equal-division ml-5">
            <!-- 支付宝支付 -->
            <div class="pay-box flex-row justify-between items-center equal-division-item section"
                 @click="selectPayment('alipay')" :class="{ 'selected': selectedMethod === 'alipay' }">
              <div class="flex-col justify-start section_3">
                <div class="flex-col justify-start section_4">
                  <div class="flex-col justify-start section_4">
                    <div class="flex-col justify-start section_4">
                      <div class="flex-col justify-start section_4">
                        <div class="flex-col justify-start items-center section_4">
                          <img class="image_9" src="/src/assets/alipay.png">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span class="font_3 text_17">Alipay</span>
            </div>

            <!-- 微信支付 -->
            <div class="pay-box flex-row justify-between equal-division-item section_2 ml-19"
                 @click="selectPayment('wechat')" :class="{ 'selected': selectedMethod === 'wechat' }">
              <img class="self-center image_10" src="/src/assets/wechat.png">
              <span class="self-start font_3 text_18">WeChat</span>
            </div>
          </div>
        </div>
        <!-- 付款 -->
        <div class="flex-col group_8">
          <div class="flex-row">
            <button @click="handlePayment" type="primary" class="text_19 flex-item text-wrapper_4">
              confirm payment
            </button>
          </div>
          <div class="flex-row">
            <button class="text_20 flex-item text-wrapper_5 mt-23"> cancel order</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">

.custom-input {
  display: flex;
  align-items: center;
}

/* 调整按钮的样式 */
.el-input-number__decrease,
.el-input-number__increase {
  margin: 0;
}

.selected {
  pointer-events: none; /* 禁用鼠标事件 */
  box-shadow: 0 0 10px rgba(0, 140, 255, 0.5);
}

.description {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-wrapper input {
  width: 500px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 45px;
  box-sizing: border-box;
}


.input-wrapper input::placeholder {
  text-align: center;
  color: #999;
}

.input-wrapper input:focus::placeholder {
  color: transparent;
}

.ml-15 {
  margin-left: 0.94rem;
}

.ml-9 {
  margin-left: 0.56rem;
}

.mt-19 {
  margin-top: 1.19rem;
}

.mt-35 {
  margin-top: 2.19rem;
}

.ml-5 {
  margin-left: 0.31rem;
}

.ml-19 {
  margin-left: 1.19rem;
}

.mt-23 {
  margin-top: 1.44rem;
}

.page {
  background-color: #ebebeb;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}

.header {
  padding: 1.31rem 1.81rem 2rem;
  height: 9.38rem;
}

.group {
  padding-top: 1.06rem;
}

.pos {
  position: absolute;
  left: 0;
  top: 0;
}

.image {
  width: 2.56rem;
  height: 1.94rem;
}

.text {
  color: #000000;
  font-size: 1.06rem;
  font-family: Poppins;
  font-weight: 700;
  line-height: 1.25rem;
  text-transform: uppercase;
  width: 4.81rem;
}

.text_2 {
  color: #000000;
  font-size: 1.5rem;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 1.38rem;
}

.image_2 {
  width: 1rem;
  height: 1rem;
}

.text_3 {
  color: #000000;
  font-size: 1.25rem;
  font-family: Poppins;
  line-height: 0.89rem;
}

.group_2 {
  padding-bottom: 1.88rem;
  overflow-y: auto;
}

.divider {
  margin-left: -1.97rem;
  margin-top: -4.97rem;
  background-color: #bfbaba;
  width: 82.28rem;
  height: 0.063rem;
}

.font {
  font-size: 2.25rem;
  font-family: Poppins;
  line-height: 1.94rem;
}

.text_4 {
  margin-left: 7.24rem;
  margin-top: 4.91rem;
  color: #000000;
  width: 14.31rem;
}

.group_3 {
  margin-top: 1.91rem;
  width: 44.34rem;
}

.image_3 {
  width: 2rem;
  height: 2rem;
}

.font_2 {
  font-size: 1.13rem;
  font-family: Poppins;
  line-height: 1.04rem;
  color: #000000;
}

.text_5 {
  margin-left: 4rem;
}

.view {
  margin-right: 0.38rem;
  padding: 1.48rem 0 1.6rem;
  background-color: #ffffff;
  border-radius: 3.81rem;
  height: 4.25rem;
  border-left: solid 0.063rem #000000;
  border-right: solid 0.063rem #000000;
  border-top: solid 0.063rem #000000;
  border-bottom: solid 0.063rem #000000;
}

.text_7 {
  margin-left: 1.89rem;
  line-height: 1.05rem;
}

.text_8 {
  margin-left: 2.7rem;
}

.view_2 {
  margin-left: 1.15rem;
  margin-right: 0.38rem;
  padding: 1.51rem 0 1.59rem;
  background-color: #ffffff;
  border-radius: 3.81rem;
  height: 4.25rem;
  border-left: solid 0.063rem #000000;
  border-right: solid 0.063rem #000000;
  border-top: solid 0.063rem #000000;
  border-bottom: solid 0.063rem #000000;
}

.text_9 {
  margin-left: 1.92rem;
  line-height: 1.02rem;
}

.image_4 {
  width: 2.25rem;
  height: 2.25rem;
}

.text_10 {
  margin-left: 0.35rem;
}

.text-wrapper_2 {
  margin-right: 0.44rem;
  padding: 1.62rem 0 1.68rem;
  background-color: #ffffff;
  border-radius: 3.81rem;
  height: 4.25rem;
  border-left: solid 0.063rem #000000;
  border-right: solid 0.063rem #000000;
  border-top: solid 0.063rem #000000;
  border-bottom: solid 0.063rem #000000;
}

.text_11 {
  margin-left: 1.84rem;
  line-height: 0.82rem;
}

.group_4 {
  margin-top: 3.41rem;
}

.image_5 {
  width: 1.94rem;
  height: 1.94rem;
}

.image_6 {
  width: 6.63rem;
  height: 1.06rem;
}

.image_7 {
  border-radius: 4.06rem;
  width: 15.75rem;
  height: 12.13rem;
}

.group_5 {
  margin-left: 2.78rem;
  margin-top: 0.2rem;
}

.text_12 {
  color: #000000;
  font-size: 1.5rem;
  font-family: Poppins;
  font-weight: 700;
  line-height: 1.43rem;
}

.font_3 {
  font-size: 1.25rem;
  font-family: Poppins;
  line-height: 1.19rem;
  font-weight: 700;
  color: #000000;
}

.text_13 {
  color: #bfbaba;
  line-height: 1.94rem;
  width: 20rem;
}

.text_14 {
  color: #ff003c;
  line-height: 2rem;
}

.group_6 {
  margin-left: 4.91rem;
  margin-top: 6.06rem;
}

.image_8 {
  width: 1.81rem;
  height: 1.81rem;
}

.group_7 {
  margin-top: 3.09rem;
  padding-left: 0.29rem;
}

.text_16 {
  line-height: 1.04rem;
}

.equal-division {
  flex: 1 1 0;
}

.equal-division-item {
  flex: 1 1 18.44rem;
}

.section {
  padding: 1.07rem 2.82rem 1.11rem;
  background-color: #ffffff;
  border-radius: 2.13rem;
  height: 6.5rem;
  border-left: solid 0.063rem #ffffff;
  border-right: solid 0.063rem #ffffff;
  border-top: solid 0.063rem #ffffff;
  border-bottom: solid 0.063rem #ffffff;
}

.section_3 {
  background-image: url('https://ide.code.fun/api/image?token=6618a1a5ec6c850012d20c62&name=9de6439363b41d01b97cfa8fe9e78469.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 4.19rem;
  height: 4.19rem;
}

.section_4 {
  background-image: url('https://ide.code.fun/api/image?token=6618a1a5ec6c850012d20c62&name=9de6439363b41d01b97cfa8fe9e78469.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 4.19rem;
}

.image_9 {
  width: 4.19rem;
  height: 4.19rem;
}

.text_17 {
  margin-right: 0.2rem;
}

.section_2 {
  padding: 1.39rem 2.76rem 1.05rem;
  background-color: #ffffff;
  border-radius: 2.13rem;
  height: 6.5rem;
  border-left: solid 0.063rem #ffffff;
  border-right: solid 0.063rem #ffffff;
  border-top: solid 0.063rem #ffffff;
  border-bottom: solid 0.063rem #ffffff;
}

.image_10 {
  width: 4.38rem;
  height: 3.94rem;
}

.text_18 {
  margin-right: 0.96rem;
  margin-top: 1.15rem;
  line-height: 1.18rem;
}

.group_8 {
  margin-top: 2.06rem;
}

.text-wrapper_4 {
  margin-right: 0.31rem;
  padding: 1.52rem 0 1.68rem;
  background-color: #ffffff;
  border-radius: 13.13rem;
  width: 44rem;
  border-left: solid 0.063rem #000000;
  border-right: solid 0.063rem #000000;
  border-top: solid 0.063rem #000000;
  border-bottom: solid 0.063rem #000000;
}

.text_19 {
  color: #000000;
  font-size: 1.88rem;
  font-family: AlibabaPuHuiTi;
  font-weight: 300;
  line-height: 1.73rem;
  text-shadow: 0 0.063rem #000000, 0 -0.063rem #000000, 0.063rem 0 #000000, -0.063rem 0 #000000;
}

.text-wrapper_5 {
  margin-left: 0.13rem;
  margin-right: 0.28rem;
  padding: 1.47rem 0 1.77rem;
  background-color: #ff5733;
  border-radius: 13.13rem;
  width: 43.94rem;
}

.text_20 {
  color: #ffffff;
  font-size: 1.88rem;
  font-family: Poppins;
  font-weight: 700;
  line-height: 1.76rem;
}
</style>