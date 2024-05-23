<template>
  <div class="flex-col page">
  <div class="flex-row justify-end items-center group">
    <span class="text">Van</span>
    <img
      class="image"
      src="../../adassets/up.png"
    />
    <div class="flex-row items-center group_2">
      <div class="shrink-0 section"></div>
      <span class="font text_2">EXIT</span>
      <img
        class="shrink-0 image_2"
        src="../../adassets/exit.png"
      />
    </div>
  </div>
  <div class="flex-row items-center group_3">
    <div class="flex-col justify-start items-center relative group_4">
      <img
        class="image_4"
        src="../../adassets/1.png"
      />
      <img
        class="image_3 pos"
        src="../../adassets/easybuy.png"
      />
    </div>
    <div class="flex-row items-center section_2 ml-125">
      <span class="text_3">Search</span>
      <img
        class="shrink-0 image_5 ml-459"
        src="../../adassets/search.png"
      />
    </div>
  </div>
  <div class="flex-row group_5">
    <div class="flex-col shrink-0 section_3">
      <div class="flex-col self-stretch">
        <div class="flex-row items-center self-stretch">
          <img
            class="image_6"
            src="../../adassets/account.png"
          />
          <span class="font_2 text_4 ml-15">ACCOUNT</span>
        </div>
        <span class="self-center font_2 text_12 mt-13">MANAGEMENT</span>
        <span class="self-center font_2 text_13 mt-13">PROHIBITED ACCOUNTS</span>
      </div>
      <div class="flex-row items-center self-start mt-29">
        <img
          class="shrink-0 image_6"
          src="../../adassets/form.png"
        />
        <span class="text_18 ml-15">COMPAINT FORM</span>
      </div>
    </div>
    <div class="flex-col flex-1 section_4 ml-19">
      <div class="flex-row justify-between items-center section_5">
        <div class="flex-row items-center">
          <div class="flex-row items-center shrink-0">
            <div class="flex-row items-center shrink-0">
              <span class="font_3 text_5">ID NUMBER</span>
              <span class="shrink-0 font text_6 ml-55">NAME</span>
            </div>
<!--            <span class="ml-68 shrink-0 font_3 text_7">PHONE</span>-->
          </div>
          <span class="font_3 text_8 ml-89">REASON</span>
        </div>
        <div class="flex-row group_6">
          <span class="font text_9">TIME</span>
          <span class="font_3 text_10 ml-89">STATUS</span>
          <span class="font_3 text_11 ml-89">OPERATE</span>
        </div>
      </div>
      <div class="flex-col list">
        <div class="flex-row justify-between list-item" v-for="(item, index) in items" :key="index">
          <div class="flex-row items-center">
            <span class="shrink-0 font_4">{{ item.complaintId }}</span>
            <span class="shrink-0 font_4 text_14 ml-65">{{ item.complainantName }}</span>
<!--            <span class="shrink-0 font_4 ml-65">{{ item.addr_phone }}</span>-->
            <span class="font_5 text_15 ml-65">{{ item.reason }}</span>
          </div>
          <div class="flex-row items-center">
            <span class="shrink-0 font_4">{{ item.ctime }}</span>
            <span class="ml-68 shrink-0 font_4 text_16">{{ item.statusDesc }}</span>
            <div class="ml-68 flex-row items-center shrink-0">
              <span class="shrink-0 font_5 text_15">REJECT</span>
              <span class="shrink-0 font_6 text_17 ml-7">/</span>
              <span class="shrink-0 font_5 text_15 ml-7">PROCESS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [], // 将从后端接收到的数据存储在这个数组中
    };
  },
  mounted() {
    // 在组件挂载后立即发起请求
    this.fetchData();
  },
  methods: {
    fetchData() {
      // 使用 Axios 发起 GET 请求
      const token = localStorage.getItem("token");
      console.log(token);
      console.log('Fetching data...');
      axios.get('http://localhost:8081/complaint/search', {
        params: {
          status: '1', // 设置查询参数
        }
      })
      .then(response => {
        // 请求成功，将数据存储到 items 数组中
        console.log('Data received:', response.data);
        this.items = response.data.data;
        console.log('Items:', this.items);
      })
      .catch(error => {
        // 请求失败，处理错误
        console.error('Error fetching data:', error);
      });
    },
  },
};
</script>
<style scoped>
  .ml-125 {
  margin-left: 7.81rem;
}
.ml-459 {
  margin-left: 28.69rem;
}
.mt-13 {
  margin-top: 0.81rem;
}
.mt-29 {
  margin-top: 1.81rem;
}
.ml-15 {
  margin-left: 0.94rem;
}
.ml-19 {
  margin-left: 1.19rem;
}
.ml-55 {
  margin-left: 3.44rem;
}
.ml-89 {
  margin-left: 5.56rem;
}
.ml-7 {
  margin-left: 0.44rem;
}
.ml-65 {
  margin-left: 4.06rem;
}
.page {
  padding: 1.44rem 1.38rem 29.38rem 1.81rem;
  background-color: #f7fafc;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.group {
  padding: 0 2.31rem;
}
.text {
  margin-right: 3.54rem;
  color: #2e3033;
  font-size: 0.88rem;
  font-family: Inter;
  line-height: 0.65rem;
}
.image {
  margin-right: 1.13rem;
  width: 0.63rem;
  height: 0.31rem;
}
.group_2 {
  padding: 0.14rem 0 0.098rem;
  overflow: hidden;
  width: 4.31rem;
  height: 1.13rem;
}
.section {
  background-color: #d8d8d8;
  width: 0.063rem;
  height: 0.79rem;
}
.font {
  font-size: 0.94rem;
  font-family: Inter;
  line-height: 0.64rem;
  color: #737880;
}
.text_2 {
  margin-left: 1.39rem;
  color: #2e3033;
  font-size: 0.88rem;
}
.image_2 {
  margin-left: 0.16rem;
  width: 0.88rem;
  height: 0.86rem;
}
.group_3 {
  margin-top: 2.75rem;
  padding: 0 1.5rem;
}
.group_4 {
  padding: 0.94rem 0 0.69rem;
  width: 12.98rem;
}
.image_4 {
  width: 11.88rem;
  height: 1.81rem;
  margin-right: -11rem;
}
.image_3 {
  width: 4.5rem;
  height: 3.44rem;
}
.pos {
  position: absolute;
  left: 0;
  bottom: 0;
}
.section_2 {
  padding: 1.04rem 0.95rem 0.98rem 1.8rem;
  background-color: #ffffff;
  height: 4.15rem;
}
.text_3 {
  color: #000000ba;
  font-size: 1.13rem;
  font-family: SourceHanSansCN;
  line-height: 0.91rem;
}
.image_5 {
  width: 2.13rem;
  height: 2.13rem;
}
.group_5 {
  margin-top: 4.29rem;
}
.section_3 {
  padding: 0.96rem 0.42rem 41.57rem 1.25rem;
  background-color: #ffffff;
  width: 13.75rem;
  height: 50rem;
}
.image_6 {
  width: 1rem;
  height: 1rem;
}
.font_2 {
  font-size: 0.94rem;
  font-family: Inter;
  line-height: 0.71rem;
  color: #737780;
}
.text_4 {
  font-size: 1rem;
  line-height: 0.75rem;
}
.text_12 {
  font-size: 0.88rem;
  line-height: 0.65rem;
  margin-left: -1.7rem;
}
.text_13 {
  font-size: 0.88rem;
  line-height: 1.06rem;
  width: 10.13rem;
  margin-right: -2rem;
}
.text_18 {
  color: #1a66ff;
  font-size: 1rem;
  font-family: Inter;
  line-height: 1.19rem;
  width: 8rem;
}
.section_4 {
  padding: 0.63rem 0.93rem 28.69rem 1.06rem;
  background-color: #ffffff;
  height: 50rem;
}
.section_5 {
  padding: 1.15rem 2.38rem 0.79rem;
  background-color: #f7f8fa;
  border-radius: 0.13rem;
}
.text_6 {
  font-size: 0.88rem;
}
.font_3 {
  font-size: 0.94rem;
  font-family: Inter;
  line-height: 0.71rem;
  color: #737880;
}
.text_5 {
  font-size: 0.88rem;
  line-height: 1.06rem;
}
.text_7 {
  font-size: 0.88rem;
  line-height: 0.65rem;
}
.text_8 {
  font-size: 0.88rem;
  line-height: 0.66rem;
}
.group_6 {
  margin-right: 0.83rem;
}
.text_9 {
  font-size: 0.88rem;
}
.text_10 {
  font-size: 0.88rem;
  line-height: 0.66rem;
}
.text_11 {
  font-size: 0.88rem;
  line-height: 0.65rem;
}
.list {
  padding-top: 0.094rem;
}
.list-item {
  padding: 2.01rem 1.37rem 1.16rem 3.09rem;
}
.font_6 {
  font-size: 0.94rem;
  font-family: SourceHanSansCN;
  line-height: 0.91rem;
  color: #1a66ff;
}
.text_17 {
  text-decoration: underline;
}
.font_5 {
  font-size: 0.94rem;
  font-family: SourceHanSansCN;
  line-height: 1.13rem;
  color: #1a66ff;
}
.text_15 {
  text-decoration: underline;
  word-break: break-all;
}
.font_4 {
  font-size: 0.94rem;
  font-family: SourceHanSansCN;
  line-height: 0.71rem;
  color: #000000;
}
.text_16 {
  line-height: 0.7rem;
}
.text_14 {
  line-height: 0.69rem;
}
/************************************************************
** 请将全局样式拷贝到项目的全局 CSS 文件或者当前页面的顶部 **
** 否则页面将无法正常显示                                  **
************************************************************/

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