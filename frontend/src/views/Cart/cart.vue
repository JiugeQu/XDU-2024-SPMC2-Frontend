<template>
  <div class="group_1 page">
    <img @click="gotohome" class="image_4" src="/public/image/s12.png" />
    <div>
      <div v-for="store in data" :key="store.sellerId" class="store">
        <span class="font_1">{{ store.sellerName }}</span>
        <div v-for="item in store.content" :key="item.itemId" class="item">
          <div class="items">
            <input type="checkbox" @change="updateSelection(item, $event)" />
            <img :src="item.img" :alt="item.title" class="item-image" />
            <div class="infor">
              <span class="font_2">{{ item.description }}</span>
              <div class="group_2">
                <span class="font_3">￥{{ item.price }}</span>
                <div class="counter">
                  <span class="font_4">num:</span>
                  <button class="buttonl" @click="deNum(item)">-</button>
                  <span class="font_4">{{ item.quantity }}</span>
                  <button class="buttonr" @click="inNum(item)">+</button>
                </div>
              </div>
            </div>
            <img src="/public/image/y1.png" class="image_5" @click="removeCart(item)" />
          </div>
        </div>
      </div>
      <div class="group_3">
        <span class="font_5">total：￥{{ totalPrice }}</span>
        <button class="checkout-button" @click="goToAddressSelection">Select Address</button>
        <button class="checkout-button" @click="pay()">Pay</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// import Counter from "@/components/counter.vue";
export default {
  components: {},
  data() {
    return {
      data: [],
      result: [],
      add:[],
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    totalPrice() {
      return this.result.reduce((total, item) => {
        const product = this.findProductById(item.itemId);
        return total + (product ? product.price * item.quantity : 0);
      }, 0);
    }
  },
  methods: {
    gotohome() {
      this.$router.push({ path: '/home' });
    },
    fetchData() {
      const token = localStorage.getItem('token');
      const config = {
        method: 'get',
        url: `http://localhost:8081/cart/display/all`,
        headers: {
          token: `${token}`
        }
      };
      axios(config)
          .then((response) => {
            this.data = response.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
    },
    updateSelection(item, event) {
      if (event.target.checked) {
        this.result.push({ itemId: item.itemId, quantity: item.quantity });
      } else {
        this.result = this.result.filter((resultItem) => resultItem.itemId !== item.itemId);
      }
      console.log(this.result);
    },
    deNum(item) {
      if (item.quantity > 1) {
        const token = localStorage.getItem('token');
        const data = {
          itemId: item.itemId,
          quantity: item.quantity
        };
        const config = {
          method: 'post',
          url: 'http://localhost:8081/cart/minusone',
          headers: {
            token: `${token}`
          },
          data: data
        };
        axios(config)
            .then((response) => {
              item.quantity = response.data.data;
              this.updateResult(item, item.quantity);
              console.log(item.quantity);
            })
            .catch((error) => {
              console.log(error);
            });
      }
    },
    inNum(item) {
      const token = localStorage.getItem('token');
      const data = {
        itemId: item.itemId,
        quantity: item.quantity
      };
      const config = {
        method: 'post',
        url: 'http://localhost:8081/cart/addone',
        headers: {
          token: `${token}`
        },
        data: data
      };
      axios(config)
          .then((response) => {
            item.quantity = response.data.data;
            this.updateResult(item, item.quantity);
            console.log(item.quantity);
          })
          .catch((error) => {
            console.log(error);
          });
    },
    updateResult(item, newQuantity) {
      const index = this.result.findIndex((resultItem) => resultItem.itemId === item.itemId);
      item.quantity = newQuantity;
      if (index !== -1) {
        this.result[index].quantity = newQuantity;
      }
      // 打印更新后的 result 数组
      console.log(this.result);
    },
    removeCart(item) {
      const token = localStorage.getItem('token');
      const config = {
        method: 'post',
        url: `http://localhost:8081/cart/remove/${item.itemId}`,
        headers: {
          token: `${token}`
        }
      };
      axios(config)
          .then((response) => {
            this.data = response.data.data;
            this.fetchData();
          })
          .catch((error) => {
            console.log(error);
          });
    },
    findProductById(itemId) {
      for (let store of this.data) {
        for (let item of store.content) {
          if (item.itemId === itemId) {
            return item;
          }
        }
      }
      return null;
    },
    pay() {
      const addressId = this.$route.query.addressId; // 获取地址ID
      const formattedResult = this.result.reduce((acc, currentItem) => {
        const product = this.findProductById(currentItem.itemId);
        console.log(product);
        if (product) {
          const sellerId = product.sellerId;
          const sellerIndex = acc.findIndex((seller) => seller.sellerId === sellerId);
          const itemDetails = {
            itemId: currentItem.itemId,
            quantity: currentItem.quantity,
            unitPrice: product.price
          };

          if (sellerIndex !== -1) {
            acc[sellerIndex].items.push(itemDetails);
          } else {
            acc.push({
              sellerId: sellerId,
              items: [itemDetails]

            });
          }
        }
        console.log(acc);
        return acc;
      }, []);
      console.log(formattedResult);
      const token = localStorage.getItem('token');
      // var data = this.result;

      var config = {
        method: 'post',
        url: `http://localhost:8081/cart/order?addressId=${addressId}`,
        headers: {
          token: `${token}`
        },
        data: formattedResult
      };

      axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            const traceNo = response.data.data.orderId;
            const totalAmount = response.data.data.totalAmount;
            const subject = response.data.data.userId;

            localStorage.setItem('traceNo', traceNo);
            localStorage.setItem('totalAmount', totalAmount);
            localStorage.setItem('subject', subject);
            console.log(traceNo);
            console.log(totalAmount);
            console.log(subject);

            // Redirect to payment page with order data as URL parameters
            console.log('pay参数：', response.data);
            window.location.href = `/pay?traceNo=${traceNo}&totalAmount=${totalAmount}&subject=${subject}`;
            console.log('跳转支付界面');
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    goToAddressSelection() {
      // 跳转到地址选择页面
      this.$router.push({ path: '/address' });
    },
  }
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: columns;
  background-color: rgb(235, 235, 235);
}
.group_1 {
  display: flex;
  flex-direction: column;
}
.group_2 {
  display: flex;
  flex-direction: column;
}
.group_3 {
  line-height: 3rem;
  text-align: center;
  background-color: white;
  position: fixed;
  width: 100%;
  right: 0px;
  bottom: 3rem;
}
.image_4 {
  width: 140px;
  height: 33px;
  margin-top: 50px;
}
.image_5 {
  width: 30px;
  height: 30px;
  margin-left: 3rem;
}
.store {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 3rem;
  margin-top: 1rem;
  /* width:92%; */
  /* margin-left: 3rem; */
}
.font_1 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  font-size: 1.2rem;
  font-family: HarmonyOS Sans SC;
}
.font_2 {
  font-size: 1rem;
  margin-top: 1rem;
  font-family: HarmonyOS Sans SC;
}
.font_3 {
  color: red;
  font-size: 1rem;
  margin-top: 1rem;
  font-family: HarmonyOS Sans SC;
  font-weight: 800;
}
.font_4 {
  font-size: 1rem;
  /* margin-top: 1rem; */
  font-family: HarmonyOS Sans SC;
}
.font_5 {
  margin-left: 2rem;
  font-size: 1.3rem;
}
.item {
  display: flex;
  flex-direction: column;
  margin-left: 0.8rem;
  /* margin-top:1rem; */
}
.items {
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
}
.infor {
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  width: 80%;
}
.item-image {
  width: 8rem;
  height: 8rem;
  margin-left: 1.2rem;
}
.counter {
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  margin-top: 1rem;
}
.buttonl {
  width: 1.4rem;
  height: 1.4rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
.buttonr {
  width: 1.4rem;
  height: 1.4rem;
  margin-left: 1rem;
}
.checkout-button {
  margin-left: 20rem;
  width: 7rem;
  font-size: 1.3rem;
  color: white;
  background-color: red;
  border-radius: 3rem;
  border-color: red;
}
</style>