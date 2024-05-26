<template>
  <div class="pay-container">
    <div class="success-message">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="green" class="bi bi-check-lg" width="50" height="50">
        <path fill-rule="evenodd" d="M13.485 1.879a.5.5 0 0 1 .708 0c.176.177.207.444.089.66l-.01.013-8.486 9.449a.5.5 0 0 1-.734.006l-.006-.006-4-4.5a.5.5 0 0 1 .734-.676l.006.007 3.493 3.928L13.396 1.886a.566.566 0 0 1 .089-.007z"/>
      </svg>
      <h3>Order Successfully</h3>
    </div>
    <div class="button-container">
      <button @click="returnUserHome">Return</button>
      <button @click="handlePay">Pay</button>
      <div v-html="paymentHtml"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      paymentHtml: ''
    };
  },
  methods: {
    returnUserHome() {
      console.log("Returning to user's home page");
      this.$router.push({ path: "/home" });
    },
    async handlePay() {
      try {

        const token = localStorage.getItem('token');
        const traceNo = localStorage.getItem("traceNo");
        const totalAmount = localStorage.getItem("totalAmount");
        const subject = localStorage.getItem("subject");
        console.log(traceNo)
        console.log(totalAmount)
        console.log(subject)

        // Send request to payment interface
        const requestUrl = `http://localhost:8081/pay/create?traceNo=${traceNo}&totalAmount=${totalAmount}&subject=${subject}`;
        const paymentResponse = await axios.get(
            requestUrl, {
          headers: {
            'token': `${token}`,
          },
          responseType: 'text'
        });

        // Get HTML content of the payment page
        window.localStorage.removeItem('url')
        window.localStorage.setItem('url',paymentResponse.data)
        var newWin=window.open('','_blank')
        newWin.document.write(localStorage.getItem('url'))
        newWin.document.close()
        // const paymentHtml = paymentResponse.data;
        // localStorage.setItem("paymentHtml",paymentHtml);
        // const payurl = localStorage.getItem("paymentHtml");
        // window.open(payurl, '_blank');
        // console.log('Received HTML content from API:', paymentHtml);
        //this.paymentHtml = paymentResponse.data;

        // 使用正则表达式从 paymentHtml 中提取 action 的值
        // const actionRegex = /action="([^"]*)"/;
        // const match = paymentHtml.match(actionRegex);
        // let actionUrl = '';
        // if (match && match.length > 1) {
        //   actionUrl = match[1];
        // }
        // 使用 window.open 打开支付窗口，并使用 actionUrl 作为 URL
        //const paymentWindow = window.open(actionUrl, '_blank');

        //const paymentWindow = window.open(paymentHtml, '_blank');
        // window.open(paymentHtml, '_blank');
        // Open a new window and load the payment page's HTML content
        // const paymentWindow = window.open('paymentHtml.data.action', '_blank');
        // console.log("open new window");
        // paymentWindow.document.write(paymentHtml);
        //paymentWindow.document.documentElement.innerHTML=paymentHtml;
      } catch (error) {
        console.error('Failed to pay:', error);
        alert('Payment failed. Please retry.');
      }
    }
  },
  // mounted() {
  //   // 在组件挂载完成后调用 handlePay 函数
  //   this.handlePay();
  // }

};
</script>

<style scoped>
.pay-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.pay-container:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.button-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

button {
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  background-color: #0056b3;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

h3 {
  text-align: center;
  margin: 10px 0;
}

.success-message {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.bi-check-lg {
  color: green; /* Adjusts the color of the checkmark */
}
</style>