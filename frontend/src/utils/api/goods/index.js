import request from '../index'
export const getGoodsList = () => {
  return request({
    url: 'http://127.0.0.1:4523/m1/4275135-0-default/item/management',
    method: 'get',
    // params:params
  });
};
export const  updateGoodsStatus= () => {
  return request({
    url: 'http://127.0.0.1:4523/m1/4275135-0-default/item/status/1',
    method: 'post',
    // params:params
  });
};

