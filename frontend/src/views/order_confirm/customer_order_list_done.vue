<script setup>
  import { useRouter } from 'vue-router';
  import { reactive, onMounted } from 'vue';
  import { ref } from 'vue';//使用ref

  // const props = defineProps({});

  // const data = reactive({
  //   items: [null, null, null],
  // });

  // const router = useRouter();

  // 在组件挂载后立即执行的函数
// 定义组件的反应性数据
let orders = ref([]); // 订单数组

// 在组件挂载后立即执行的函数
onMounted(() => {
  const token = localStorage.getItem("token"); // 替换为实际的Token
  console.log(token);
  const statuses = '400'; 
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

</script>

<template>
  <div class="flex-col page">
    <div class="flex-col group">
      <div class="flex-row justify-between items-center self-start group_2">
        <div class="flex-row items-center">
          <img
            class="shrink-0 image"
            src="F:\5.19_2\5.19_2\XDU-2024-SPMC2-Frontend\frontend\src\adassets\1.png"
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
        <a href="/order_confirm">
          <button class="font_2 text_4" >
            Awaiting Receipt
          </button>
        </a>
<!--        <span class="font_2 text_4">Awaiting Receipt</span>-->
        <a href="/order_payment">
          <button class="font_2 text_5" >
            Pending Payment
          </button>
        </a>
        <span class="font_2 text_6">Completed</span>
      </div>
    </div>
    <div class="flex-col mt-19-5">
      <div class="flex-col mt-12 list-item" v-for="order in orders" :key="order.orderNumber">
    <div class="flex-row justify-between group_5">
        <div class="flex-row items-center self-center">
            <img
                class="shrink-0 image_3"
                src="F:\5.19_2\5.19_2\XDU-2024-SPMC2-Frontend\frontend\src\assets\shop_c.png"
            />
            <span class="ml-10 font_3 text_7">{{order.sellerName}}</span>
        </div>
        <span class="self-start font_4 text_8 text_9">Finish</span>
    </div>
    <div class="flex-col" v-for="item in order.items" :key="item.productName">
        <div class="flex-row justify-between items-end section">
            <div class="flex-row">
                <img
                    class="shrink-0 image_4"
                    :src="item.imageUrl"
                />
                <span class="ml-18 self-start font_3 text_10">{{item.productName}}</span>
            </div>
            <div class="flex-col">
                <span class="self-end font_5">￥{{item.price}}</span>
                <span class="self-end font_6 text_11 mt-20-5">×{{item.ordernum}}</span>
            </div>
        </div>
    </div>
</div>

    </div>
  </div>
</template>

<style scoped lang="css">
  .ml-17 {
    margin-left: 1.06rem;
  }
  .ml-7-5 {
    margin-left: 0.47rem;
  }
  .mt-19-5 {
    margin-top: 1.22rem;
  }
  .mt-20-5 {
    margin-top: 1.28rem;
  }
  .ml-25-5 {
    margin-left: 1.59rem;
  }
  .page {
    padding: 2.41rem 0 2.06rem;
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
    margin-left: 0.25rem;
    width: 20.73rem;
  }
  .image {
    width: 1.88rem;
    height: 1.78rem;
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
    margin-top: 2.06rem;
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
    color: #000000;
  }
  .text_4 {
    width: 6.75rem;
  }
  .text_5 {
    width: 6.97rem;
  }
  .text_6 {
    color: #ba4747;
    line-height: 0.79rem;
  }
  .list-item {
    padding: 0 0.44rem 0.56rem;
    background-color: #ffffff;
    border-radius: 1.41rem;
  }
  .list-item:first-child {
    margin-top: 0;
  }
  .group_5 {
    padding: 0.88rem 0 0.44rem;
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
    line-height: 0.78rem;
  }
  .font_4 {
    font-size: 0.75rem;
    font-family: HarmonyOSSansSC;
    line-height: 0.7rem;
    color: #696969;
  }
  .text_8 {
    line-height: 0.71rem;
  }
  .text_9 {
    margin-right: 0.44rem;
    margin-top: 0.75rem;
  }
  .section {
    margin-right: 0.25rem;
    padding: 1.25rem 0 0.44rem;
    background-color: #ffffff;
  }
  .image_4 {
    border-radius: 1.22rem;
    width: 7.19rem;
    height: 7.19rem;
  }
  .text_10 {
    margin-top: 1.56rem;
    line-height: 0.93rem;
  }
  .font_5 {
    font-size: 0.71rem;
    font-family: HarmonyOSSansSC;
    line-height: 0.54rem;
    font-weight: 700;
    color: #1d2129;
  }
  .font_6 {
    font-size: 0.63rem;
    font-family: AlibabaPuHuiTi;
    line-height: 0.43rem;
    color: #000000;
  }
  .text_11 {
    margin-right: 0.38rem;
  }
  .text-wrapper {
    padding: 0.31rem 0 0.63rem;
    background-color: #ffffff;
    border-radius: 4.41rem;
    width: 5.46rem;
    height: 1.71rem;
    border-left: solid 0.031rem #000000;
    border-right: solid 0.031rem #000000;
    border-top: solid 0.031rem #000000;
    border-bottom: solid 0.031rem #000000;
  }
  .font_7 {
    font-size: 0.75rem;
    font-family: HarmonyOSSansSC;
    line-height: 0.7rem;
    color: #000000;
  }
  .text-wrapper_2 {
    padding: 0.31rem 0 0.63rem;
    background-color: #ffffff;
    border-radius: 4.41rem;
    width: 5.46rem;
    height: 1.71rem;
    border-left: solid 0.031rem #ff5733;
    border-right: solid 0.031rem #ff5733;
    border-top: solid 0.031rem #ff5733;
    border-bottom: solid 0.031rem #ff5733;
  }
  .font_8 {
    font-size: 0.75rem;
    font-family: HarmonyOSSansSC;
    line-height: 0.7rem;
    color: #ff5733;
  }
</style>