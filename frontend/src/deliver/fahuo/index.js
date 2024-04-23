import request from '../index'

export const Deliver = (orderId) => {
      return request(
        {
        url: `/order/seller/send/${orderId}`,
        method: 'post',
        });
  };