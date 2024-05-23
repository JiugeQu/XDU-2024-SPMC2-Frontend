<script setup>
import { reactive, ref, defineProps, getCurrentInstance } from 'vue';
import axios from 'axios';

const instance = getCurrentInstance();
const emit = instance.emit;

const props = defineProps({
  isVisible: Boolean,
  orderId: Number
});

// const token='eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoyLCJpZCI6NCwidXNlcm5hbWUiOiJtaXpvcmUxIiwiZXhwIjoxNzIzMDQzNjg2fQ.FgBVQRQMoUUPORwf8yyzP5gPncXbStjRn11tZtJrmiw';
const token = localStorage.getItem('token');

const formData = reactive({
  type: '',
  orderId: props.orderNumber,
  reason: '',
});

const successMessage = ref('');

function submitForm() {
  if (!formData.type || !formData.reason) {
    alert("Please fill in all fields.");
    return;
  }

  formData.orderId = props.orderId;
  axios.post('http://localhost:8081/complaint/save', formData, {
    headers: {
      token: token,
    }
  })
      .then(response => {
        console.log('订单id：',formData.orderId,'；理由：',formData.reason);
        formData.type = '';
        formData.reason = '';
        successMessage.value = 'Complaint submitted successfully!';
        emit('submitSuccess', response.data);
        console.log('投诉成功:', response);
      })
      .catch(error => {
        console.error('投诉失败:', error);
      });
}

function closeForm() {
  emit('close');
}
</script>

<template>
  <div class="flex-col group_7 mt-16-5">
    <form v-if="isVisible" @submit.prevent="submitForm" class="complaint-form">
      <!-- 表单内容 -->
      <div class="form-group">
        <label for="type">Type</label>
        <input id="type" type="text" v-model="formData.type" required>
      </div>
      <div class="form-group">
        <label for="reason">Reason</label>
        <input id="reason" type="text" v-model="formData.reason" required>
      </div>
      <div class="button-group">
        <button @click="closeForm" type="button" class="cancel-button">CANCEL</button>
        <button type="submit" class="submit-button">SUBMIT</button>
      </div>
      <!-- 投诉成功消息 -->
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
    </form>
  </div>
</template>


<style scoped>
.complaint-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.cancel-button,
.submit-button {
  padding: 8px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.cancel-button {
  background-color: #ccc;
  color: #fff;
}

.submit-button {
  background-color: #007bff;
  color: #fff;
}

.success-message {
  margin-top: 10px;
  color: green;
  font-weight: bold;
}
</style>