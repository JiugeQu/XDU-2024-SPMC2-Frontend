import request from '../index'
export const getGoodsList = () => {
  return request({
    url: 'http://localhost:8081/item/management',
    method: 'get',
    // params:params
  });
};
export const  updateGoodsStatus= () => {
  return request({
    url: 'http://localhost:8081/item/status/1',
    method: 'post',
    // params:params
  });
};

