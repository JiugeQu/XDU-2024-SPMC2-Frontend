import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/login/login.vue';
import Register from '../pages/login/register.vue';

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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;