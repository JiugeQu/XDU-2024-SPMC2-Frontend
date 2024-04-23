<template>
  <div class="flex-col page">
  <div class="flex-row justify-end items-center group">
    <span class="font text">Van</span>
    <div class="flex-row items-center ml-57">
      <img
        class="image_2"
        src="../assets/van.png"
      />
      <div class="ml-20 section"></div>
      <div class="ml-20 flex-row items-center">
        <span class="font text_2">EXIT</span>
        <img
          class="image ml-3"
          src="../assets/exit.png"
        />
      </div>
    </div>
  </div>
  <div class="flex-row items-center group_2">
    <div class="flex-col justify-start items-center relative group_3">
      <img
        class="image_4"
        src="../assets/2.png"
      />
      <img
        class="image_3 pos"
        src="../assets/1.png"
      />
    </div>
    <div class="flex-row section_2 ml-156">
      <img
        class="self-start image_5"
        src="../assets/enter.png"
      />
      <img
        class="self-center image_6 ml-196"
        src="../assets/3.png"
      />
    </div>
  </div>
  <div class="flex-row group_4">
    <div class="flex-col section_3">
      <div class="flex-row items-center self-stretch">
        <div class="flex-row items-center">
          <img
            class="image_7"
            src="../assets/home.png"
          />
          <span class="font_2 ml-13">HOME</span>
        </div>
        <img
          class="image_8 ml-95"
          src="../assets/right.png"
        />
      </div>
      <div class="flex-row items-center self-stretch group_6">
        <div class="flex-row items-center">
          <img
            class="image_11"
            src="../assets/account.png"
          />
          <span class="text_8 ml-11">ACCOUNT</span>
        </div>
        <img
          class="image_8 ml-67"
          src="../assets/right.png"
        />
      </div>
      <!--div class="flex-col self-stretch group_7 view_4">
        <div class="flex-row items-center self-stretch">
          <img
            class="image_13"
            src="../assets/finance.png"
          />
          <span class="font_2 ml-13">FINANCE</span>
        </div>
        <span class="mt-18 self-center font_4 text_13">RECONCILIATIOIN</span>
        <span class="mt-18 self-center font_4">SETTLEMENT</span>
      </div-->
      <div class="flex-col self-start group_8">
        <div class="flex-row items-center self-stretch">
          <img
            class="image_14"
            src="../assets/orders.png"
          />
          <span class="font_5 ml-13">ORDERS</span>
        </div>
        <span class="self-center font_4 text_16">MANAGEMENT</span>
        <span class="self-center font_4 text_17" style="cursor:pointer;" @click="handleClick">RETURN</span>
        <div class="flex-row items-center self-stretch group_9">
          <img
            class="image_15"
            src="../assets/goods.png"
          />
          <span class="font_5 text_18 ml-13">GOODS</span>
        </div>
        <span class="self-center font_6 text_21 text_22">MANAGEMENT</span>
        <a href="/src/AddNew/AddProduct.html" class="self-center font_6 text_23">ADD NEW</a>
      </div>
      <!-- <div class="flex-col self-stretch group_13">
        <div class="flex-row items-center self-stretch">
          <img
            class="image_7"
            src="../assets/shop.png"
          />
          <span class="ml-12 font_5">SHOP</span>
        </div>
        <span class="mt-24 self-center font_4 text_31">RENOVATION</span>
      </div>
      <div class="flex-col self-stretch group_7 view_6">
        <div class="flex-row items-center self-stretch">
          <img
            class="image_14"
            src="../assets/withdrawal.png"
          />
          <span class="font_5 text_34 ml-13">WITHDRAWAL</span>
        </div>
        <span class="self-start font_7 text_35 mt-21">RECORDS</span>
      </div>
      <div class="flex-col self-stretch group_16">
        <div class="flex-row items-center self-stretch">
          <img
            class="image_7"
            src="../assets/coupon.png"
          />
          <span class="ml-12 font_5">COUPON</span>
        </div>
        <span class="self-start font_7 text_40">SETTINGS</span>
        <span class="self-center font_7 text_41">DISTRIBUTION</span>
        <div class="flex-row items-center self-stretch group_17">
          <div class="flex-row items-center">
            <img
              class="image_7"
              src="../assets/fright.png"
            />
            <span class="font_5 text_21 text_43 ml-17">FREIGHT</span>
          </div>
          <img
            class="ml-84 image_8"
            src="../assets/right.png"
          />
        </div>
      </div>
      <div class="flex-col self-stretch group_7 view_8">
        <div class="flex-row items-center self-stretch">
          <img
            class="image_14"
            src="../assets/transaction.png"
          />
          <span class="font_5 ml-13">TRANSACTION</span>
        </div>
        <div class="mt-20 flex-row self-stretch group_19">
          <span class="font_7 text_47">DAILY</span>
          <span class="ml-16 font_7 text_48">MONTHLY</span>
        </div>
        <span class="mt-20 self-start font_7 text_50">USERS</span>
        <span class="mt-20 self-start font_7 text_52">STORE</span>
        <span class="mt-20 self-center font_7 text_53">CATEGORY</span>
      </div>-->
    </div> 
    <div class="ml-12 flex-col flex-1 group_5">
      <div class="flex-col section_4">
        <span class="self-start text_3">MANAGEMENT</span>
        <div class="flex-row items-center self-stretch mt-21">
          <div class="flex-row items-center view">
            <span class="font_3">OPTIONS</span>
            <img
              class="image_9 image_1 ml-144"
              src="../assets/right.png"
            />
          </div>
          <span class="font text_4">CATEGORIES:</span>
          <span class="font text_5">SUBCATEGORIES:</span>
          <div class="flex-row items-center section_6">
            <span class="font_3">OPTIONS</span>
            <img
              class="image_9 image_10 ml-145"
              src="../assets/right.png"
            />
          </div>
          <span class="font text_6">EXPOSURE:</span>
          <div class="flex-row items-center view_2">
            <span class="font_3 text_7">ALL</span>
            <img
              class="image_9 ml-51"
              src="../assets/right.png"
            />
          </div>
        </div>
        <div class="flex-row justify-between self-start group_31 mt-21">
          <div class="flex-row items-center">
            <span class="font text_9">RECOMMEND:</span>
            <div class="flex-row items-center section_5">
              <span class="font_3 text_10">TYPE</span>
            </div>
          </div>
        </div>
        <div class="flex-row items-center self-start group_32 mt-21">
          <span class="font">PRODUCT:</span>
          <div class="flex-col justify-start items-start flex-1 text-wrapper ml-25">
            <span class="font text_14">NAME</span>
          </div>
        </div>
        <div class="flex-row justify-center self-start group_33 mt-21">
          <div class="flex-col justify-start items-center text-wrapper_2">
            <span class="font_5 text_15">SEARCH</span>
          </div>
          <div class="flex-col justify-start items-center text-wrapper_3 ml-9"><span class="font_2">CLEAN</span></div>
          <div class="flex-col justify-start items-center text-wrapper_4 ml-9">
            <span class="font_5">SETTINGS</span>
          </div>
        </div>
      </div>
      
      <div class="mt-34 flex-col section_8">
        <div class="flex-row items-center form-item section_9">
          <span class="font text_19">ALL</span>
        </div>
        <div class="flex-row justify-between items-center self-center group_10">
          <span class="font_7">DESCRIPTION</span>
          <div class="flex-row items-center">
            <div class="flex-row">
              <!--div class="flex-row items-center">
                <span class="font_7 text_24">PRICE</span>
                <span class="font_8 text_25 ml-31">CREATING TIME</span>
              </div-->
            </div>
            <span class="ml-58 font_7 text_1234">OPERATIONS</span>
          </div>
        </div>
        <div class="flex-col self-stretch">
          <div
            class="flex-col justify-start items-start relative list-item"
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="section_11 view_5"></div>
            <div class="flex-col justify-start items-start group_11 pos_2">
              <img
                :src="goods.imgUrl"
                class="image_16 image_20"
              />
              <div class="flex-row justify-between form-item_2 group_12">
                <span class="self-start font_6 text_27">{{ goods.title }}</span>
                <div class="flex-row self-center">
                  <span class="self-start font text_28">¥{{ goods.price }}</span>
                  <span class="self-start font text_29 ml-61">{{ goods.stock }}</span>
                  <span class="self-start font_6 text_30 text_1 ml-61">{{ goods.ctime }}</span>
                  <div class="flex-col items-center select ml-61">

                    <button class="font_9 text_3200 mt-19" @click="handleDelete1()">ON SHELF</button>
                    <button class="font_9 text_32 mt-19" @click="handleDelete2()">OFF SHELF</button>

                  </div>
                </div>
              </div>
            </div>
            <span class="font_10 pos_3">{{ goods.description }}</span>
            <span class="font_11 text_33 pos_4">{{ goods.statusDesc }}</span>
          </div>
        </div>
        <div class="self-start divider"></div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>  
import { ref, onMounted } from 'vue';  
import { useRouter } from 'vue-router';  
import { getGoodsList } from '@/utils/api/goods/index';  
import { updateGoodsStatus1 } from '@/utils/api/goods/index';
import { updateGoodsStatus2 } from '@/utils/api/goods/index';
const router = useRouter();  
  
// 响应式数据  
const items = ref([null]);  

const goods = ref({});
const id = ref('');
  
// 处理点击事件的方法  
const handleClick = () => {  
  router.push({ path:'/delivers'});  
};   
  
//组件挂载时调用
onMounted(() => {
  getInfo();
});


// // 获取商品列表的方法
const getInfo = async () => {
  try {
    const res = await getGoodsList();
    const id = res.data[0].itemId;
    console.log(id);
    goods.value = res.data[0];
    console.log(res.data);

  } catch (error) {
    console.error('获取商品列表失败:', error);
  }
};

const handleDelete1 = async () => {
  try {
    const result = await updateGoodsStatus1(goods.value.itemId);
    console.log('商品上架成功',result);
  } catch (error) {
    console.error('商品上架失败:', error);
  }
};
//
// // 下架商品的方法
const handleDelete2 = async () => {
  try {
    await updateGoodsStatus2(goods.value.itemId);
    console.log('商品下架成功');
  } catch (error) {
    console.error('商品下架失败:', error);
  }
};
  
</script> 

<style scoped>
.ml-57 {
  margin-left: 3.56rem;
}
.ml-3 {
  margin-left: 0.19rem;
}
.ml-156 {
  margin-left: 9.75rem;
}
.ml-196 {
  margin-left: 12.25rem;
}
.ml-11 {
  margin-left: 0.69rem;
}
.ml-13 {
  margin-left: 0.81rem;
}
.ml-17 {
  margin-left: 1.06rem;
}
.ml-67 {
  margin-left: 4.19rem;
}
.ml-95 {
  margin-left: 5.94rem;
}
.ml-51 {
  margin-left: 3.19rem;
}
.ml-145 {
  margin-left: 9.06rem;
}
.ml-144 {
  margin-left: 9rem;
}
.ml-160 {
  margin-left: 10rem;
}
.ml-25 {
  margin-left: 1.56rem;
}
.ml-9 {
  margin-left: 0.56rem;
}
.ml-31 {
  margin-left: 1.94rem;
}
.ml-37 {
  margin-left: 2.31rem;
}
.mt-21 {
  margin-top: 1.31rem;
}
.ml-61 {
  margin-left: 3.81rem;
}
.mt-19 {
  margin-top: 1.19rem;
}
.page {
  padding: 1.5rem 0.88rem 8.44rem;
  background-color: #cfc0c0d9;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.group {
  padding: 0 1.08rem;
}
.font {
  font-size: 0.88rem;
  font-family: Inter;
  line-height: 0.66rem;
  color: #2e3033;
}
.text {
  line-height: 0.65rem;
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
.text_2 {
  line-height: 0.64rem;
}
.image {
  width: 0.88rem;
  height: 0.86rem;
}
.group_2 {
  margin-top: 2.49rem;
  padding: 0 2.94rem;
}
.group_3 {
  padding: 0.8rem 0 0.77rem;
  width: 11.99rem;
}
.image_4 {
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
  padding: 1.04rem 0.95rem 0.98rem 2.51rem;
  background-color: #ffffff;
  height: 4.15rem;
}
.image_5 {
  width: 19.44rem;
  height: 1.13rem;
}
.image_6 {
  width: 2.13rem;
  height: 2.13rem;
}
.group_4 {
  margin-top: 4.67rem;
}
.section_3 {
  padding: 2.38rem 1.17rem 11.33rem 1.27rem;
  background-color: #ffffff;
  width: 13.75rem;
  height: 71rem;
}
.image_7 {
  width: 1.13rem;
  height: 1rem;
}
.font_2 {
  font-size: 1rem;
  font-family: Inter;
  line-height: 0.75rem;
  color: #2e3033;
}
.group_6 {
  margin-top: 2.45rem;
}
.image_11 {
  border-radius: 50%;
  width: 1.09rem;
  height: 1.09rem;
}
.text_8 {
  color: #2e3033;
  font-size: 1rem;
  font-family: AlibabaPuHuiTi;
  line-height: 0.71rem;
}
.group_7 {
  padding: 0 0.11rem;
}
.view_4 {
  margin-top: 2.39rem;
}
.image_13 {
  border-radius: 0.063rem;
  width: 1rem;
  height: 1.13rem;
}
.group_8 {
  margin-left: 0.11rem;
  margin-top: 2.14rem;
  width: 8.26rem;
}
.image_14 {
  width: 1rem;
  height: 1rem;
}
.group_9 {
  margin-top: 1.52rem;
}
.image_15 {
  width: 1rem;
  height: 1.13rem;
}
.font_6 {
  font-size: 0.88rem;
  font-family: Inter;
  line-height: 1.06rem;
  color: #2e3033;
}
.text_23 {
  margin-top: 0.51rem;
  color: #737780;
  width: 5.63rem;
}
.group_13 {
  margin-top: 2.57rem;
}
.font_5 {
  font-size: 1rem;
  font-family: Inter;
  line-height: 0.75rem;
  color: #2e3033;
}
.text_21 {
  word-break: break-all;
  margin-left: 1.5rem;
}
.text_22 {
  margin-top: 1.17rem;
  color: #1a66ff;
}
.text_18 {
  color: #1a66ff;
}
.font_4 {
  font-size: 0.88rem;
  font-family: Inter;
  line-height: 0.66rem;
  color: #737780;
}
.text_17 {
  margin-top: 0.85rem;
  line-height: 0.65rem;
  margin-left: -1.5rem;
}
.text_16 {
  margin-top: 1.33rem;
  line-height: 0.65rem;
  margin-left: 1.5rem;
}
.text_13 {
  line-height: 0.65rem;
}
.text_31 {
  line-height: 0.65rem;
}
.view_6 {
  margin-top: 2.71rem;
}
.text_34 {
  line-height: 0.73rem;
}
.group_16 {
  margin-top: 2.89rem;
}
.group_17 {
  margin-top: 1.53rem;
}
.text_43 {
  line-height: 1.19rem;
}
.image_8 {
  width: 0.44rem;
  height: 0.75rem;
}
.view_8 {
  margin-top: 2.55rem;
}
.group_19 {
  padding-left: 1.83rem;
  padding-right: 1.27rem;
}
.group_5 {
  margin-right: 0.31rem;
}
.section_4 {
  margin-right: 2.65rem;
  padding: 1.7rem 0 1.88rem 1.5rem;
  background-color: #ffffff;
}
.text_3 {
  margin-left: 0.099rem;
  color: #2e3033;
  font-size: 1.13rem;
  font-family: Inter;
  line-height: 0.84rem;
}
.view {
  margin-left: 6.7rem;
  padding: 0.74rem 0.59rem 0.72rem;
  background-color: #ffffff;
  border-radius: 0.13rem;
  height: 2.25rem;
  border-left: solid 0.063rem #a1a7b3;
  border-right: solid 0.063rem #a1a7b3;
  border-top: solid 0.063rem #a1a7b3;
  border-bottom: solid 0.063rem #a1a7b3;
  margin-top: -0.2rem;
}
.font_3 {
  font-size: 0.88rem;
  font-family: Inter;
  line-height: 0.66rem;
  color: #8a8f99;
  
}
.text_4 {
  margin-left: -21.2rem;
}
.text_5 {
  margin-left: 19.43rem;
}
.section_6 {
  margin-left: 3rem;
  margin-top: -0.2rem;
  padding: 0.74rem 0.53rem 0.72rem;
  background-color: #ffffff;
  border-radius: 0.13rem;
  height: 2.25rem;
  border-left: solid 0.063rem #a1a7b3;
  border-right: solid 0.063rem #a1a7b3;
  border-top: solid 0.063rem #a1a7b3;
  border-bottom: solid 0.063rem #a1a7b3;
}
.text_6 {
  margin-left: -20rem;
}
.view_2 {
  margin-left: 0.8rem;
  padding: 0.75rem 0 0.74rem 0.63rem;
  background-color: #ffffff;
  border-radius: 0.13rem;
  height: 2.25rem;
  border-left: solid 0.063rem #a1a7b3;
  border-right: solid 0.063rem #a1a7b3;
  border-top: solid 0.063rem #a1a7b3;
  border-bottom: solid 0.063rem #a1a7b3;
  margin-top: -0.1rem;
  width: 14rem;
}
.text_7 {
  margin-top: -0.2rem;
  line-height: 0.64rem;
}
.group_31 {
  width: 45.7rem;
}
.text_9 {
  line-height: 0.65rem;
}
.section_5 {
  padding: 0.75rem 0.58rem 0.74rem;
  background-color: #ffffff;
  border-radius: 0.13rem;
  height: 2.25rem;
  border-left: solid 0.063rem #a1a7b3;
  border-right: solid 0.063rem #a1a7b3;
  border-top: solid 0.063rem #a1a7b3;
  border-bottom: solid 0.063rem #a1a7b3;
  margin-left: 0.5rem;
}
.text_10 {
  line-height: 0.64rem;
  margin-left: -12rem;
}
.image_9 {
  width: 0.56rem;
  height: 0.31rem;
}
.image_10 {
  margin-right: 0.18rem;
}
.image_1 {
  margin-right: 0.11rem;
}
.image_12 {
  margin-right: 0.25rem;
}
.view_3 {
  margin-left: 1.06rem;
  padding: 0.75rem 0.69rem 0.74rem;
  background-color: #ffffff;
  border-radius: 0.13rem;
  height: 2.25rem;
  border-left: solid 0.063rem #a1a7b3;
  border-right: solid 0.063rem #a1a7b3;
  border-top: solid 0.063rem #a1a7b3;
  border-bottom: solid 0.063rem #a1a7b3;
}
.text_11 {
  line-height: 0.64rem;
}
.text_12 {
  line-height: 0.65rem;
}
.section_7 {
  padding: 0.74rem 0.71rem 0.72rem 0.71rem;
  background-color: #ffffff;
  border-radius: 0.13rem;
  height: 2.25rem;
  border-left: solid 0.063rem #a1a7b3;
  border-right: solid 0.063rem #a1a7b3;
  border-top: solid 0.063rem #a1a7b3;
  border-bottom: solid 0.063rem #a1a7b3;
}
.group_32 {
  width: 21.33rem;
  margin-left: 1rem;
}
.text-wrapper {
  padding: 0.75rem 0 0.74rem;
  background-color: #ffffff;
  border-radius: 0.13rem;
  height: 2.25rem;
  border-left: solid 0.063rem #a1a7b3;
  border-right: solid 0.063rem #a1a7b3;
  border-top: solid 0.063rem #a1a7b3;
  border-bottom: solid 0.063rem #a1a7b3;
  margin-left: 1rem;
}
.text_14 {
  margin-left: 0.68rem;
  color: #a1a7b3;
  line-height: 0.64rem;
}
.group_33 {
  width: 21.75rem;
}
.text-wrapper_2 {
  padding: 0.79rem 0 0.71rem;
  background-color: #1a66ff;
  border-radius: 0.13rem;
  width: 6rem;
  height: 2.25rem;
}
.text_15 {
  color: #ffffff;
  margin-top: -0rem;
  margin-right: -1rem;
}
.text-wrapper_3 {
  padding: 0.71rem 0 0.67rem;
  background-color: #ffffff;
  border-radius: 0.13rem;
  width: 8rem;
  height: 2.25rem;
  border-left: solid 0.063rem #a1a7b3;
  border-right: solid 0.063rem #a1a7b3;
  border-top: solid 0.063rem #a1a7b3;
  border-bottom: solid 0.063rem #a1a7b3;
}
.text-wrapper_4 {
  padding: 0.71rem 0 0.66rem;
  background-color: #ffffff;
  border-radius: 0.13rem;
  width: 6.5rem;
  height: 2.25rem;
  border-left: solid 0.063rem #a1a7b3;
  border-right: solid 0.063rem #a1a7b3;
  border-top: solid 0.063rem #a1a7b3;
  border-bottom: solid 0.063rem #a1a7b3;
}
.section_8 {
  padding: 1.88rem 0 1.84rem;
  background-color: #ffffff;
}
.form-item {
  align-self: stretch;
  margin-left: 1.07rem;
}
.section_9 {
  padding: 0.56rem 1.25rem;
  background-color: #f7f8fa;
  border-radius: 0.13rem;
  margin-top: 3rem;
}
.section_10 {
  background-color: #f7f8fa;
  border-radius: 0.13rem;
  width: 1rem;
  height: 1rem;
  border-left: solid 0.063rem #a1a7b3;
  border-right: solid 0.063rem #a1a7b3;
  border-top: solid 0.063rem #a1a7b3;
  border-bottom: solid 0.063rem #a1a7b3;
}
.text_19 {
  margin-left: -0.65rem;
  line-height: 0.64rem;
  margin-top: -5.5rem;
}
.text-wrapper_5 {
  margin-left: 1.92rem;
  padding: 0.53rem 0 0.57rem;
  background-color: #f7f8fa;
  border-radius: 0.13rem;
  height: 1.88rem;
  border-left: solid 0.063rem #a1a7b3;
  border-right: solid 0.063rem #a1a7b3;
  border-top: solid 0.063rem #a1a7b3;
  border-bottom: solid 0.063rem #a1a7b3;
  margin-top: -5.5rem;
}
.text_20 {
  margin-left: 0.68rem;
  margin-right: 0.57rem;
  line-height: 0.65rem;
}
.group_10 {
  padding: 1.15rem 0 0.89rem;
  width: 55.53rem;
}
.font_8 {
  font-size: 0.88rem;
  font-family: Inter;
  line-height: 1.06rem;
  color: #737880;
  margin-top: -9rem;
}
.text_25 {
  width: 6.44rem;
}
.text_26 {
  width: 6.56rem;
  margin-bottom: 0rem;
  margin-top: -2rem;
}
.font_7 {
  font-size: 0.88rem;
  font-family: Inter;
  line-height: 0.66rem;
  color: #737880;
  margin-left: 15rem;
}
.text_1234{
  margin-right: -3rem;
}
.text_24 {
  line-height: 0.65rem;
}
.text_53 {
  line-height: 0.65rem;
}
.text_52 {
  margin-left: 1.8rem;
}
.text_50 {
  margin-left: 1.83rem;
}
.text_48 {
  line-height: 0.65rem;
}
.text_47 {
  line-height: 0.64rem;
}
.text_41 {
  margin-top: 0.72rem;
}
.text_40 {
  margin-left: 1.91rem;
  margin-top: 1.26rem;
}
.text_35 {
  margin-left: 1.89rem;
}
.list-item {
  padding: 4.46rem 0 4.5rem;
}
.section_11 {
  background-color: #ffffff;
  border-radius: 0.13rem;
  width: 1rem;
  height: 1rem;
  border-left: solid 0.063rem #a1a7b3;
  border-right: solid 0.063rem #a1a7b3;
  border-top: solid 0.063rem #a1a7b3;
  border-bottom: solid 0.063rem #a1a7b3;
}
.view_5 {
  margin-left: 2.15rem;
}
.group_11 {
  padding-top: 1.9rem;
  height: 8.15rem;
  border-top: solid 0.063rem #e6e7eb;
}
.pos_2 {
  position: absolute;
  left: 1.07rem;
  right: 0;
  top: 0;
}
.image_16 {
  width: 6.25rem;
  height: 6.25rem;
}
.image_20 {
  margin-left: 3.33rem;
}
.form-item_2 {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
.group_12 {
  padding: 1.85rem 4.31rem 0 10.6rem;
}
.text_27 {
  width: 10.63rem;
  margin-left: 3rem;
}
.text_28 {
  line-height: 0.66rem;
}
.text_29 {
  margin-top: 0.19rem;
  line-height: 0.66rem;
}
.text_30 {
  width: 8.5rem;
}
.text_1 {
  margin-top: 0.12rem;
}
.select {
  margin-top: 0.15rem;
}
.font_9 {
  font-size: 0.88rem;
  font-family: Inter;
  line-height: 0.66rem;
  color: #1a66ff;
}
.text_32 {
  line-height: 0.64rem;
  margin-left: 20.5rem;
  margin-top: -0.5rem;
}
.text_3200 {
  line-height: 0.64rem;
  margin-left: 20.5rem;
  margin-top: 0.5rem;
}
.font_10 {
  font-size: 0.75rem;
  font-family: Inter;
  line-height: 0.56rem;
  color: #737880;
}
.pos_3 {
  position: absolute;
  left: 11.57rem;
  bottom: 4.07rem;
  margin-top: 0.5rem;
}
.font_11 {
  font-size: 0.75rem;
  font-family: Inter;
  line-height: 0.66rem;
  color: #737880;
}
.text_33 {
  line-height: 0.65rem;
}
.pos_4 {
  position: absolute;
  left: 11.57rem;
  bottom: 2.81rem;
}
.divider {
  margin-left: 4.4rem;
  background-color: #e6e7eb;
  width: 67.75rem;
  height: 0.063rem;
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
  margin-top: 0.38rem;
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
  margin-left: .63rem;
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
