import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'home', component: () => import('../views/Home.vue') },
  { path: '/services', name: 'services', component: () => import('../views/Services.vue') },
  { path: '/services/:id', name: 'previewService', component: () => import('../views/Preview-service.vue') },
  { path: '/projects', name: 'projects', component: () => import('../views/Projects.vue') },
  { path: '/team', name: 'team', component: () => import('../views/Team.vue') },
  { path: '/contact', name: 'contact', component: () => import('../views/Contact.vue') },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
