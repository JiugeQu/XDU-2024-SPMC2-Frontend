import request from '../index'
export const Deliver = (orderId) => {    
      return request(
        {  
        url: `/m1/4275135-3917058-default/order/seller/send/${orderId}`,  
        method: 'post',  
        });  
  };