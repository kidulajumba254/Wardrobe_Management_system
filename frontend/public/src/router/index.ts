import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import DashboardView from '../views/Dashboard.vue'; 
import HomeView from '../views/HomeView.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';


const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/dashboard', component: DashboardView },
  { path: '/login', component: Login },
  { path: '/register', component: Register } 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;