<script setup>
  import { useRouter } from 'vue-router';
  import { reactive, onMounted } from 'vue';
  import { ref } from 'vue';//使用ref

  const props = defineProps({});

  // const data = reactive({});
  // 定义组件的反应性数据
  let imageUrl = ref('');//商品图片
  let productName= ref('');//商品名称
  let productDescription= ref('');//商品描述
  let price= ref('');//价格
  let ordernum= ref('');//数量
  let totalPrice= ref('');//实付款金额
  let orderNumber= ref('');//订单编号
  let createTime= ref('');//订单创建时间
  // const paymentTime= '';//付款时间
  // const deliveryTime= '';//发货时间

// 在组件挂载后立即执行的函数
onMounted(() => {
  const token = localStorage.getItem("token"); // 替换为实际的Token
  const status = '300'; 
  // 准备 API 请求的 URL 
  const url = `http://127.0.0.1:4523/m1/4275135-0-default/order/buyer/lastorder?status=${status}`;

  // 发起 GET 请求
  fetch(url,{
    method:'get',
    headers: {
        'Authorization': `Bearer ${token}`
      }
  })
    .then(response => response.json())
    .then(responseData => {
      // 检查是否有数据返回
      if ( responseData.data && responseData.data.length > 0) {
        // 假设只返回了一笔订单数据，取第一笔数据进行处理
        const orderData = responseData.data[0];
        const contentData = orderData.content[0]; // 确保这里取第一项
        
        // 更新页面上的内容
        imageUrl.value = contentData.imgUrl; // 使用.ref()
        productName.value = contentData.itemId; // 使用.ref()
        productDescription.value = contentData.itemDesc; // 使用.ref()
        price.value = contentData.unitPrice; // 使用.ref()
        ordernum.value = contentData.quantity; // 使用.ref()
        totalPrice.value = contentData.subtotal; // 使用.ref()
        orderNumber.value = orderData.id; // 使用.ref()
        createTime.value = orderData.ctime; // 使用.ref() 
        // paymentTime = ''; // 可根据需要更新
        // deliveryTime = ''; // 可根据需要更新
      } else {
        // 处理未找到订单数据的情况
        console.error('No order data found');
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});

  const confirmReceipt = async () => {
  // const { token } = request;
  const token = localStorage.getItem("token");
  const orderId = 3; // 这里可以是你的订单ID变量
  const url = `http://127.0.0.1:4523/m1/4275135-0-default/order/buyer/confirm/${orderId}`;

  try {
    const response = await fetch(url, {
      method: 'post', // 或其他适当的HTTP方法
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.ok) {
      // 修改本地状态或者进行其他操作
      console.log('订单确认成功');
    } else {
      console.error('订单确认失败');
    }
  } catch (error) {
    console.error('网络错误', error);
  }
};

</script>

<template>
  <div class="flex-col page">
    <div class="flex-col self-start group">
      <span class="self-start text_2">Easy BUY</span>
      <span class="self-end font text">待收货</span>
    </div>
    <div class="self-start divider"></div>
    <div class="flex-row self-stretch group_2">
      <img
        class="image"
        src="https://ide.code.fun/api/image?token=661f7469955475001196c369&name=60274a898e2131baf2769c5a294e5313.png"
      />
      <router-link :to="{ path: '/home', query: { id: $route.query.id } }">
        <span class="font_2 ml-7-5 ">Return</span>
      </router-link>     
    </div>
    <div class="flex-col self-stretch group_3">
      <div class="flex-col section">
        <div class="flex-col">
          <div class="flex-row items-center">
            <img
              class="image_2"
              src="https://ide.code.fun/api/image?token=661f7469955475001196c369&name=a988bd89bb5a27b71d01c75a5835daf2.png"
            />
            <img
              class="image_3 ml-4-5"
              src="https://ide.code.fun/api/image?token=661f7469955475001196c369&name=cab6db709e62b9526ce8aa33823982db.png"
            />
          </div>
          <div class="flex-row mt-9-5">
            <img class="image_4" :src="imageUrl" />
            <div class="flex-col items-start self-start group_4">
              <span class="text_3">{{ productName }}</span>
              <span class="text_4">{{ productDescription }}</span>
              <span class="text_5">{{ price }}</span>
            </div>
            <div class="flex-row items-center self-start group_5">
              <img
                class="image_5"
                src="https://ide.code.fun/api/image?token=661f7469955475001196c369&name=9ea09a41778fe655cce7f5f8b4530738.png"
              />
              <div class="ml-12 flex-col justify-start items-center text-wrapper">
                <span class="font_2 text_6">{{ ordernum }}</span>
              </div>
              <img
                class="ml-12 image_5"
                src="https://ide.code.fun/api/image?token=661f7469955475001196c369&name=8846157e5b42c2b194957390eafe4c46.png"
              />
            </div>
          </div>
        </div>
        <div class="flex-col mt-90-5">
          <div class="flex-row justify-between items-baseline group_6">
            <span class="font_3">实付款：</span>
            <span class="text_7">{{ totalPrice }}￥</span>
          </div>
          <div class="flex-row justify-between group_7">
            <span class="self-start font_3 text_10">订单编号：</span>
            <div class="flex-row items-center self-center group_8">
              <span class="font_4 text_9">{{orderNumber}}</span>
              <!-- <span class="font_4 text_9">{{ orderNumber }}</span> -->
              <div class="shrink-0 section_2"></div>
              <span class="text_8">复制</span>
            </div>
          </div>
          <div class="flex-row justify-between items-center group_9">
            <span class="font_3 text_11">创建时间：</span>
            <span class="font_4 text_12">{{ createTime }}</span>
          </div>
          <div class="flex-col group_10">
            <span class="self-start font_3 text_13">付款时间：</span>
            <span class="self-end font_4 text_12 text_14">**/**/**</span>
          </div>
          <div class="flex-row justify-between items-center group_11">
            <span class="font_3">发货时间：</span>
            <span class="font_4 text_12">**/**/**</span>
          </div>
        </div>
      </div>
      <div class="flex-col section_3 mt-8-5">
        <span class="self-start font text_15">遇到问题？</span>
        <div class="flex-row justify-between equal-division group_12 mt-13-5">
          <div class="flex-row items-center">
            <img
              class="shrink-0 image_6"
              src="https://ide.code.fun/api/image?token=661f7469955475001196c369&name=072c27304bb72188435bef7d21cc2b08.png"
            />
            <span class="ml-22 font">联系卖家</span>
          </div>
          <div class="flex-row items-center">
            <img
              class="shrink-0 image_6"
              src="https://ide.code.fun/api/image?token=661f7469955475001196c369&name=505bb5e00e134e6c5f187c8012c24f9b.png"
            />
            <span class="font ml-9-5">投诉卖家</span>
          </div>
        </div>
      </div>
      <div class="flex-row justify-end section_4 mt-8-5">
        <div class="flex-col justify-start items-center text-wrapper_2">
          <span class="font_3 text_16">查看物流</span>
        </div>
        <div class="ml-12 flex-col justify-start items-center text-wrapper_2">
          <span class="font_3 text_17">延长收货</span>
        </div>

        <div>
      <!-- 确认收货按钮 -->
      <div class="ml-12 flex-col justify-start items-center text-wrapper_3">
        <button @click="confirmReceipt()" class="font_3 text_18">确认收货</button>
        </div>
      </div>
        <!-- <div class="ml-12 flex-col justify-start items-center text-wrapper_3">
        <span class="font_3 text_18">确认收货</span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
  .ml-7-5 {
    margin-left: 0.47rem;
  }
  .ml-4-5 {
    margin-left: 0.28rem;
  }
  .mt-9-5 {
    margin-top: 0.59rem;
  }
  .mt-90-5 {
    margin-top: 5.66rem;
  }
  .mt-13-5 {
    margin-top: 0.84rem;
  }
  .ml-9-5 {
    margin-left: 0.59rem;
  }
  .mt-8-5 {
    margin-top: 0.53rem;
  }
  .page {
    background-color: #ebebeb;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .group {
    margin-left: 2.88rem;
    padding: 0.56rem 0;
    width: 19.93rem;
    height: 2.2rem;
  }
  .text_2 {
    margin-top: 0.38rem;
    color: #000000;
    font-size: 0.53rem;
    font-family: Poppins;
    font-weight: 700;
    line-height: 0.63rem;
    text-transform: uppercase;
    width: 2.41rem;
  }
  .font {
    font-size: 1.13rem;
    font-family: SourceHanSansCN;
    line-height: 1.04rem;
    color: #000000;
  }
  .text {
    margin-top: -1rem;
    line-height: 1.04rem;
  }
  .divider {
    margin-left: -1rem;
    background-color: #bfbaba;
    width: 40.98rem;
    height: 0.031rem;
  }
  .group_2 {
    margin-top: 0.94rem;
    padding: 0 0.91rem;
  }
  .image {
    width: 0.5rem;
    height: 0.5rem;
  }
  .font_2 {
    font-size: 0.63rem;
    font-family: Poppins;
    line-height: 0.45rem;
    color: #000000;
  }
  .group_3 {
    padding-top: 0.47rem;
  }
  .section {
    margin-left: 0.25rem;
    padding: 1.22rem 1.38rem 2.56rem;
    background-color: #ffffff;
    border-radius: 0.94rem 0 0 0.94rem;
  }
  .image_2 {
    width: 0.97rem;
    height: 0.97rem;
  }
  .image_3 {
    width: 3.31rem;
    height: 0.53rem;
  }
  .image_4 {
    border-radius: 2.03rem;
    width: 7.88rem;
    height: 6.06rem;
  }
  .group_4 {
    margin-left: 1.38rem;
  }
  .text_3 {
    color: #000000;
    font-size: 0.75rem;
    font-family: Poppins;
    font-weight: 700;
    line-height: 0.71rem;
  }
  .text_4 {
    margin-top: 0.44rem;
    color: #bfbaba;
    font-size: 0.63rem;
    font-family: Poppins;
    font-weight: 700;
    line-height: 0.97rem;
    width: 2.72rem;
  }
  .text_5 {
    margin-left: 0.25rem;
    margin-top: 1.09rem;
    color: #ff003c;
    font-size: 1.13rem;
    font-family: Poppins;
    line-height: 1rem;
  }
  .group_5 {
    margin-left: 2.44rem;
    margin-top: 3.03rem;
  }
  .image_5 {
    width: 0.91rem;
    height: 0.91rem;
  }
  .text-wrapper {
    padding: 0.75rem 0 0.56rem;
    background-color: #ffffff;
    width: 1.75rem;
    height: 1.75rem;
  }
  .text_6 {
    font-weight: 700;
    line-height: 0.45rem;
  }
  .group_6 {
    padding: 0 0.13rem;
  }
  .font_3 {
    font-size: 0.94rem;
    font-family: SourceHanSansCN;
    line-height: 0.87rem;
    color: #000000;
  }
  .text_7 {
    margin-right: 1.69rem;
    color: #ff0000;
    font-size: 0.94rem;
    font-family: AlibabaPuHuiTi;
    line-height: 0.67rem;
  }
  .group_7 {
    margin-top: 0.75rem;
  }
  .text_10 {
    margin-top: 0.88rem;
    line-height: 0.87rem;
  }
  .group_8 {
    margin-right: 2rem;
  }
  .font_4 {
    font-size: 0.72rem;
    font-family: SourceHanSansCN;
    line-height: 0.97rem;
    color: #000000;
  }
  .text_9 {
    line-height: 0.55rem;
  }
  .section_2 {
    margin-left: 0.44rem;
    background-color: #000000;
    width: 0.031rem;
    height: 1.5rem;
  }
  .text_8 {
    margin-left: 0.81rem;
    color: #000000;
    font-size: 0.72rem;
    font-family: AlibabaPuHuiTi;
    line-height: 0.66rem;
  }
  .group_9 {
    margin-right: 2.13rem;
    margin-top: 1.44rem;
  }
  .text_11 {
    line-height: 0.86rem;
  }
  .text_12 {
    width: 5.56rem;
  }
  .group_10 {
    margin-right: 1.88rem;
    margin-top: 1.25rem;
    height: 1.19rem;
  }
  .text_13 {
    line-height: 0.86rem;
  }
  .text_14 {
    margin-top: -0.63rem;
  }
  .group_11 {
    margin-right: 1.88rem;
    margin-top: 1.06rem;
  }
  .section_3 {
    padding: 1.44rem 1.88rem 2.16rem;
    background-color: #ffffff;
    border-radius: 0.94rem;
  }
  .text_15 {
    line-height: 1.02rem;
  }
  .equal-division {
    align-self: center;
  }
  .group_12 {
    width: 20.24rem;
  }
  .image_6 {
    width: 1.95rem;
    height: 1.95rem;
  }
  .section_4 {
    padding: 1rem 0.81rem;
    background-color: #ffffff;
    border-radius: 0.94rem;
  }
  .text-wrapper_2 {
    padding: 0.75rem 0 0.88rem;
    background-color: #ffffff;
    border-radius: 6.56rem;
    width: 6.1rem;
    height: 2.53rem;
    border-left: solid 0.031rem #a6a6a6;
    border-right: solid 0.031rem #a6a6a6;
    border-top: solid 0.031rem #a6a6a6;
    border-bottom: solid 0.031rem #a6a6a6;
  }
  .text_16 {
    line-height: 0.86rem;
  }
  .text_17 {
    line-height: 0.87rem;
  }
  .text-wrapper_3 {
    padding: 0.75rem 0 0.88rem;
    background-color: #ffffff;
    border-radius: 6.56rem;
    width: 6.1rem;
    height: 2.53rem;
    border-left: solid 0.031rem #ff8d1a;
    border-right: solid 0.031rem #ff8d1a;
    border-top: solid 0.031rem #ff8d1a;
    border-bottom: solid 0.031rem #ff8d1a;
  }
  .text_18 {
    color: #ff8d1a;
    line-height: 0.87rem;
  }
</style>