import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/login.vue';
import Register from '../views/register.vue';
import Home from '../views/Home/home.vue';
import Detail from '../views/Details/detail.vue';
import Order from '../views/Order/order.vue';
import Order_confirm from '../views/order_confirm/order_confirm.vue';
import Goods from '../views/Goods/Goods.vue';
import Delivers from '../views/Delivers/Delivers.vue';

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
    path: '/order_confirm',
    name: 'order_confirm',
    component: Order_confirm,
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;