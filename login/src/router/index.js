import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/login/login.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;