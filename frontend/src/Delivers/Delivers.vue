<template>
    <div class="flex-col page">
      <div class="flex-row justify-end items-center group">
        <span class="font text">Van</span>
        <div class="flex-row items-center ml-57">
          <img class="image_2"
            src="../assets/van.png" />
          <div class="ml-20 section"></div>
          <div class="ml-20 flex-row items-center">
            <span class="font text_2">EXIT</span>
            <img class="shrink-0 image ml-3"
              src="../assets/exit.png" />
          </div>
        </div>
      </div>
      <div class="flex-row items-center group_2">
        <div class="flex-col justify-start items-center relative group_3">
          <img class="image_4"
            src="../assets/2.png" />
          <img class="image_3 pos"
            src="../assets/1.png" />
        </div>
        <div class="flex-row section_2 ml-134">
          <img class="self-start image_5"
            src="../assets/enter.png" />
          <img class="self-center image_6 ml-196"
            src="../assets/3.png" />
        </div>
      </div>
      <div class="flex-row group_4">
        <div class="flex-col shrink-0 self-start section_3">
          <div class="flex-row items-center">
            <div class="flex-row items-center">
              <img class="shrink-0 image_7"
                src="../assets/home.png" />
              <span class="font_2 text_4 ml-13">HOME</span>
            </div>
            <img class="image_8 ml-95"
              src="../assets/right.png" />
          </div>
          <div class="flex-row items-center group_9">
            <div class="flex-row items-center">
              <img class="shrink-0 image_9"
                src="../assets/account.png" />
              <span class="text_6 ml-11">ACCOUNT</span>
            </div>
            <img class="image_8 ml-67"
              src="../assets/right.png" />
          </div>
          <!--div class="flex-col group_13">
            <div class="flex-row items-center self-stretch">
              <img class="image_11"
                src="../assets/finance.png" />
              <span class="font_2 text_8 ml-13">FINANCE</span>
            </div>
            <span class="mt-18 self-center font_4">RECONCILIATION</span>
            <span class="mt-18 self-center font_4 text_11">SETTLEMENT</span>
          </div-->
          <div class="flex-col group_16">
            <div class="flex-row items-center self-stretch">
              <img class="image_14"
                src="../assets/orders.png" />
              <span class="font_2 text_13 ml-13">ORDERS</span>
            </div>
            <span class="self-center font_4 text_15">MANAGEMENT</span>
            <span class="self-start font_6 text_16">RETURN</span>
            <div class="flex-row items-center self-stretch group_20">
              <img class="image_15"
                src="../assets/goods.png" />
              <span class="font_2 ml-13">GOODS</span>
            </div>
            <div class="flex-col self-center group_21">
              <span class="self-stretch font_7 text_10" style="cursor:pointer;" @click="handleClick">MANAGEMENT</span>
              <a href="/src/AddNew/AddProduct.html" class="mt-6 self-start font_7 text_18">ADD NEW</a>
            </div>
          </div>
          <!--div class="flex-col group_25">
            <div class="flex-row items-center self-stretch">
              <img class="image_7"
                src="../assets/shop.png" />
              <span class="ml-12 font_2">SHOP</span>
            </div>
            <span class="mt-24 self-center font_4 text_1000">RENOVATION</span>
          </div-->
          <!--div class="flex-col group_26">
            <div class="flex-row items-center self-stretch">
              <img class="image_14"
                src="../assets/withdrawl.png" />
              <span class="font_2 text_28 ml-13">WITHDRAWAL</span>
            </div>
            <span class="self-start font_8 text_29 mt-21">RECORDS</span>
          </div-->
          <!--div class="flex-col group_31">
            <div class="flex-row items-center self-stretch">
              <img class="image_7"
                src="../assets/coupon.png" />
              <span class="ml-12 font_2">COUPON</span>
            </div>
            <span class="self-start font_8 text_37">SETTINGS</span>
            <span class="self-center font_8 text_38">DISTRIBUTION</span>
            <div class="flex-row items-center self-stretch group_32">
              <div class="flex-row items-center shrink-0">
                <img class="shrink-0 image_7"
                  src="../assets/fright.png" />
                <span class="font_2 text_10 text_39 ml-17">FREIGHT</span>
              </div>
              <img class="ml-84 shrink-0 image_8"
                src="../assets/right.png" />
            </div>
          </div-->
          <!--div class="flex-col group_34">
            <div class="flex-row items-center self-stretch">
              <img class="image_14"
                src="../assets/transaction.png" />
              <span class="font_2 ml-13">TRANSACTION</span>
            </div>
            <div class="flex-row self-stretch group_37 mt-21">
              <span class="font_8 text_44">DAILY</span>
              <span class="ml-16 font_8">MONTHLY</span>
            </div>
            <span class="self-start font_8 text_45 mt-21">USERS</span>
            <span class="self-start font_8 text_46 mt-21">STORE</span>
            <span class="self-center font_8 text_1001 mt-21">CATEGORY</span>
          </div-->
        </div>
        <div class="flex-col flex-1 group_5 ml-15">
          <div class="flex-col section_4">
            <span class="self-start text_3">REFUND ORDER</span>
            <div class="flex-row justify-between self-stretch group_6">
              <div class="flex-row items-center">
                <span class="font_3 text_5">ORDER NO：</span>
                <div class="ml-24 shrink-0 section_5">
                  <input type="text" class="input-text" placeholder="Please input order no" v-model="inputText_1" />
                </div>
              </div>
              <div class="flex-row group_7">
                <div class="flex-col items-start group_8">
                  <span class="font_3">ORDER</span>
                  <span class="font_3">NUMBER：</span>
                </div>
                <div class="section_1001 ml-11">
                  <input type="text" class="input-text" placeholder="Please input refund number" v-model="inputText_2" />
                </div>
              </div>
            </div>
            <div class="flex-row items-start self-stretch group_10 view">
              <div class="flex-row justify-between flex-1 group_12">
                <span class="self-start font_3 text_7">
                  APPLICATION
                  <br />
                  TIME：
                </span>
                <div class="flex-row items-center section_6">
                  <span class="font text_9">2019-10-30</span>
                  <img class="shrink-0 image_12 ml-67"
                    src="../assets/canlendar.png" />
                </div>
                <!--<div class="self-center section_7"></div>-->
                <!--<div class="flex-col justify-start items-end image-wrapper_2">
                <img
                  class="image_12 image_13"
                  src="https://ide.code.fun/api/image?token=661e4ef1a17dbc0011546804&name=dbf2ee7f28fb2eb177136059a17530ea.png"
                />
              </div>-->
              </div>
              <div class="flex-row group_11 ml-27">
                <div class="flex-col items-start">
                  <span class="font_3">REFUND</span>
                  <span class="font_3">TYPE：</span>
                </div>
                <div class="ml-24 flex-col justify-start items-end image-wrapper_1002">
                  <img class="image_10"
                    src="../assets/down.png" />
                </div>
              </div>
            </div>
            <div class="flex-row justify-between items-center self-stretch group_10 view_2">
              <div class="flex-row">
                <div class="flex-col items-start shrink-0 group_15">
                  <span class="font_3">REFUND</span>
                  <span class="font_3 text_12">STATUS：</span>
                </div>
                <div class="ml-40 flex-col justify-start items-end shrink-0 image-wrapper">
                  <img class="image_10"
                    src="../assets/down.png" />
                </div>
              </div>
              <!---->
              <div class="flex-col">
                <div class="flex-row items-center">
                  <div class="flex-col items-start shrink-0 group_14">
                    <span class="font_3">REFUND</span>
                    <span class="font_3">AMOUNT:</span>
                  </div>
                  <div class="flex-col justify-start items-center shrink-0 text-wrapper ml-9">
                    <span class="font_5 text_10">NUMBER</span>
                  </div>
                  <!--<div class="shrink-0 section_7 ml-9"></div>-->
                  <div class="flex-col justify-start items-center shrink-0 text-wrapper_1 view_3 ml-9">
                    <span class="font_5 text_10">NUMBER</span>
                  </div>
                </div>
                <div class="flex-row items-center mt-19">
                  <div class="flex-col items-start">
                    <span class="font_3">ORDER</span>
                    <span class="font_3">STATUS： </span>
                  </div>
                  <!--div class="ml-16 flex-col justify-start items-end image-wrapper_3">
                  <img
                    class="image_10"
                    src="https://ide.code.fun/api/image?token=661e4ef1a17dbc0011546804&name=7b12dfbea98bdd63bf9158e09b13f2b8.png"
                  />
                </div-->
                  <div class="image-wrapper_4" @click="showOptions = true">
                    <!--<img  
        class="image_10"  
        src="https://ide.code.fun/api/image?token=661e4ef1a17dbc0011546804&name=7b12dfbea98bdd63bf9158e09b13f2b8.png"  
        alt="选项图片"  
      />  -->
                    <div v-if="showOptions" class="options-container"
                      @click.stop="event => !event.target.matches('.option') && (showOptions = false)">
                      <div v-for="option in options" :key="option.value" class="option"
                        @click="selectOption(option.text); showOptions = false">
                        {{ option.text }}
                      </div>
                    </div>
                    <div v-if="selectedOption" class="selected-option-display">{{ selectedOption }}</div>
                  </div>
                </div>
                <!---->
              </div>
            </div>
            <div class="flex-row justify-between items-start self-stretch group_17">
              <div class="flex-row">
                <span class="self-start font_3 text_14">
                  REASONS FOR
                  <br />
                  REFUND：
                </span>
                <div class="flex-col justify-start items-end shrink-0 image-wrapper_4">
                  <img class="image_10"
                    src="../assets/down.png" />
                </div>
              </div>
              <div class="flex-row items-center group_18">
                <div class="flex-col items-start">
                  <span class="font_3">PRODUCT</span>
                  <span class="font_3">NAME：</span>
                </div>
                <div class="ml-12 section_555">
                  <input type="text" class="input-text" placeholder="Please input product name" v-model="inputText_3" />
                </div>
              </div>
            </div>
            <div class="flex-row self-stretch group_19">
              <div class="flex-col justify-start items-center text-wrapper_2" @click="handleClick"><span
                  class="font text_17">FILTER</span></div>
              <div class="flex-col justify-start items-center text-wrapper_3 ml-7"><span class="font">CLEAN</span></div>
            </div>
          </div>
          <div class="mt-20 flex-col section_8">
            <div class="flex-row items-center self-start group_22">
              <span class="shrink-0 font_6 text_19">ALL</span>
              <span class="shrink-0 font_8 text_20"> </span>
              <span class="shrink-0 font_8 text_21"> </span>
              <span class="shrink-0 font_8 text_22"> </span>
              <span class="shrink-0 font_8 text_23"> </span>
              <span class="shrink-0 font_8 text_24"> </span>
              <span class="font_3 text_10 text_25">CANCELED</span>
            </div>
            <div class="flex-col justify-start items-start self-start divider">
              <div class="shrink-0 section_9"></div>
            </div>
            <div class="flex-col self-stretch group_23">
              <!--div class="detail-container all">
              <div class="order-image">
                <img :src = "order.url" />
              </div>
              <div class="order-info">
                <h2> {{ order.information}}</h2>
                <p class="order-description"> {{ order.description }}</p>
                <p class="order-price"> {{ order.price }}</p>
                <p class="order-amount"> {{ order.amount }}</p>
                <p></p>
              </div>
            </div-->
              <div class="flex-col group_24">
                <div class="flex-row justify-between section_10">
                  <span class="font">INFORMATION</span>
                  <div class="flex-row">
                    <div class="flex-row shrink-0">
                      <span class="font text_26">CUSTOMER</span>
                      <span class="font date-picker ml-99">ADDRESS</span>
                    </div>
                    <span class="font ml-137">OPERATE</span>
                  </div>
                </div>
                <div class="flex-col section_11 mt-15">
                  <div class="flex-row justify-between items-center section_12">
                    <span class="font_3">ORDER.NO : {{ orders.id }}</span>
                    <span class="font text_27">SUM：￥{{ ordersDetail.unitPrice*ordersDetail.quantity }}</span>
                  </div>
                  <div class="flex-row items-center group_27">
                    <img :src="ordersDetail.imgUrl" class="shrink-0 image_16"
                       />
                    <div class="flex-row form-item ml-13">
                      <div class="flex-col shrink-0 self-start group_29">
                        <!-- orders{{ orders.content }} -->
                        <span class="self-stretch font_3">{{ ordersDetail.itemDesc }}</span>
                        <span class="mt-34 self-start" :class="['font_12', shipmentStatusClass]">{{ currentShipmentStatus }}</span>
                      </div>
                      <div class="flex-col items-end shrink-0 self-start group_30">
                        <span class="font text_30">¥{{ ordersDetail.unitPrice }}</span>
                        <span class="mt-20 font text_34">x{{ ordersDetail.quantity }}</span>
                      </div>
                      <div class="flex-row select">
                        <div class="flex-row flex-1 group_28">
                          <span class="self-start font_9 text_31">{{ orders.username }}</span>
                          <div class="shrink-0 section_13 view_4"></div>
                          <div class="flex-col flex-1 self-start group_27 view_6">
                            <div class="flex-row justify-center items-baseline relative">
                              <span class="font_9 text_32 pos_2">{{ orders.addrUsername }}</span>
                              <span class="font text_33">{{ orders.addrPhone }}</span>
                            </div>
                            <span class="font_10 mt-1119">{{ orders.addrDesc }}</span>
                          </div>
                        </div>
                        <div class="shrink-0 section_13 view_5"></div>
                        <!--span class="self-start font_11 text_10 text_35">OPERATE</span-->
                        <div>
                          <button class="self-start" @click="handleBothFunctions()" :class="['font_11', 'text_10', 'text_35']">OPERATE</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--<div class="flex-col section_11 view_8">
    <div class="flex-row justify-between items-center section_12">
      <span class="font_3">ORDER NO：E2019110408503481945211</span>
      <span class="font text_27">SUM：￥19.90</span>
    </div>
    <div class="flex-row group_38">
      <img
        class="shrink-0 self-center image_16"
        src="https://ide.code.fun/api/image?token=661e4ef1a17dbc0011546804&name=4a733cbc6d4ae50c537a52549e48d799.png"
      />
      <div class="flex-col shrink-0 self-start group_39">
        <span class="self-stretch font_3">智利进口车厘子巨无霸JJJ级 1磅装 果径约30-32mm</span>
        <span class="mt-34 self-start font_12 text_53">未发货</span>
      </div>
      <div class="flex-col items-end shrink-0 self-start group_40">
        <span class="font text_47">¥169.5</span>
        <span class="mt-20 font text_51">x1</span>
      </div>
      <div class="shrink-0 section_13 view_9"></div>
      <span class="shrink-0 self-start font_9 text_48">果牛群-test</span>
      <div class="shrink-0 section_13 view_10"></div>
      <div class="flex-col shrink-0 self-start group_41">
        <div class="flex-row items-baseline">
          <span class="font_9 text_49">赵伯颜</span>
          <span class="font text_50 ml-11">13455578676</span>
        </div>
        <span class="font_10 mt-1121">浙江省杭州市余杭区博园路8号</span>
      </div>
      <div class="shrink-0 section_13"></div>
      <span class="shrink-0 self-start font_11 text_10 text_52">OPERATE</span>
    </div>
  </div>-->
              <!--div class="flex-col section_11">
              <div class="flex-row justify-between items-center section_12">
                <span class="font_3">ORDER NO：E2019110408503481945211</span>
                <span class="font text_27 text_40">SUM：￥19.90</span>
              </div>
              <div class="flex-row items-center group_27">
                <img
                  class="shrink-0 image_16"
                  src="https://ide.code.fun/api/image?token=661a9354955475001195b21f&name=4a733cbc6d4ae50c537a52549e48d799.png"
                />
                <div class="flex-row form-item ml-13">
                  <div class="flex-col shrink-0 self-start group_35">
                    <span class="self-stretch font_3">智利进口车厘子巨无霸JJJ级 1磅装 果径约30-32mm</span>
                    <span class="mt-34 self-start font_12 text_36">待发货</span>
                  </div>
                  <div class="flex-col items-end shrink-0 self-start group_36">
                    <span class="font text_30">¥492.0</span>
                    <span class="mt-20 font text_34">x1</span>
                  </div>
                  <div class="shrink-0 section_13 view_7"></div>
                  <span class="shrink-0 self-start font_9 text_41">果牛群-test</span>
                  <div class="flex-col justify-start shrink-0 relative group_33">
                    <div class="flex-col select_2">
                      <div class="flex-row items-baseline">
                        <span class="font_9 text_42">赵伯颜</span>
                        <span class="font text_43 ml-9">13455578676</span>
                      </div>
                      <div class="flex-row mt-19">
                        <span class="shrink-0 self-center font_10">浙江省杭州市余杭区博园路8号</span>
                        <span class="font_11 text_10 ml-73">OPERATE</span>
                      </div>
                    </div>
                    <div class="section_14 pos_3"></div>
                  </div>
                </div>
              </div>
            </div-->
              <!--<div class="flex-col section_11 view_8">
              <div class="flex-row justify-between items-center section_12">
                <span class="font_3">ORDER NO：E2019110408503481945200</span>
                <span class="font text_27">SUM：￥19.90</span>
              </div>
              <div class="flex-row group_38">
                <img
                  class="shrink-0 self-center image_16"
                  src="https://ide.code.fun/api/image?token=661e4ef1a17dbc0011546804&name=50888b1d59c082c099d528a9678d3802.png"
                />
                <div class="flex-col shrink-0 self-start group_39">
                  <span class="self-stretch font_3">
                    农夫山泉 17.5°橙 赣南脐橙 5kg装 铂金果 新鲜橙子 生鲜自营水果礼盒
                  </span>
                  <span class="mt-34 self-start font_12 text_53">已发货</span>
                </div>
                <div class="flex-col items-end shrink-0 self-start group_40">
                  <span class="font text_47">¥169.5</span>
                  <span class="mt-20 font text_51">x1</span>
                </div>
                <div class="shrink-0 section_13 view_9"></div>
                <span class="shrink-0 self-start font_9 text_48">果牛群-test</span>
                <div class="shrink-0 section_13 view_10"></div>
                <div class="flex-col shrink-0 self-start group_41">
                  <div class="flex-row items-baseline">
                    <span class="font_9 text_49">赵伯颜</span>
                    <span class="font text_50 ml-11">13455578676</span>
                  </div>
                  <span class="font_10 mt-1120">浙江省杭州市余杭区博园路8号</span>
                </div>
                <div class="shrink-0 section_13"></div>
                <span class="shrink-0 self-start font_11 text_10 text_52">OPERATE</span>
              </div>
            </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script setup> 
import { useRouter } from 'vue-router';  
import { ref, computed, onMounted } from 'vue';  
// 假设 getOrderDetails 和 Deliver 是从其他模块导入的函数  
import { getOrderDetails } from '@/components/orders/index'; // 替换为实际的导入路径 
import { Deliver } from '@/deliver/fahuo/index';
  
// 响应式数据 
const router = useRouter(); 
const orders = ref({});  
const ordersDetail = ref({});  
const orderId = ref('');
const inputText_1 = ref('');  
const inputText_2 = ref('');  
const inputText_3 = ref('');  
const currentShipmentStatus = ref('have not delivered');  
const showOptions = ref(false);  
const selectedOption = ref('');  
const options = ref([  
  { text: '选项1', value: 'option1' },  
  { text: '选项2', value: 'option2' },  
  { text: '选项3', value: 'option3' },  
  // ... 其他选项  
]);  
  
// 计算属性  
const shipmentStatusClass = computed(() => {  
  switch (currentShipmentStatus.value) {  
    case 'have not delivered':  
      return 'some-unshipped-class'; // 替换为实际的未发货状态样式类名  
    case 'have delivered':  
      return 'some-shipped-class'; // 替换为实际的已发货状态样式类名  
    default:  
      return '';  
  }  
});  
const handleClick = () => {  
  router.push({ path:'/goods'});  
}; 
// 组件挂载时调用  
onMounted(() => {  
  getInfo();  
});  
  
// 获取订单详情的方法  
const getInfo = async () => {  
  try {  
    const res = await getOrderDetails();
    orders.value = res.data[0];
    // console.log(res);
    // const orderId = res.data[0].id;
    // console.log(orderId);
    ordersDetail.value = orders.value.content[0];
  } catch (error) {  
    console.error('获取订单详情失败:', error);  
  }  
};  
  
// 处理两个功能的异步方法  
const handleBothFunctions = async () => {
  try {  
    const deliveryResult = await Deliver(orders.value.id);
    console.log('发货结果:', deliveryResult);  
    alert('have delivered');  
    // 根据deliveryResult更新UI或执行其他操作  
  } catch (error) {  
    console.error('发货失败:', error);  
    // 显示错误给用户  
  } finally {  
    // 无论Deliver函数成功还是失败，都切换发货状态  
    toggleShipmentStatus();  
  }  
};  
  
// 切换发货状态的方法  
const toggleShipmentStatus = () => {  
  const currentIndex = ['have not delivered', 'have delivered'].indexOf(currentShipmentStatus.value);  
  const nextIndex = (currentIndex + 1) % 2;  
  currentShipmentStatus.value = ['have not delivered', 'have delivered'][nextIndex];  
};  
const selectOption = (optionText) => {  
  selectedOption.value = optionText;  
};  
</script>
  
  
  <style scoped>
  .image-wrapper_4 {
    position: relative;
    /* 使选项列表可以相对于此容器定位 */
    /* 保留您原有的样式 */
    
    padding: 0.92rem 0 0.77rem;
    background-color: #ffffff;
    border-radius: 0.13rem;
    width: 15rem;
    height: 2.13rem;
    border: solid 0.063rem #a1a7b3;
    /* 简写四个方向的边框 */
  }
  
  .image_10 {
    /* 保留您原有的样式 */
    transform: translateX(0.2rem);
    width: 0.56rem;
    height: 0.31rem;
    cursor: pointer;
    /* 使图片在鼠标悬停时显示可点击状态 */
    margin-right: 0.75rem;
  }
  
  .options-container {
    position: absolute;
    /* 绝对定位选项列表 */
    bottom: 0;
    /* 选项列表紧贴图片下方 */
    left: 0;
    width: 100%;
    /* 宽度与图片容器一致 */
    background-color: rgba(255, 255, 255, 0.9);
    /* 半透明背景 */
    border-radius: 0.13rem;
    /* 保持与图片容器相同的圆角 */
    overflow: auto;
    /* 如果选项过多，允许滚动 */
    padding: 0.2rem;
    /* 内边距 */
    box-sizing: border-box;
    /* 确保宽度和高度包括内边距和边框 */
    z-index: 1;
    /* 确保选项列表在图片之上 */
  }
  
  .option {
    /* 每个选项的样式，您可以根据需要调整 */
    padding: 0.1rem 0.3rem;
    cursor: pointer;
    border-radius: 0.05rem;
    margin-bottom: 0.1rem;
    /* 选项之间的间距 */
    background-color: #f0f0f0;
    /* 背景色 */
  }
  
  .option:hover {
    background-color: #e0e0e0;
    /* 鼠标悬停时的背景色 */
  }
  
  .selected-option-display {
    /* 选中的内容显示样式，您可以根据需要调整 */
    margin-top: 0.2rem;
    /* 距离图片一定距离 */
    text-align: center;
    /* 文本居中对齐 */
    margin-top: -2rem;
  }
  
  .ml-57 {
    margin-left: 3.56rem;
  }
  
  .ml-3 {
    margin-left: 0.19rem;
  }
  
  .ml-134 {
    margin-left: 10rem;
  }
  
  .ml-196 {
    margin-left: 12.25rem;
  }
  
  .ml-95 {
    margin-left: 5.94rem;
  }
  
  .mt-21 {
    margin-top: 1.31rem;
  }
  
  .text_1001 {
    margin-left: -2.8rem;
  }
  
  .ml-15 {
    margin-left: 0.94rem;
  }
  
  .ml-67 {
    margin-left: 4.19rem;
  }
  
  .ml-27 {
    margin-left: 1.69rem;
  }
  
  .ml-7 {
    margin-left: 0.44rem;
  }
  
  .ml-99 {
    margin-left: 7rem;
  }
  
  .ml-137 {
    margin-left: 8.56rem;
  }
  
  .mt-15 {
    margin-top: 0.94rem;
  }
  
  .ml-13 {
    margin-left: 0.81rem;
  }
  
  .mt-19 {
    margin-top: 1.19rem;
    margin-left: -11.2rem;
    margin-right: 11.2rem;
  }
  
  .mt-1119 {
    margin-top: 1.19rem;
  }
  
  .mt-1120 {
    margin-top: 1.19rem;
  }
  
  .mt-1121 {
    margin-top: 1.19rem;
  }
  
  .ml-17 {
    margin-left: 1.06rem;
  }
  
  .ml-9 {
    margin-left: 0.56rem;
  }
  
  .ml-73 {
    margin-left: 12rem;
  }
  
  .ml-11 {
    margin-left: 0.69rem;
  }
  
  .page {
    padding: 1.38rem 0.94rem 5.94rem;
    background-color: #cfc0c0d9;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  
  .group {
    padding: 0 0.63rem;
  }
  
  .image_2 {
    width: 0.63rem;
    height: 0.31rem;
  }
  
  .section {
    background-color: #d8d8d8;
    width: 0.063rem;
    height: 0.79rem;
  }
  
  .image {
    width: 0.88rem;
    height: 0.86rem;
  }
  
  .group_2 {
    margin-top: 2.63rem;
    padding: 0 2.88rem;
  }
  
  .group_3 {
    padding: 0.75rem 0;
    width: 11.99rem;
  }
  
  .image_4 {
    margin-left: 11.36125rem;
    width: 11.88rem;
    height: 1.81rem;
  }
  
  .image_3 {
    width: 4.5rem;
    height: 3.38rem;
  }
  
  .pos {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  
  .section_2 {
    padding: 1rem 1rem 1rem 2.5rem;
    background-color: #FFFFFF;
    height: 4.15rem;
  }
  
  .image_5 {
    width: 19.44rem;
    height: 1.13rem;
    margin-top: 0.75rem;
  }
  
  .image_6 {
    width: 2.13rem;
    height: 2.13rem;
  }
  
  .group_4 {
    margin-top: 4.63rem;
  }
  
  .section_3 {
    padding: 2.38rem 1.25rem 11.38rem;
    background-color: #ffffff;
    width: 13.75rem;
    height: 71rem;
  }
  
  .image_7 {
    width: 1.13rem;
    height: 1rem;
  }
  
  .group_9 {
    margin-top: 2.25rem;
  }
  
  .image_9 {
    border-radius: 50%;
    width: 1.09rem;
    height: 1.09rem;
  }
  
  .text_6 {
    color: #2e3033;
    font-size: 1rem;
    font-family: AlibabaPuHuiTi;
    line-height: 0.75rem;
  }
  
  .group_13 {
    margin-top: 2.63rem;
  }
  
  .image_11 {
    border-radius: 0.063rem;
    width: 1rem;
    height: 1.13rem;
  }
  
  .group_16 {
    margin-top: 2.13rem;
  }
  
  .image_14 {
    width: 1rem;
    height: 1rem;
  }
  
  .font_6 {
    font-size: 0.88rem;
    font-family: Inter;
    line-height: 0.65rem;
    color: #1a66ff;
  }
  
  .text_16 {
    margin-left: 1.88rem;
    margin-top: 1.5rem;
    line-height: 0.65rem;
  }
  
  .group_20 {
    margin-top: 1.5rem;
  }
  
  .image_15 {
    width: 1rem;
    height: 1.13rem;
  }
  
  .group_21 {
    margin-top: 10rem;
    width: 5.65rem;
  }
  
  .font_7 {
    font-size: 0.88rem;
    font-family: Inter;
    line-height: 1.06rem;
    color: #737780;
    margin-top: -9rem;
  }
  
  .text_18 {
    width: 4.93rem;
    margin-left: -0.9rem;
  }
  
  .group_25 {
    margin-top: 2.75rem;
  }
  
  .font_2 {
    font-size: 1rem;
    font-family: Inter;
    line-height: 0.75rem;
    color: #2e3033;
    margin-top: 0rem;
  }
  
  .text_13 {
    color: #1a66ff;
  }
  
  .text_8 {
    line-height: 0.75rem;
  }
  
  .text_4 {
    line-height: 0.75rem;
  }
  
  .font_4 {
    font-size: 0.88rem;
    font-family: Inter;
    line-height: 0.65rem;
    color: #737780;
    margin-left: -0.3rem;
  }
  
  .text_1000 {
    margin-left: -1.6rem;
  }
  
  .text_15 {
    margin-left: -1.2rem;
    margin-top: 1.5rem;
  }
  
  .text_11 {
    line-height: 0.66rem;
    margin-left: -1.8rem;
  }
  
  .group_26 {
    margin-top: 2.75rem;
  }
  
  .text_28 {
    line-height: 0.73rem;
  }
  
  .group_31 {
    margin-top: 2.88rem;
  }
  
  .group_32 {
    margin-top: 1.5rem;
  }
  
  .image_8 {
    width: 0.44rem;
    height: 0.75rem;
  }
  
  .group_34 {
    margin-top: 2.5rem;
  }
  
  .group_37 {
    padding-left: 1.88rem;
    padding-right: 1.25rem;
  }
  
  .font_8 {
    font-size: 0.88rem;
    font-family: Inter;
    line-height: 0.65rem;
    color: #737880;
    margin-top: -9rem;
  }
  
  .text_44 {
    line-height: 0.64rem;
  }
  
  .text_38 {
    margin-top: 0.75rem;
    line-height: 0.66rem;
    margin-left: -1.3rem;
  }
  
  .text_37 {
    margin-left: 1.88rem;
    margin-top: 1.25rem;
    line-height: 0.66rem;
  }
  
  .text_29 {
    margin-left: 1.88rem;
    line-height: 0.66rem;
  }
  
  .text_45 {
    margin-left: 1.88rem;
    line-height: 0.66rem;
  }
  
  .text_46 {
    margin-left: 1.85rem;
    line-height: 0.66rem;
  }
  
  .group_5 {
    margin-right: 1.13rem;
  }
  
  .section_4 {
    padding: 1.38rem 1.25rem;
    background-color: #ffffff;
  }
  
  .text_3 {
    color: #2e3033;
    font-size: 1.13rem;
    font-family: Inter;
    line-height: 1.38rem;
    width: 13.31rem;
  }
  
  .group_6 {
    margin-top: 1.25rem;
  }
  
  .font_3 {
    font-size: 0.88rem;
    font-family: Inter;
    line-height: 1.06rem;
    color: #2e3033;
  
  }
  
  .text_5 {
    width: 5.51rem;
  }
  
  .section_5 {
    background-color: #ffffff;
    border-radius: 0.13rem;
    width: 15rem;
    height: 2.25rem;
    border-left: solid 0.063rem #a1a7b3;
    border-right: solid 0.063rem #a1a7b3;
    border-top: solid 0.063rem #a1a7b3;
    border-bottom: solid 0.063rem #a1a7b3;
    margin-left: 1.41rem;
    border: solid 0.063rem #a1a7b3;
    /* 简化边框设置 */
    display: flex;
    /* 添加弹性布局来正确显示输入框 */
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    padding: 0.25rem;
    /* 添加内边距以改善输入框的外观 */
  }
  
  .section_555 {
    background-color: #ffffff;
    border-radius: 0.13rem;
    width: 15rem;
    height: 2.25rem;
    border-left: solid 0.063rem #a1a7b3;
    border-right: solid 0.063rem #a1a7b3;
    border-top: solid 0.063rem #a1a7b3;
    border-bottom: solid 0.063rem #a1a7b3;
    margin-left: 1rem;
    border: solid 0.063rem #a1a7b3;
    /* 简化边框设置 */
    display: flex;
    /* 添加弹性布局来正确显示输入框 */
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    padding: 0.25rem;
    /* 添加内边距以改善输入框的外观 */
  }
  
  .section_1001 {
    background-color: #ffffff;
    border-radius: 0.13rem;
    width: 15rem;
    height: 2.25rem;
    border-left: solid 0.063rem #a1a7b3;
    border-right: solid 0.063rem #a1a7b3;
    border-top: solid 0.063rem #a1a7b3;
    border-bottom: solid 0.063rem #a1a7b3;
    margin-right: 7rem;
    border: solid 0.063rem #a1a7b3;
    /* 简化边框设置 */
    display: flex;
    /* 添加弹性布局来正确显示输入框 */
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    padding: 0.25rem;
    /* 添加内边距以改善输入框的外观 */
  }
  
  .input-text {
    border: none;
    /* 移除输入框的默认边框 */
    outline: none;
    /* 移除输入框的默认轮廓 */
    background-color: transparent;
    /* 设置输入框背景为透明 */
    width: 100%;
    /* 设置输入框宽度为100%以填充其父元素 */
  }
  
  .group_7 {
    margin-right: 4rem;
  }
  
  .group_8 {
    margin-top: 0.13rem;
    margin-left: 0.5rem;
  }
  
  .group_10 {
    padding: 0 0.13rem;
  }
  
  .view {
    margin-top: 1.25rem;
  }
  
  .group_12 {
    margin-top: -1rem;
    margin-left: -1rem;
  }
  
  .text_7 {
    margin-top: 0.23rem;
    text-align: left;
    width: 5.51rem;
    margin-top: 1.8rem;
    margin-left: 1rem;
  }
  
  .section_6 {
    padding: 0.5rem 0.75rem;
    background-color: #ffffff;
    border-radius: 0.13rem;
    height: 2.25rem;
    border-left: solid 0.063rem #a1a7b3;
    border-right: solid 0.063rem #a1a7b3;
    border-top: solid 0.063rem #a1a7b3;
    border-bottom: solid 0.063rem #a1a7b3;
    margin-right: 28rem;
    margin-top: 1.8rem;
  }
  
  .image_12 {
    width: 1.13rem;
    height: 1.13rem;
  }
  
  .section_7 {
    background-color: #2e3033;
    width: 0.63rem;
    height: 0.063rem;
    margin-left: -10rem;
    margin-right: 7.7rem;
    margin-top: 1.8rem;
  
  }
  
  .image-wrapper_2 {
    padding: 0.5rem 0;
    background-color: #ffffff;
    border-radius: 0.13rem;
    width: 11.88rem;
    height: 2.25rem;
    border-left: solid 0.063rem #a1a7b3;
    border-right: solid 0.063rem #a1a7b3;
    border-top: solid 0.063rem #a1a7b3;
    border-bottom: solid 0.063rem #a1a7b3;
  }
  
  .image_13 {
    margin-right: 0.75rem;
  }
  
  .group_11 {
    margin-right: 3.88rem;
  }
  
  .view_2 {
    margin-top: 0.25rem;
  }
  
  .group_15 {
    margin-top: 0.13rem;
  }
  
  .text_12 {
    text-indent: 0rem;
  }
  
  .image-wrapper {
    padding: 0.88rem 0;
    background-color: #ffffff;
    border-radius: 0.13rem;
    width: 15rem;
    height: 2.25rem;
    border-left: solid 0.063rem #a1a7b3;
    border-right: solid 0.063rem #a1a7b3;
    border-top: solid 0.063rem #a1a7b3;
    border-bottom: solid 0.063rem #a1a7b3;
    margin-right: 0.5rem;
  }
  
  .image-wrapper_1002 {
    padding: 0.88rem 0;
    background-color: #ffffff;
    border-radius: 0.13rem;
    width: 15rem;
    height: 2.25rem;
    border-left: solid 0.063rem #a1a7b3;
    border-right: solid 0.063rem #a1a7b3;
    border-top: solid 0.063rem #a1a7b3;
    border-bottom: solid 0.063rem #a1a7b3;
    margin-right: 7rem;
  }
  
  .group_14 {
    margin-top: 0.13rem;
    margin-left: -11.2rem;
    margin-right: 0.3rem;
  }
  
  .text-wrapper {
    padding: 0.63rem 0 0.38rem;
    background-color: #ffffff;
    border-radius: 0.13rem;
    width: 7.5rem;
    height: 2.25rem;
    border-left: solid 0.063rem #a1a7b3;
    border-right: solid 0.063rem #a1a7b3;
    border-top: solid 0.063rem #a1a7b3;
    border-bottom: solid 0.063rem #a1a7b3;
    margin-right: 13.4rem;
  }
  
  .text-wrapper_1 {
    padding: 0.63rem 0 0.38rem;
    background-color: #ffffff;
    border-radius: 0.13rem;
    width: 7.5rem;
    height: 2.25rem;
    border-left: solid 0.063rem #a1a7b3;
    border-right: solid 0.063rem #a1a7b3;
    border-top: solid 0.063rem #a1a7b3;
    border-bottom: solid 0.063rem #a1a7b3;
    margin-left: -12.5rem;
  }
  
  .font_5 {
    font-size: 0.88rem;
    font-family: Inter;
    line-height: 1.06rem;
    color: #a1a7b3;
  }
  
  .view_3 {
    margin-right: 2rem;
  }
  
  .image-wrapper_3 {
    padding: 0.88rem 0;
    background-color: #ffffff;
    border-radius: 0.13rem;
    width: 11.25rem;
    height: 2.25rem;
    border-left: solid 0.063rem #a1a7b3;
    border-right: solid 0.063rem #a1a7b3;
    border-top: solid 0.063rem #a1a7b3;
    border-bottom: solid 0.063rem #a1a7b3;
    margin-left: 0rem;
    margin-right: 2rem;
  }
  
  .group_17 {
    margin-top: 0.5rem;
  }
  
  .text_14 {
    margin-top: 0.13rem;
    width: 6.44rem;
  }
  
  .image-wrapper_4 {
    padding: 0.88rem 0 0.75rem;
    background-color: #ffffff;
    border-radius: 0.13rem;
    width: 15rem;
    height: 2.25rem;
    border-left: solid 0.063rem #a1a7b3;
    border-right: solid 0.063rem #a1a7b3;
    border-top: solid 0.063rem #a1a7b3;
    border-bottom: solid 0.063rem #a1a7b3;
    margin-left: 0.37rem;
  }
  
  .group_18 {
    margin-right: 11rem;
    margin-top: 0.5rem;
  }
  
  .group_19 {
    margin-top: 1rem;
  }
  
  .text-wrapper_2 {
    padding: 0.75rem 0;
    background-color: #1a66ff;
    border-radius: 0.13rem;
    width: 6rem;
    height: 2.25rem;
    display: flex;
    /* 确保子元素垂直居中 */
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    cursor: pointer;
    /* 鼠标悬停时变为小手形状，表示可点击 */
    transition: background-color 0.3s ease;
    /* 添加过渡效果 */
  }
  
  .text-wrapper_2:hover {
    background-color: #1558e2;
    /* 鼠标悬停时改变背景色 */
  }
  
  .text-wrapper_2:active {
    background-color: #104ac8;
    /* 点击时改变背景色 */
  }
  
  .text-wrapper_3 {
    padding: 0.75rem 0;
    background-color: #ffffff;
    border-radius: 0.13rem;
    width: 7.25rem;
    height: 2.25rem;
    border-left: solid 0.063rem #dcdce0;
    border-right: solid 0.063rem #dcdce0;
    border-top: solid 0.063rem #dcdce0;
    border-bottom: solid 0.063rem #dcdce0;
  }
  
  .font {
    font-size: 0.88rem;
    font-family: Inter;
    line-height: 0.65rem;
    color: #2e3033;
  }
  
  .text_17 {
    color: #ffffff;
    line-height: 0.64rem;
  }
  
  .text_9 {
    line-height: 0.66rem;
  }
  
  .text_2 {
    line-height: 0.64rem;
  }
  
  .text {
    line-height: 0.65rem;
  }
  
  .section_8 {
    padding-left: 1.25rem;
    background-color: #ffffff;
  }
  
  .group_22 {
    margin-left: 2.38rem;
    padding: 1.25rem 0 0.63rem;
  }
  
  .text_19 {
    line-height: 0.64rem;
  }
  
  .text_20 {
    margin-left: 1.25rem;
  }
  
  .text_21 {
    margin-left: 0.38rem;
    line-height: 0.66rem;
  }
  
  .text_22 {
    margin-left: 0.63rem;
    line-height: 0.66rem;
  }
  
  .text_23 {
    margin-left: 0.75rem;
  }
  
  .text_24 {
    margin-left: 0.63rem;
    line-height: 0.64rem;
  }
  
  .divider {
    background-color: #ebeced;
    width: 75rem;
  }
  
  .section_9 {
    margin-left: 1.25rem;
    background-color: #1a66ff;
    width: 3.5rem;
    height: 0.13rem;
  }
  
  .group_23 {
    margin-right: 1rem;
    padding-bottom: 2rem;
  }
  
  .group_24 {
    padding: 1rem 0 1.75rem;
  }
  
  .section_10 {
    padding: 1rem 2rem 1rem 12.75rem;
    background-color: #f0f1f2;
    border-radius: 0.13rem;
  }
  
  .text_26 {
    line-height: 0.66rem;
    margin-left: -37.5rem;
    margin-right: 6rem;
  }
  
  .date-picker {
    line-height: 0.66rem;
  }
  
  .section_11 {
    background-color: #ffffff;
    border-left: solid 0.063rem #e1e2e6;
    border-right: solid 0.063rem #e1e2e6;
    border-top: solid 0.063rem #e1e2e6;
    border-bottom: solid 0.063rem #e1e2e6;
  }
  
  .section_12 {
    padding: 0.75rem 1.25rem;
    background-color: #f7f9fc;
  }
  
  .text_27 {
    margin-right: 0.38rem;
    line-height: 0.66rem;
  }
  
  .group_27 {
    padding: 0 1.25rem;
  }
  
  .image_16 {
    width: 6.25rem;
    height: 6.25rem;
  }
  
  .form-item {
    flex: 1 1 0;
    margin-right: 1.63rem;
  }
  
  .group_29 {
    margin-top: 1.38rem;
    width: 14.56rem;
  }
  
  .font_12 {
    font-size: 0.88rem;
    font-family: Inter;
    line-height: 0.75rem;
    color: #ff3333;
  }
  
  .text_36 {
    line-height: 0.81rem;
  }
  
  .group_30 {
    margin-left: 2.13rem;
    margin-top: 1.5rem;
  }
  
  .text_30 {
    line-height: 0.66rem;
  }
  
  .text_34 {
    line-height: 0.64rem;
  }
  
  .select {
    flex: 1 1 0;
    margin-left: 1.13rem;
  }
  
  .group_28 {
    padding-left: 1.38rem;
    border-left: solid 0.063rem #e6e7eb;
  }
  
  .font_9 {
    font-size: 0.88rem;
    font-family: Inter;
    line-height: 0.75rem;
    color: #2e3033;
  }
  
  .text_31 {
    margin-top: 3rem;
    line-height: 0.81rem;
  }
  
  .section_13 {
    background-color: #e6e7eb;
    width: 0.063rem;
    height: 8.69rem;
    margin-left: 7rem;
  }
  
  .view_4 {
    margin-left: 1.25rem;
  }
  
  .view_6 {
    margin-top: 1.38rem;
    padding-left: 8rem;
    padding-top: 0.5rem;
  }
  
  .text_32 {
    line-height: 0.81rem;
  }
  
  .pos_2 {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .text_33 {
    line-height: 0.66rem;
    margin-left: -5rem;
  }
  
  .font_10 {
    font-size: 0.88rem;
    font-family: Inter;
    line-height: 0.82rem;
    color: #2e3033;
  }
  
  .view_5 {
    margin-left: 0.63rem;
  }
  
  .font_11 {
    font-size: 0.88rem;
    font-family: Inter;
    line-height: 1.06rem;
    color: #1a66ff;
  }
  
  .text_10 {
    margin-left: -0.9rem;
  }
  
  .text_25 {
    margin-left: 0.63rem;
    color: #737880;
    text-align: center;
  }
  
  .text_39 {
    line-height: 1.19rem;
    margin-left: 0.76rem;
  }
  
  .text_35 {
    margin-left: 2.63rem;
    margin-top: 3.38rem;
  }
  
  .text_40 {
    margin-right: 0.25rem;
  }
  
  .group_35 {
    margin-top: 1.25rem;
    width: 13.82rem;
  }
  
  .group_36 {
    margin-left: 2.75rem;
    margin-top: 1.38rem;
  }
  
  .view_7 {
    margin-left: 1.13rem;
  }
  
  .text_41 {
    margin-left: 1.25rem;
    margin-top: 3rem;
    line-height: 0.81rem;
  }
  
  .group_33 {
    margin-left: 1.25rem;
    padding: 1.38rem 0 4.25rem;
    width: 21.13rem;
    border-left: solid 0.063rem #e6e7eb;
  }
  
  .select_2 {
    margin-left: 8rem;
  }
  
  .text_42 {
    line-height: 0.81rem;
  }
  
  .text_43 {
    line-height: 0.66rem;
  }
  
  .section_14 {
    background-color: #e6e7eb;
    height: 8.69rem;
    margin-left: 0rem;
  }
  
  .pos_3 {
    position: absolute;
    left: 15.56rem;
    right: 5.44rem;
    top: 0;
  }
  
  .view_8 {
    margin-top: 1.75rem;
  }
  
  .group_38 {
    margin-left: 1.13rem;
    margin-right: 2.75rem;
  }
  
  .group_39 {
    margin-left: 0.75rem;
    margin-top: 1.25rem;
    width: 14.5rem;
  }
  
  .text_53 {
    line-height: 0.81rem;
  }
  
  .group_40 {
    margin-left: 2.25rem;
    margin-top: 1.38rem;
  }
  
  .text_47 {
    line-height: 0.66rem;
  }
  
  .text_51 {
    line-height: 0.64rem;
  }
  
  .view_9 {
    margin-left: 1.13rem;
  }
  
  .text_48 {
    margin-left: 1.25rem;
    margin-top: 3rem;
    line-height: 0.81rem;
  }
  
  .view_10 {
    margin-left: 1.25rem;
  }
  
  .group_41 {
    margin-top: 1.32rem;
    margin-left: 7rem;
    padding-left: 1.27rem;
    padding-right: 1.27rem;
    padding-top: 0.8rem;
    width: 15.5rem;
  }
  
  .text_49 {
    line-height: 0.81rem;
  }
  
  .text_50 {
    line-height: 0.66rem;
  }
  
  .text_52 {
    margin-left: 2.63rem;
    margin-top: 3.38rem;
  }
  html {
  font-size: 16px;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', 'Microsoft Yahei', sans-serif;
}

body * {
  box-sizing: border-box;
  flex-shrink: 0;
}

#app {
  width: 100vw;
  height: 100vh;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-around {
  justify-content: space-around;
}

.justify-evenly {
  justify-content: space-evenly;
}

.items-start {
  align-items: flex-start;
}

.items-end {
  align-items: flex-end;
}

.items-center {
  align-items: center;
}

.items-baseline {
  align-items: baseline;
}

.items-stretch {
  align-items: stretch;
}

.self-start {
  align-self: flex-start;
}

.self-end {
  align-self: flex-end;
}

.self-center {
  align-self: center;
}

.self-baseline {
  align-self: baseline;
}

.self-stretch {
  align-self: stretch;
}

.flex-1 {
  flex: 1 1 0%;
}

.flex-auto {
  flex: 1 1 auto;
}

.grow {
  flex-grow: 1;
}

.grow-0 {
  flex-grow: 0;
}

.shrink {
  flex-shrink: 1;
}

.shrink-0 {
  flex-shrink: 0;
}

.relative {
  position: relative;
}

.ml-2 {
  margin-left: 0.13rem;
}

.mt-2 {
  margin-top: 0.13rem;
}

.ml-4 {
  margin-left: 0.25rem;
}

.mt-4 {
  margin-top: 0.25rem;
}

.ml-6 {
  margin-left: 0.38rem;
}

.mt-6 {
  margin-top: 0.7rem;
}

.ml-8 {
  margin-left: 0.5rem;
}

.mt-8 {
  margin-top: 0.5rem;
}

.ml-10 {
  margin-left: 0.63rem;
}

.mt-10 {
  margin-top: 0.63rem;
}

.ml-12 {
  margin-left: 0.75rem;
}

.mt-12 {
  margin-top: 0.75rem;
}

.ml-14 {
  margin-left: 0.88rem;
}

.mt-14 {
  margin-top: 0.88rem;
}

.ml-16 {
  margin-left: 1rem;
}

.mt-16 {
  margin-top: 1rem;
}

.ml-18 {
  margin-left: 1.13rem;
}

.mt-18 {
  margin-top: 1.13rem;
}

.ml-20 {
  margin-left: 1.25rem;
}

.mt-20 {
  margin-top: 1.25rem;
}

.ml-22 {
  margin-left: 1.38rem;
}

.mt-22 {
  margin-top: 1.38rem;
}

.ml-24 {
  margin-left: 1.5rem;
}

.mt-24 {
  margin-top: 1.5rem;
}

.ml-26 {
  margin-left: 1.63rem;
}

.mt-26 {
  margin-top: 1.63rem;
}

.ml-28 {
  margin-left: 1.75rem;
}

.mt-28 {
  margin-top: 1.75rem;
}

.ml-30 {
  margin-left: 1.88rem;
}

.mt-30 {
  margin-top: 1.88rem;
}

.ml-32 {
  margin-left: 2rem;
}

.mt-32 {
  margin-top: 2rem;
}

.ml-34 {
  margin-left: 2.13rem;
}

.mt-34 {
  margin-top: 2.13rem;
}

.ml-36 {
  margin-left: 2.25rem;
}

.mt-36 {
  margin-top: 2.25rem;
}

.ml-38 {
  margin-left: 2.38rem;
}

.mt-38 {
  margin-top: 2.38rem;
}

.ml-40 {
  margin-left: 2.5rem;
}

.mt-40 {
  margin-top: 2.5rem;
}

.ml-42 {
  margin-left: 2.63rem;
}

.mt-42 {
  margin-top: 2.63rem;
}

.ml-44 {
  margin-left: 2.75rem;
}

.mt-44 {
  margin-top: 2.75rem;
}

.ml-46 {
  margin-left: 2.88rem;
}

.mt-46 {
  margin-top: 2.88rem;
}

.ml-48 {
  margin-left: 3rem;
}

.mt-48 {
  margin-top: 3rem;
}

.ml-50 {
  margin-left: 3.13rem;
}

.mt-50 {
  margin-top: 3.13rem;
}

.ml-52 {
  margin-left: 3.25rem;
}

.mt-52 {
  margin-top: 3.25rem;
}

.ml-54 {
  margin-left: 3.38rem;
}

.mt-54 {
  margin-top: 3.38rem;
}

.ml-56 {
  margin-left: 3.5rem;
}

.mt-56 {
  margin-top: 3.5rem;
}

.ml-58 {
  margin-left: 3.63rem;
}

.mt-58 {
  margin-top: 3.63rem;
}

.ml-60 {
  margin-left: 3.75rem;
}

.mt-60 {
  margin-top: 3.75rem;
}

.ml-62 {
  margin-left: 3.88rem;
}

.mt-62 {
  margin-top: 3.88rem;
}

.ml-64 {
  margin-left: 4rem;
}

.mt-64 {
  margin-top: 4rem;
}

.ml-66 {
  margin-left: 4.13rem;
}

.mt-66 {
  margin-top: 4.13rem;
}

.ml-68 {
  margin-left: 4.25rem;
}

.mt-68 {
  margin-top: 4.25rem;
}

.ml-70 {
  margin-left: 4.38rem;
}

.mt-70 {
  margin-top: 4.38rem;
}

.ml-72 {
  margin-left: 4.5rem;
}

.mt-72 {
  margin-top: 4.5rem;
}

.ml-74 {
  margin-left: 4.63rem;
}

.mt-74 {
  margin-top: 4.63rem;
}

.ml-76 {
  margin-left: 4.75rem;
}

.mt-76 {
  margin-top: 4.75rem;
}

.ml-78 {
  margin-left: 4.88rem;
}

.mt-78 {
  margin-top: 4.88rem;
}

.ml-80 {
  margin-left: 5rem;
}

.mt-80 {
  margin-top: 5rem;
}

.ml-82 {
  margin-left: 5.13rem;
}

.mt-82 {
  margin-top: 5.13rem;
}

.ml-84 {
  margin-left: 5.25rem;
}

.mt-84 {
  margin-top: 5.25rem;
}

.ml-86 {
  margin-left: 5.38rem;
}

.mt-86 {
  margin-top: 5.38rem;
}

.ml-88 {
  margin-left: 5.5rem;
}

.mt-88 {
  margin-top: 5.5rem;
}

.ml-90 {
  margin-left: 5.63rem;
}

.mt-90 {
  margin-top: 5.63rem;
}

.ml-92 {
  margin-left: 5.75rem;
}

.mt-92 {
  margin-top: 5.75rem;
}

.ml-94 {
  margin-left: 5.88rem;
}

.mt-94 {
  margin-top: 5.88rem;
}

.ml-96 {
  margin-left: 6rem;
}

.mt-96 {
  margin-top: 6rem;
}

.ml-98 {
  margin-left: 6.13rem;
}

.mt-98 {
  margin-top: 6.13rem;
}

.ml-100 {
  margin-left: 6.25rem;
}

.mt-100 {
  margin-top: 6.25rem;
}
  </style>