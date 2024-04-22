<template>
  <div class="detail-container all">
    <div class="product-image">
      <img :src="product.url" />
    </div>
    <div class="product-info">
      <h2>{{ product.name }}</h2>
      <p class="product-price">name:{{ product.title }}</p>
      <p class="product-price">price:{{ product.price }}</p>
      <p class="product-price">description:{{ product.description }}</p>
      <p class="product-price">stock:{{ product.stock }}</p>
      <div class="buttons">
        <button @click="buyNow(product)">Pay</button>
        <button @click="addToCart">Add to Shopping cart</button>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";

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
        url: `http://localhost:8081/item/${productId}`,
        headers: {
          Authorization: `Bearer${token}`,
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
    addToCart() {
      console.log("加入购物车");
    },
  },
};
</script>
  
  <style scoped>

  .all{
    margin:0;
    padding:0;
    background-color: #cfc0c0d9;
}
.detail-container {
  display: flex;
  justify-content: space-between;
}

.product-image {
  flex: 1;
  margin-left:10rem;
  width: 16rem; 
  height: 18rem; 
}

.product-image img {
  width: 100%;
  height: auto;
}

.product-info {
  flex: 1;
  margin-right:10rem;
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
  