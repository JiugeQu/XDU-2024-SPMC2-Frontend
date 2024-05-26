import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/login.vue';
import Register from '../views/register.vue';
import Home from '../views/Home/home.vue';
import Detail from '../views/Details/detail.vue';
import Pay from '../views/pay/pay.vue'
import Order from '../views/Order/order.vue';
import Order_confirm from '../views/order_confirm/customer_order_list_await.vue';
import Order_done from '../views/order_confirm/customer_order_list_done.vue';
import Order_payment from '../views/order_confirm/customer_order_list_payment.vue';
// import Goods from '../views/Goods/Goods.vue';
// import Delivers from '../views/Delivers/Delivers.vue';
import Goods from '../Goods/Goods.vue';
import Delivers from '../Delivers/Delivers.vue';
import Address from '../views/Address/address.vue';
import Newaddress from '../views/Address/addnew.vue';
import Shoppingcart from '../views/Cart/cart.vue';
import ManagerHome from '../views/ManagerHome/ManagerHome.vue';
import ManagerComplain from '../views/ManagerComplain/ManagerComplain.vue';
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path:'/home',
    name: 'home',
    component:Home,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/order/:id',
    name: 'order',
    component: Order,
  },
  {
    path: '/pay',
    name: 'pay',
    component: Pay,
  },
  {
    path: '/order_confirm',
    name: 'order_confirm',
    component: Order_confirm,
  },
  {
    path:'/order_done',
    name:'order_done',
    component: Order_done,
  },
  {
    path:'/order_payment',
    name:'order_payment',
    component: Order_payment,
  },
  {
    path: '/goods',
    name: 'goods',
    component: Goods,
  },
  {
    path: '/delivers',
    name: 'delivers',
    component: Delivers,
  },
  {
    path:'/address',
    component:Address,
  },
  {
    path:'/addnew',
    component:Newaddress,
  },
  {
    path: '/shoppingcart',
    name: 'Shoppingcart',
    component: Shoppingcart,
  },
  {
    path: '/managercomplain',
    name: 'ManagerComplain',
    component: ManagerComplain,
  },
  {
    path: '/managerhome',
    name: 'ManagerHome',
    component: ManagerHome,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;