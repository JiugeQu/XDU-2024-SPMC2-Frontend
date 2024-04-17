<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import FormData from 'form-data'; // 导入FormData模块

  // 创建响应式变量，用于存储用户名和密码
  const username = ref('<username>');
  const password = ref('<password>');

  // 点击按钮时触发的登录函数
  const Register = () => {
    // 创建FormData实例并设置用户名和密码
    const formData = new FormData();
    formData.append('username', username.value);
    formData.append('password', password.value);

    // 设置请求配置
    const config = {
      method: 'post',
      url: 'http://127.0.0.1:4523/m2/4278659-0-default/161970447?apifoxResponseId=426626323',
      data: formData
    };

    // 发送请求
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
</script>


<template>
  <div class="flex-col justify-start page">
    <div class="flex-col justify-start items-center relative section">
      <img
        class="shrink image"
        src="../assets/apartment.png"
      />
      <div class="shrink-0 section_2 pos"></div>
      <span class="text_5 pos_11">
        Easy Shopping
        <br />
        at Your Fingertips
      </span>
      <span class="font_2 text_3 pos_8">cart</span>
      <span class="font_2 pos_9">login</span>
      <span class="font_2 pos_10">register</span>
      <img
        class="shrink-0 image_4 pos_6"
        src="../assets/search.png"
      />
      <img
        class="shrink-0 image_2 pos_3"
        src="../assets/logo-white.png"
      />
      <span class="font text text_2 pos_4">Easy BUY</span>
      <img
        class="shrink-0 image_5 pos_7"
        src="../assets/people.png"/>
      <img
        class="shrink-0 image_3 pos_5"
        src="../assets/cart.png"
      />
      <span class="font_2 text_11 pos_14">Shop now</span>
      <img
        class="shrink-0 image_8 pos_13"
        src="../assets/arrow.png"
      />
      <div class="flex-col justify-start items-center section_3 pos_2">
        <div class="flex-col section_4">
          <div class="flex-row items-center self-stretch">
            <div class="flex-row items-end shrink-0">
              <img
                class="shrink-0 image_2"
                src="../assets/logo-black.png"
              />
              <span class="font text text_4 ml-25">Easy BUY</span>
            </div>
            <img
              class="shrink-0 image_6 ml-212"
              src="../assets/close.png"
            />
          </div>
          <div class="flex-col self-center group mt-31">
            <div class="flex-col self-stretch">
              <span class="self-start text_6">Create an account</span>
              <div class="flex-col justify-start items-start self-stretch relative group_2 mt-5">
                <span class="font_3 text_7">Email/ User Name</span>
                <div class="flex-col justify-start items-start text-wrapper pos_12">
                  <input id="username" class="font_4 text_8" type="text" placeholder="Please enter your email address"/>
                </div>
              </div>
            </div>
            <span class="self-start font_3 text_9">Password</span>
            <div class="flex-row items-center self-stretch group_3">
              <input id="password" class="font_4 text_10" placeholder="Password" />
            </div>
            <div class="flex-row items-center self-start group_4">
              <input type="checkbox" class="shrink-0 group_5" />
              <span class="ml-16 font_5">I agree to the Google Terms of Service and <br> Privacy Policy</span>
            </div>
            <div class="flex-col justify-start items-center self-stretch text-wrapper_2">
              <button class="font_6 text_12" @click="Register">Register</button>
            </div>
          </div>
          <div class="flex-row items-baseline self-center mt-31">
            <span class="font_5 text_14">Are you already a member?</span>
            <router-link to="/login">
              <span class="shrink-0 font_6 text_15 ml-162">Login</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
  input{  
    background:none;  
    outline:none;  
    border:0px;
  }
  button{  
    background:none;  
    outline:none;  
    border:0px;
  }
  .ml-25 {
    margin-left: 1.56rem;
  }
  .ml-212 {
    margin-left: 13.25rem;
  }
  .mt-31 {
    margin-top: 1.94rem;
  }
  .mt-5 {
    margin-top: 0.31rem;
  }
  .ml-232 {
    margin-left: 14.5rem;
  }
  .ml-162 {
    margin-left: 10.13rem;
  }
  .page {
    background-color: #ffffff;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .section {
    background-color: #ffffff;
    overflow: hidden;
  }
  .image {
    width: 100vw;
    height: 62.5vw;
  }
  .section_2 {
    opacity: 0.7;
    background-image: linear-gradient(180deg, #000000c2 29.4%, #54545400 100%);
    width: 80rem;
    height: 30.25rem;
  }
  .pos {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
  .text_5 {
    color: #ffffff;
    font-size: 4rem;
    font-family: Poppins;
    font-weight: 600;
    line-height: 4.94rem;
    width: 31.75rem;
  }
  .pos_11 {
    position: absolute;
    left: 18.27rem;
    top: 15.37rem;
  }
  .font_2 {
    font-size: 1.13rem;
    font-family: Poppins;
    line-height: 1.2rem;
    font-weight: 600;
    color: #ffffff;
  }
  .text_3 {
    line-height: 0.79rem;
  }
  .pos_8 {
    position: absolute;
    right: 28.71rem;
    top: 6.4rem;
  }
  .pos_9 {
    position: absolute;
    right: 23.36rem;
    top: 6.29rem;
  }
  .pos_10 {
    position: absolute;
    right: 16.36rem;
    top: 6.29rem;
  }
  .image_4 {
    width: 1.38rem;
    height: 1.38rem;
  }
  .pos_6 {
    position: absolute;
    right: 10.37rem;
    top: 6.13rem;
  }
  .image_2 {
    width: 2.88rem;
    height: 2.19rem;
  }
  .pos_3 {
    position: absolute;
    left: 7.31rem;
    top: 5.38rem;
  }
  .font {
    font-size: 1.13rem;
    font-family: Poppins;
    line-height: 1.44rem;
    font-weight: 700;
  }
  .text {
    text-transform: uppercase;
    width: 5.44rem;
  }
  .text_2 {
    color: #ffffff;
    font-size: 1.19rem;
    white-space: nowrap; /* 防止文本换行 */
  }
  .pos_4 {
    position: absolute;
    left: 11.76rem;
    top: 6.08rem;
  }
  .image_5 {
    width: 1.19rem;
    height: 1.19rem;
  }
  .pos_7 {
    position: absolute;
    right: 7.31rem;
    top: 6.19rem;
  }
  .image_3 {
    width: 1.38rem;
    height: 1.44rem;
  }
  .pos_5 {
    position: absolute;
    right: 31.44rem;
    top: 6.06rem;
  }
  .text_11 {
    font-size: 1.15rem;
    line-height: 1.38rem;
    letter-spacing: 0.092rem;
    text-transform: uppercase;
    width: 6.13rem;
    white-space: nowrap; /* 防止文本换行 */
  }
  .pos_14 {
    position: absolute;
    left: 23.55rem;
    top: 36.5rem;
  }
  .image_8 {
    border-radius: 50%;
    width: 3.44rem;
    height: 3.44rem;
  }
  .pos_13 {
    position: absolute;
    left: 18.13rem;
    bottom: 17.5rem;
  }
  .section_3 {
    padding: 10.88rem 0 5.81rem;
    background-color: #00000080;
  }
  .pos_2 {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .section_4 {
    padding: 1.13rem 1.13rem 1.88rem;
    background-color: #ffffff;
  }
  .text_4 {
    color: #383838;
    font-size: 1.19rem;
    white-space: nowrap; /* 防止文本换行 */
  }
  .image_6 {
    width: 1.31rem;
    height: 1.31rem;
  }
  .group {
    width: 21rem;
  }
  .text_6 {
    color: #000000;
    font-size: 1.38rem;
    font-family: Poppins;
    font-weight: 600;
    line-height: 1.63rem;
    width: 3.75rem;
    white-space: nowrap; /* 防止文本换行 */
  }
  .group_2 {
    padding-bottom: 1.25rem;
  }
  .font_3 {
    font-size: 0.81rem;
    font-family: Montserrat;
    color: #000000;
  }
  .text_7 {
    margin-left: 0.13rem;
    font-size: 0.88rem;
    line-height: 4.94rem;
    width: 6.75rem;
    white-space: nowrap; /* 防止文本换行 */
  }
  .text-wrapper {
    padding: 0.75rem 0 1rem;
    width: 21rem;
    border-left: solid 0.063rem #dedede;
    border-right: solid 0.063rem #dedede;
    border-top: solid 0.063rem #dedede;
    border-bottom: solid 0.063rem #dedede;
  }
  .pos_12 {
    position: absolute;
    left: 0;
    right: 0;
    top: 3.33rem;
  }
  .font_4 {
    font-size: 0.81rem;
    font-family: Poppins;
    line-height: 1rem;
    color: #808080;
  }
  .text_8 {
    margin-left: 0.38rem;
    width: 20rem;
    white-space: nowrap; /* 防止文本换行 */
  }
  .text_9 {
    margin-left: 0.13rem;
    margin-top: 1.75rem;
    font-size: 0.88rem;
    line-height: 0.65rem;
  }
  .group_3 {
    margin-top: 0.5rem;
    padding: 0.88rem 0.38rem;
    border-left: solid 0.063rem #dedede;
    border-right: solid 0.063rem #dedede;
    border-top: solid 0.063rem #dedede;
    border-bottom: solid 0.063rem #dedede;
  }
  .text_10 {
    line-height: 0.61rem;
    width: 20rem;
  }
  .image_7 {
    margin-right: 0.25rem;
    width: 1.31rem;
    height: 0.94rem;
  }
  .group_4 {
    padding: 1.63rem 0;
  }
  .group_5 {
    width: 1.25rem;
    height: 1.25rem;
    border-left: solid 0.063rem #a6a6a6;
    border-right: solid 0.063rem #a6a6a6;
    border-top: solid 0.063rem #a6a6a6;
    border-bottom: solid 0.063rem #a6a6a6;
  }
  .font_5 {
    font-size: 0.81rem;
    font-family: Poppins;
    line-height: 1rem;
    color: #000000;
    /* white-space: normal; 文本换行 */
  }
  .text-wrapper_2 {
    padding: 1.13rem 0;
    background-color: #64a8f5;
    width: 20.88rem;
  }
  .font_6 {
    font-size: 0.81rem;
    font-family: Poppins;
    line-height: 0.86rem;
    font-weight: 600;
  }
  .text_12 {
    color: #ffffff;
  }
  .text_13 {
    margin-top: 0.63rem;
    width: 7.13rem;
  }
  .text_14 {
    width: 6.94rem;
    white-space: nowrap; /* 防止文本换行 */
  }
  .text_15 {
    color: #000000;
  }
</style>