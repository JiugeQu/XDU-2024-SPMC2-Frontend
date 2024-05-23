<template>
<div class="flex-col page">
      <div class="flex-row justify-end items-center lh">
        <img
              @click="address"
              class="image_10"
              src="/public/image/s9.png"
        />
        <img
              class="image_10"
              src="/public/image/s10.png"
        />
        <div class="dropdown">
            <img
              class="dropbth"
              src="/public/image/s6.png"
            />
            <img
              class="image_3 ml-25"
              src="/public/image/s8.png"
            />
            <div class="dropdown-content">
              <a href="#">Consumer Customer Service</a>
              <a href="#">Seller Customer Service</a>
            </div>
        </div>
        <a href="/order_confirm">
          <img
            class="image ml-25"
            src="/public/image/s7.png"
          />
        </a>              
      </div>
      <div class="flex-col mt-39">
        <div class="flex-row items-center">
          <div class="flex-col justify-start items-center relative group">
            <img
              class="image_6"
              src="/public/image/s2.png"
            />
            <img
              class="image_4 pos"
              src="/public/image/s1.png"
            />
          </div>
          <div class="flex-row section">
            <input type="text" class="section3" placeholder="Enter the product you are looking for">
            <img
              class="self-center image_8 ml-196"
              src="/public/image/s3.png"
            />
          </div>
          <div class="flex-row section_2">
            <a href="/shoppingcart">
              <img
                class="self-center image_5"
                src="/public/image/s4.png"
              />
              <img
                class="self-start image_9 ml-13"
                src="/public/image/s5.png"
              />
            </a>           
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default{
  methods:{
    address(){
      this.$router.push({path:"/address"});
    }
  }
}

</script>

<style scoped lang="css">

html {
  font-size: 16px;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', 'Microsoft Yahei', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
}
body * {
  box-sizing: border-box;
  flex-shrink: 0;
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
.items-center {
  align-items: center;
} 
.self-start {
  align-self: flex-start;
} 
.self-center {
  align-self: center;
} 
.relative {
  position: relative;
} 
.ml-25 {
  margin-left: 1.56rem;
} 
.mt-39 {
  margin-top: 2.44rem;
} 
.ml-196 {
  margin-left: 12.25rem;
} 
.ml-13 {
  margin-left: 0.81rem;
} 
.page {
  padding: 1.56rem 1.06rem 8.13rem 3.31rem;
  /* background-color: #cfc0c0d9;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%; */
}
.image_2 {
  width: 9.75rem;
  height: 0.88rem;
} 
.image_3 {
  width: 0.75rem;
  height: 0.5rem;
} 
.image {
  width: 1.69rem;
  height: 1.69rem;
} 
.group {
  padding: 0.75rem 0;
  width: 11.99rem;
}
.image_6 {
  width: 11.88rem;
  height: 1.81rem;
  margin-left: 10rem;
}
.image_4 {
  width: 4.5rem;
  height: 3.44rem;
}
.image_10 {
  margin-right: 3rem;
}
.pos {
  position: absolute;
  left: 0;
  bottom: 0;
} 
.section {
  margin-left: 7.75rem;
  /* padding: 1rem 1rem 1rem 2.5rem; */
  height: 4.15rem;
  width: 33.31rem;
  position: relative;
}
.section3 {
  width: 100%;
  height: 4.15rem;
} 

.image_8 {
  width: 2.13rem;
  height: 2.13rem;
  right:1.5rem;
  position:absolute;
} 
.section_2 {
  margin-left: 2.38rem;
  padding: 0.75rem;
  height: 4.13rem;
} 
.image_5 {
  width: 2.69rem;
  height: 2.69rem;
}
.image_9 {
  margin-top: 1rem;
  width: 8.88rem;
  height: 1.19rem;
} 

/* 设置下拉按钮的样式 */
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* 容器 <div> - 需要放置下拉内容 */
.dropdown {
  position: relative;
  display: inline-block;
}

/* 下拉内容（默认隐藏） */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  font-size: 13px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* 下拉链接 */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* 悬停时更改下拉链接的颜色 */
.dropdown-content a:hover {background-color: #f1f1f1}

/* 悬停时显示下拉菜单 */
.dropdown:hover .dropdown-content {
  display: block;
}

/* 显示下拉内容时，更改下拉按钮的背景颜色 */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

.lh{
  line-height: 0;
}
</style>

