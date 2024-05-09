import request from '../index'

export const Deliver = (orderId, delinum) => {
      return request(
        {
      //   url: `/order/seller/send/${orderId}`,
      //  url: `/order/seller/send/4?orderId=${orderId}&delinum=${delinum}`,
      url: `/order/seller/send/?orderId=${orderId}&delinum=${delinum}`,
      method: 'post',
        });
  };