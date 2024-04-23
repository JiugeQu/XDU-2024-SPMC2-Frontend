import request from '../index'
export const getGoodsList = () => {
  return request({
    url: 'http://localhost:8081/item/management',
    method: 'get',
    // params:params
  });
};

export const  updateGoodsStatus1= (id) => {
    return request({
        url: '/item/status/onshelf/${id}',
        // url: 'http://localhost:8081/item/status/onshelf/1',
        method: 'post',
        // params:params
    });
}
export const  updateGoodsStatus2= (id) => {
        return request({
            url: '/item/status/offshelf/${id}',
            method: 'post',
            // params:params
        });
};
// export const  updateGoodsStatus1= () => {
//   return request({
//     url: 'http://localhost:8081/item/status/onshelf',
//     method: 'post',
//     // params:params
//   });
// };
