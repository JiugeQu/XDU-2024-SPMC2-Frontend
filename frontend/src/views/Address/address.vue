<template>
  <div class="page">
    <img @click="gotohome" class="image_1" src="/public/image/s12.png" />
    <div class="group_2">
      <!-- <div class="group_2">
      <div class="group_0">
        <div class="group_1">
          <span class="font_1">陕西省</span>
          <span class="font_2">陕西省</span>
          <div>
            <span class="font_3">zhangsan</span>
            <span class="font_4">zhangsan</span>
            <span>zhangsan</span>
          </div>
        </div>
        <img class="image_2" src="/public/image/y1.png" />
      </div>
      <div class="group_0">
        <div class="group_1">
          <span class="font_1">陕西省</span>
          <span class="font_2">陕西省</span>
          <div>
            <span class="font_3">zhangsan</span>
            <span class="font_4">zhangsan</span>
            <span>zhangsan</span>
          </div>
        </div>
        <img class="image_2" src="/public/image/y1.png" />
      </div>
    </div> -->
      <div v-for="(item, index) in items" :key="index" class="group_0" >
        <!-- <div class="group_0"> -->
        <div class="group_1" @click="selectAddress(item)">
          <span class="font_1">{{ item.addrDesc }}</span>
          <span class="font_2">{{ item.addrDesc }}</span>
          <div>
            <span class="font_3">{{ item.addrUsername }}</span>
            <span class="font_4">{{ item.addrPhone }}</span>
            <!-- <span>zhangsan</span> -->
          </div>
        </div>
        <img @click="deleteAdd(item)" class="image_2" src="/public/image/y1.png" />
      </div>
    </div>

    <!-- </div> -->
    <div>
      <button @click="handleSubmit" class="button_1">New shipping address</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
    };
  },
  beforeCreate() {
    document
        .querySelector("body")
        .setAttribute("style", "background-color:rgb(235, 235, 235)");
  },
  mounted() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      const token = localStorage.getItem("token");
      console.log(token);
      const decodedToken = parseJwt(token); // 解析令牌
      const userId = decodedToken.userId; // 提取用户ID
      // const userId = 4; // 提取用户ID
      console.log("User ID:", userId);
      const config = {
        method: "get",
        url: `http://localhost:8081/address/search?userId=${userId}`,
        headers: {
          token: `${token}`,
          // token:"eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoyLCJpZCI6NCwidXNlcm5hbWUiOiJtaXpvcmUxIiwiZXhwIjoxNzIzMDQzNjg2fQ.FgBVQRQMoUUPORwf8yyzP5gPncXbStjRn11tZtJrmiw",

          // Authorization: `Bearer ${token}`,
        },
      };

      axios(config)
          .then((response) => {
            this.items = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
    },

    gotohome() {
      // this.$router.push({ path: "/home" });
      this.$router.go(-1);
    },

    handleSubmit(){
      this.$router.push({path:"/addnew"});
    },
    selectAddress(item) {
      // 发送选中的地址信息给购物车页面
      this.$router.push({ path: "/shoppingcart", query: { addressId: item.id } });
      // this.$router.go(-1, { query: { addressId: item.id } });
    },
    deleteAdd(item){
      const token = localStorage.getItem("token");
      console.log(token);
      const config = {
        method: "post",
        url: `http://localhost:8081/address/delete?addressId=${item.id}`,
        // url: `http://127.0.0.1:4523/m1/4275135-0-default/user/addAdd?adddes=${formData.addrDesc}&addname=${formData.addrUsername}&addphone=${formData.addrPhone}`,
        headers: {
          token: `${token}`,
        },
      };

      axios(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            this.fetchData();
          })
          .catch((error) => {
            console.error("Error submitting form:", error);
          });
    },

    updateItem(item){
      const token = localStorage.getItem("token");
      const config = {
        method: "put",
        url:`http://localhost:8081/user/addAdd?adddes=${item.location}&addname=${item.consignee}&addphone=${item.phonenumber}`,
        headers: {
          token: `${token}`,
        },
        data: item,
      };

      axios(config)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error('Error updating item:', error);
          });
    },
  },
};
// 解析JWT令牌的函数
function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
}
</script>

<style scoped lang="css">
.page {
  display: flex;
  flex-direction: column;
  background-color: rgb(235, 235, 235);
}
.image_1 {
  width: 140px;
  height: 33px;
  margin-top: 50px;
}
.image_2 {
  width: 2rem;
  height: 2rem;
  margin-top: 2rem;
}
.group_0 {
  display: flex;
  margin-top: 1rem;
  border-bottom: 0.1rem solid rgb(200, 200, 200);
  height: 7rem;
  width: 93%;
  margin-left: 3rem;
}
.group_1 {
  display: flex;
  flex-direction: column;
  width: 92%;
}
.group_2 {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 3rem;
  margin-top: 1.5rem;
}
.font_1 {
  font-size: 1.2rem;
  font-family: HarmonyOS Sans SC;
  line-height: 2rem;
  font-weight: 550;
  margin-left: 1rem;
  color: #6f6f6f;
}
.font_2 {
  font-size: 1.5rem;
  font-family: HarmonyOS Sans SC;
  line-height: 2.2rem;
  font-weight: 800;
  margin-left: 1rem;
  color: #000000;
}
.font_3 {
  font-size: 1.2rem;
  font-family: HarmonyOS Sans SC;
  line-height: 2rem;
  font-weight: 800;
  margin-left: 1rem;
  color: #000000;
}
.font_4 {
  font-size: 1.2rem;
  font-family: HarmonyOS Sans SC;
  line-height: 2rem;
  font-weight: 800;
  margin-left: 3rem;
  margin-left: 1rem;
  color: #000000;
}
.button_1 {
  margin-left: 25%;
  margin-top: 3rem;
  width: 40rem;
  height: 3rem;
  background-color: red;
  border-radius: 3rem;
  border: aliceblue;
  font-size: 1.3rem;
  color: white;
}
</style>
        
        