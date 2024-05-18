<template>
  <div class="detail-container">
    <div class="product-image">
      <img :src="product.url" />
    </div>
    <div class="product-info">
      <h2>{{ product.name }}</h2>
      <p class="product-price">name:{{ product.title }}</p>
      <p class="product-price">price:{{ product.price }}</p>
      <p class="product-price">description:{{ product.description }}</p>
      <p class="product-price">stock:{{ product.stock }}</p>
      <Counter ref="counter" />
      <div class="buttons">
        <button @click="buyNow(product)">Pay</button>
        <button @click="addToCart(product)">Add to Shopping cart</button>
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
        url: `http://127.0.0.1:4523/m1/4275135-0-default/item/${productId}`,
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

    buyNow(productId) {
      console.log("立即购买");
      this.$route.push({ path: "/付款页路由" + productId }); //product为传给付款页的数据，根据情况改成id/product
    },
    addToCart(productId) {
      const token = localStorage.getItem("token");
      console.log("加入购物车");
      const formData = {
        itemId: productId,
        quantity: this.num,
      };
      const config = {
        methods: "post",
        url: `http://127.0.0.1:4523/m1/4275135-0-default/cart/add`,
        headers: {
          token: `${token}`,
          
        },
        data: formData,
      };

      axios(config)
        .then((response) => {
          this.product = response.data.data;
        })
        .catch((error) => {
          console.error("Error fetching product details:", error);
        });
    },
  },
  components: {
    Counter,
  },
};
</script>
  
  <style scoped>
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
  