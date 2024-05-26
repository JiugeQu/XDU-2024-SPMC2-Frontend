<template>
  <div >
    <div >
    <select 
      v-model="selectedAddress" 
      @focus="fetchAddresses" 
      @change="handleAddressSelect" 
      class="address-dropdown"
      >
      <option value="" disabled>Select an address</option>
      <option v-for="address in addresses" :key="address.id" :value="address.addrDesc">
        {{ address.addrDesc }}
      </option>
    </select>
  </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: 'AddressDropdown',
  emits: ['address-selected'],
  setup(props, { emit }) {
    const addresses = ref([]);
    const selectedAddress = ref(null);

    const fetchAddresses = async () => {
      if(addresses.value.length === 0)
      {
        const config = {
        method: 'get',
        url: 'http://localhost:8081/address/search',
        headers: {
          'token': 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoyLCJpZCI6NCwidXNlcm5hbWUiOiJtaXpvcmUxIiwiZXhwIjoxNzIzMDQzNjg2fQ.FgBVQRQMoUUPORwf8yyzP5gPncXbStjRn11tZtJrmiw'
        },
        params: {
          userId: -1  // 这里假设用户ID为1，实际S使用中应动态传入
        }
      };

      try {
        const response = await axios(config);
        console.log('Full response:', response); // 打印完整的响应信息

        if (response.data && Array.isArray(response.data)) {
          addresses.value = response.data;
          console.log('Fetched addresses:', response.data);  // 打印返回的数据
        } else {
          console.error('Unexpected data format:', response.data);
        }
      } catch (err) {
        console.error('Error fetching addresses:', err);
      }
      }
    };

    const handleAddressSelect = () => {
      emit('address-selected', selectedAddress.value);
    };

    return {
      addresses,
      selectedAddress,
      fetchAddresses,
      handleAddressSelect
    };
  }
};
</script>

<style scoped>
.address {
  position: relative;
  display: inline-block;
  width: 200px;
}

.address-dropdown{
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 9999px; /* 两边半圆效果 */
  background-color: #fff;
  cursor: pointer;
  text-align: center;
  height: 4rem;
  width: 31rem;
  margin-left: 2rem;
  font-size:1.1rem;
}

</style>
