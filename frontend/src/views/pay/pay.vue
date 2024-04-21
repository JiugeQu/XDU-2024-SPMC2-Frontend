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
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    returnUserHome() {
      console.log("Returning to user's home page");
      this.$router.push({ path: "/home" });
    },
    async handlePay() {
      try {
        // Retrieve order data from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const traceNo = urlParams.get('traceNo');
        const totalAmount = urlParams.get('totalAmount');
        const subject = urlParams.get('subject');

        // Prepare payment parameters
        const paymentParams = {
          traceNo: traceNo,
          totalAmount: totalAmount,
          subject: subject
        };
        console.log("paymentParams",paymentParams);
        // Send request to payment interface
        const paymentResponse = await axios.get('http://127.0.0.1:4523/m1/4275135-0-default/pay/create', {
          params: paymentParams,
          headers: {
            Authorization: `Bearer ${token}`
          },
          responseType: 'text'
        });

        // Get HTML content of the payment page
        const paymentHtml = paymentResponse.data;
        console.log('Received HTML content from API:', paymentHtml);

        // Open a new window and load the payment page's HTML content
        const paymentWindow = window.open('', '_blank');
        paymentWindow.document.write(paymentHtml);
      } catch (error) {
        console.error('Failed to pay:', error);
        alert('Payment failed. Please retry.');
      }
    }
  }
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