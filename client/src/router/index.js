import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import AdminForm from '../components/AdminForm.vue';
import StudentForm from '../components/StudentForm.vue';
import User from '../components/User.vue';
import DataManager from '../components/DataManager.vue'; // <-- Import the new component

const routes = [
  { path: '/', component: Home },
  { path: '/admin', component: AdminForm },
  { path: '/student', component: StudentForm },
  { path: '/user', component: User },
  { path: '/manage', component: DataManager } // <-- Add the new route
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;