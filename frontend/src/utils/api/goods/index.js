import request from '../index'
export const getGoodsList = () => {
  return request({
    url: 'http://localhost:8081/item/management',
    method: 'get',
    // params:params
  });
};

export const  updateGoodsStatus1= () => {
  return request({
    url: 'http://localhost:8081/item/status/1',
    method: 'post',
    // params:params
  });
};
export const  updateGoodsStatus2= () => {
  return request({
    url: 'http://localhost:8081/item/status/2',
    method: 'post',
    // params:params
  });
};
