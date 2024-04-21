import request from '../index'
export const getOrderDetails = () => {
    return request(
        {
            url: 'http://127.0.0.1:4523/m1/4275135-0-default/order/seller/search',
            method: 'get',
        }
    );
    //var axiosconfig = {
    //  headers: {
    //    "token":"eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoyLCJpZCI6MSwidXNlcm5hbWUiOiJtaXpvcmUiLCJleHAiOjE3MjE4NDcwNDR9.I8HmPZYllGnjcoEAn6o5TSJm2kbxMYkTuOzaRSx18bU",
    //    "User-Agent": "Apifox/1.0.0 (https://apifox.com)"
    //  },
    // method: 'get',
    //  url: 'http://127.0.0.1:4523/m1/4275135-3917058-default/order/seller/search' + params,
    //};
};