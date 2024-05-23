<template>
  <div class="detail-container">
    <div class="product-image">
      <img :src="product.url" alt="Product Image" />
    </div>
    <div class="product-info">
      <h2>{{ product.name }}</h2>
      <p class="product-price">Name: {{ product.title }}</p>
      <p class="product-price">Price: {{ product.price }}</p>
      <p class="product-price">Description: {{ product.description }}</p>
      <p class="product-price">Stock: {{ product.stock }}</p>
      <div class="counter">
        <span class="font_1">Num:</span>
        <button class="buttonl" @click="deNum()">-</button>
          <span>{{ num }}</span>
          <button class="buttonr" @click="inNum()">+</button>
      </div>
      <div class="buttons">
        <button @click="buyNow(product)">Pay</button>
          <button @click="addToCart(product)">Add to Shopping Cart</button>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import Counter from "@/components/counter.vue";
export default {
  data() {
    return {
      product: {}, // 商品信息
      num:1,
    };
  },
  mounted() {
    // 从路由参数中获取商品 ID，然后根据 ID 获取商品信息
    const productId = this.$route.params.id;
    this.getProductDetails(productId);
  },
  methods: {
    getProductDetails(productId) {
      const token = localStorage.getItem("token");
      // 发起请求获取商品详情
      const config = {
        method:'get',
        url: `http://localhost:8081/item/${productId}`,
        // url: `http://127.0.0.1:4523/m1/4275135-0-default/item/${productId}`,
        headers: {
          token: `${token}`,
        },
      };

      axios(config)
        .then((response) => {
          this.product = response.data.data;

        })
        .catch((error) => {
          console.error("Error fetching product details:", error);
        });
    },

    buyNow(product) {
      console.log("立即购买");
      this.$router.push({path:"/order/"+product.id}); //product为传给付款页的数据，根据情况改成id/product
    },
    addToCart(product) {
      const token = localStorage.getItem("token");
      console.log("加入购物车");
      const formData = {
        itemId: product.id,
        quantity: this.num,
      };
      console.log(formData);
      const config = {
        method: "post",
        url: `http://localhost:8081/cart/add`,
        // url: `http://127.0.0.1:4523/m1/4275135-0-default/cart/add`,
        headers: {
          token: `${token}`,
        },
        data: formData,
      };

      axios(config)
        .then((response) => {
          this.product = response.data;
          this.getProductDetails(product.id);
        })
        .catch((error) => {
          console.error("Error fetching product details:", error);
        });
    },
    inNum() {
      this.num++;
      this.$emit('update:quantity', this.num); // 发送更新事件
    },
    deNum() {
      if (this.num > 1) {
        this.num--;
        this.$emit('update:quantity', this.num); // 发送更新事件
      }
    },
  },

  // components: {
  //   Counter,
  // },
};
</script>
  
  <style scoped>
  .counter {
    display: flex;
    flex-direction: row;
    font-size: 20px;
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
.detail-container {
  display: flex;
  justify-content: space-between;
}

.product-image {
  flex: 1;
  margin-left: 10rem;
}

.product-image img {
  width: 100%;
  height: auto;
}

.product-info {
  flex: 1;
  margin-right: 10rem;
  /* padding: 0 20px; */
}

.product-info h2 {
  margin-top: 0;
}

.product-price {
  font-size: 20px;
  color: #333;
}

.buttons {
  margin-top: 20px;
}

.buttons button {
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.buttons button:last-child {
  margin-right: 0;
}
</style>
  