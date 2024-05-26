<script setup>
  import { useRouter } from 'vue-router';
  import { reactive, onMounted } from 'vue';
  import { ref } from 'vue';//使用ref

  import ComplaintForm from '@/components/complaintForm/ComplaintForm.vue'; // 引入投诉表单组件

  // const props = defineProps({});

  // const data = reactive({
  //   items: [null, null, null],
  // });

  // const router = useRouter();

  // 在组件挂载后立即执行的函数
// 定义组件的反应性数据
let orders = ref([]); // 订单数组

//投诉组件添加的部分
const isModalVisible = ref(false);

const showModal = (orderId) => {
       const order = orders.value.find(order => order.orderNumber === orderId);
      //  const item = order.items.find(item => item.productName === productName);
       order.isModalVisible = true;
        console.log("订单编号：",orderId);
        console.log("order",order)
        console.log(order.isModalVisible);
};

const closeModal = (order) => {
    if (order) {
      order.isModalVisible = false;
    }
  };

// 在组件挂载后立即执行的函数
onMounted(() => {
  const token = localStorage.getItem("token"); // 替换为实际的Token
  console.log(token);
  const statuses = '300'; 
  // 准备 API 请求的 URL 
  const url = `http://localhost:8081/order/buyer/search?statuses=${statuses}`;
  // 发起 GET 请求
  fetch(url, {
    method: 'get',
    // 
    headers: {
      'token': `${token}`,
      // 'token': 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoyLCJpZCI6NCwidXNlcm5hbWUiOiJtaXpvcmUxIiwiZXhwIjoxNzIzMDQzNjg2fQ.FgBVQRQMoUUPORwf8yyzP5gPncXbStjRn11tZtJrmiw'
    }
})
.then(response => response.json())
.then(responseData => {
    // 检查是否有数据返回
    if (responseData.data && responseData.data.length > 0) {
        // 将每个订单数据转换为新的对象，并添加到数组中
        orders.value = responseData.data.map(orderData => {
            return {
                orderNumber: orderData.id,
                createTime: orderData.ctime,
                sellerName: orderData.sellerName,
                items: orderData.content.map(contentData => {
                    return {
                        imageUrl: contentData.imgUrl,
                        productName: contentData.itemId,
                        productDescription: contentData.itemDesc,
                        price: contentData.unitPrice,
                        ordernum: contentData.quantity,
                        totalPrice: contentData.subtotal,
                    };
                })
            };
        });
    } else {
        // 处理未找到订单数据的情况
        console.error('No order data found');
    }
})
.catch(error => {
    console.error('Error fetching data:', error);
});

});

const confirmReceipt = (orderId) => {
  // 确保 orderId 存在且不为空
  if (!orderId) {
    console.error('Order ID is missing or invalid');
    return;
  }
  const token = localStorage.getItem("token");
  const url = `http://localhost:8081/order/buyer/confirm/${orderId}`;

  try {
    fetch(url, {
      method: 'post',
      headers: {
        'token': `${token}`,
        // 'token': 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoyLCJpZCI6NCwidXNlcm5hbWUiOiJtaXpvcmUxIiwiZXhwIjoxNzIzMDQzNjg2fQ.FgBVQRQMoUUPORwf8yyzP5gPncXbStjRn11tZtJrmiw'
      }
    })
    .then(response => {
      if (response.ok) {
        console.log('Order confirmed successfully');
        // 在确认收货成功后，你可以在这里执行一些操作，比如更新订单状态等
      } else {
        console.error('Order confirmation failed');
      }
    })
    .catch(error => {
      console.error('Error confirming order:', error);
    });
  } catch (error) {
    console.error('Network Error', error);
  }
};



</script>

<template>
  <div class="flex-col page">
    <div class="flex-col group">
      <div class="flex-row justify-between items-center self-start group_2">
        <div class="flex-row items-center">
          <img
            class="shrink-0 image"
            src="D:\michelle\code\front-end\XDU-2024-SPMC2-Frontend\frontend\src\adassets\1.png"
          />
          <span class="font text ml-17">Easy BUY</span>
        </div>
        <span class="text_2">My Orders</span>
      </div>
      <div class="flex-row self-stretch group_3">
        <img
          class="image_2"
          src="https://ide.code.fun/api/image?token=6638c168d578370011c5f8bc&name=60274a898e2131baf2769c5a294e5313.png"
        />
        <a href="/home">
          <button class="font text_3 ml-7-5" >
            Return
          </button>
        </a>
      </div>
      <div class="flex-row justify-between items-center self-center group_4">
        <span class="font_2 text_4">Awaiting Receipt</span>
        <a href="/order_payment">
          <button class="font_2 text_4" >
            Pending Payment
          </button>
        </a>
<!--        <span class="font_2 text_5">Pending Payment</span>-->
        <a href="/order_done">
          <button class="font_2 text_4" >
            Completed
          </button>
        </a>
      </div>
    </div>
    <div class="flex-col mt-19-5">
      <div class="flex-col mt-20 section list-item" v-for="order in orders" :key="order.orderNumber">
        <div class="flex-col">
            <div class="flex-row justify-between group_5">
              <div class="flex-row items-center self-center">
            <img
                class="shrink-0 image_3"
                src="D:\michelle\code\front-end\XDU-2024-SPMC2-Frontend\frontend\src\assets\shop_c.png"
            />
            <span class="ml-10 font_3 text_7">{{order.sellerName}}</span>
        </div>
        <span class="self-start font_4 text_8">seller already sent</span>
    </div>
    <div class="flex-row justify-between section_2" v-for="item in order.items" :key="item.productName">
      <div class="flex-row">
                <img
                    class="shrink-0 image_4"
                    :src="item.imageUrl"
                />
                <span class="self-start font_5 text_9 ml-17-5">{{item.productName}}</span>
      </div>
      <div class="flex-col items-end self-start group_6">
                <span class="font_6">￥{{item.price}}</span>
                <span class="font_7 text_10 mt-20-5">×{{item.ordernum}}</span>
                </div>
            </div>
        </div>
        <div class="flex-col group_7 mt-16-5">
        <div class="flex-row justify-end group_8">
              <!-- <div class="flex-col justify-start items-center text-wrapper">
                <span class="font_10 text_13">COMPLAIN</span>
              </div> -->
              <div class="flex-row justify-end group_8">
              <button @click="showModal(order.orderNumber)" class="font_9 complaint-button">Complaint</button>
              </div>
                <div class="modal" v-if="order.isModalVisible">
                  <div class="modal-content">
                    <ComplaintForm :isVisible="true" :orderId="order.orderNumber" @close="closeModal(order)" class="model"/>
                  </div>
                </div>
               <!-- <div class="ml-12 flex-col justify-start items-center text-wrapper_3">
                <span class="font_9">确认收货</span>
              </div> -->
              <div>
               <!-- 确认收货按钮  -->
              <!-- <div class="ml-12 flex-col justify-start items-center text-wrapper_3"> -->
                <div class="flex-row justify-end group_8">
              <button @click="confirmReceipt(order.orderNumber)" class="font_9 complaint-button">Confirm</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped lang="css">

.modal {
  display: block;
  position: fixed; 
  z-index: 9999; /* 设置一个较高的 z-index 值以确保弹出框位于页面顶部 */
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgba(0,0,0,0.4); 
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
  .ml-20-5 {
    margin-left: 1.28rem;
  }
  .mt-19-5 {
    margin-top: 1.22rem;
  }
  .mt-20-5 {
    margin-top: 1.28rem;
  }
  .mt-16-5 {
    margin-top: 1.03rem;
  }
  .ml-17-5 {
    margin-left: 1.09rem;
  }
  .page {
    padding: 2.34rem 0 1.84rem;
    background-color: #ebebeb;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .group {
    padding: 0 1rem;
  }
  .group_2 {
    width: 20.92rem;
  }
  .image {
    width: 1.88rem;
    height: 1.91rem;
  }
  .font {
    font-size: 0.75rem;
    font-family: Poppins;
    color: #000000;
  }
  .text {
    font-size: 0.78rem;
    font-weight: 700;
    line-height: 0.94rem;
    text-transform: uppercase;
    width: 3.53rem;
  }
  .text_2 {
    color: #000000;
    font-size: 1.13rem;
    font-family: Montserrat;
    font-weight: 600;
    line-height: 0.97rem;
  }
  .group_3 {
    margin-top: 2rem;
  }
  .image_2 {
    width: 0.5rem;
    height: 0.5rem;
  }
  .text_3 {
    line-height: 0.54rem;
  }
  .group_4 {
    margin-top: 1.69rem;
    width: 25.15rem;
  }
  .font_2 {
    font-size: 0.84rem;
    font-family: Inter;
    line-height: 1rem;
  }
  .complaint-button {
  padding: 8px 16px; /* 设置按钮的内边距 */
  background-color: #d6d2d2; /* 设置按钮的背景颜色 */
  color: white; /* 设置按钮的文字颜色 */
  border: none; /* 移除按钮的边框 */
  border-radius: 4px; /* 设置按钮的圆角 */
  cursor: pointer; /* 将鼠标指针设置为手型 */
  transition: background-color 0.3s; /* 添加过渡效果 */
}
  
.text_4 {
    color: #c26262;
    width: 6.75rem;
  }
  .text_5 {
    color: #000000;
    width: 6.97rem;
  }
  .text_6 {
    color: #000000;
    font-size: 0.84rem;
    font-family: Inter;
    line-height: 0.79rem;
  }
  .section {
    padding: 0.88rem 0.38rem 0.94rem;
    background-color: #ffffff;
    border-radius: 1.41rem;
  }
  .list-item:first-child {
    margin-top: 0;
  }
  .group_5 {
    padding-bottom: 0.5rem;
  }
  .image_3 {
    width: 1.41rem;
    height: 1.41rem;
  }
  .font_3 {
    font-size: 0.84rem;
    font-family: HarmonyOSSansSC;
    line-height: 0.79rem;
    color: #000000;
  }
  .text_7 {
    line-height: 0.79rem;
  }
  .font_4 {
    font-size: 0.75rem;
    font-family: HarmonyOSSansSC;
    line-height: 0.7rem;
    color: #ff8d1a;
  }
  .text_8 {
    margin-right: 0.31rem;
    margin-top: 0.5rem;
    line-height: 0.71rem;
  }
  .section_2 {
    margin-left: 0.13rem;
    margin-right: 0.25rem;
    padding: 1.25rem 0 0.44rem;
    background-color: #ffffff;
  }
  .image_4 {
    border-radius: 1.22rem;
    width: 7.19rem;
    height: 7.19rem;
  }
  .font_5 {
    font-size: 0.84rem;
    font-family: HarmonyOSSansSC;
    line-height: 1rem;
    color: #000000;
  }
  .text_9 {
    margin-top: 1.5rem;
    width: 12.91rem;
  }
  .group_6 {
    margin-top: 1.88rem;
  }
  .font_6 {
    font-size: 0.71rem;
    font-family: HarmonyOSSansSC;
    line-height: 0.54rem;
    font-weight: 700;
    color: #1d2129;
  }
  .font_7 {
    font-size: 0.63rem;
    font-family: AlibabaPuHuiTi;
    line-height: 0.43rem;
    color: #000000;
  }
  .text_10 {
    margin-right: 0.31rem;
  }
  .group_7 {
    padding-left: 0.88rem;
    padding-right: 0.25rem;
  }
  .section_3 {
    padding: 0.19rem 0.59rem;
    background-color: #f7f7f7;
  }
  .image_5 {
    width: 1.56rem;
    height: 1.56rem;
  }
  .text_11 {
    margin-right: 27.31rem;
  }
  .group_8 {
    padding: 0.81rem 0.94rem 0;
  }
  .text-wrapper {
    padding: 0.56rem 0;
    background-color: #ffffff;
    border-radius: 4.41rem;
    width: 5.46rem;
    height: 1.71rem;
    border-left: solid 0.031rem #000000;
    border-right: solid 0.031rem #000000;
    border-top: solid 0.031rem #000000;
    border-bottom: solid 0.031rem #000000;
  }
  .font_10 {
    font-size: 0.75rem;
    font-family: HarmonyOSSansSC;
    line-height: 0.54rem;
    color: #000000;
  }
  .text_13 {
    line-height: 0.57rem;
  }
  .text-wrapper_2 {
    padding: 0.38rem 0 0.56rem;
    background-color: #ffffff;
    border-radius: 4.41rem;
    width: 5.46rem;
    height: 1.71rem;
    border-left: solid 0.031rem #000000;
    border-right: solid 0.031rem #000000;
    border-top: solid 0.031rem #000000;
    border-bottom: solid 0.031rem #000000;
  }
  .font_8 {
    font-size: 0.75rem;
    font-family: HarmonyOSSansSC;
    line-height: 0.7rem;
    color: #000000;
  }
  .text_12 {
    line-height: 0.72rem;
  }
  .text-wrapper_3 {
    padding: 0.38rem 0 0.56rem;
    background-color: #ffffff;
    border-radius: 4.41rem;
    width: 5.46rem;
    height: 1.71rem;
    border-left: solid 0.031rem #ff5733;
    border-right: solid 0.031rem #ff5733;
    border-top: solid 0.031rem #ff5733;
    border-bottom: solid 0.031rem #ff5733;
  }
  .font_9 {
    font-size: 0.75rem;
    font-family: HarmonyOSSansSC;
    line-height: 0.7rem;
    color: #ff5733;
  }
</style>