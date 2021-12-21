import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';
import ProjectIndex from '@/views/Projects/Index.vue';
import ProjectList from '@/views/Projects/Projects.vue';
import DiningSelector from '@/views/Projects/DiningSelector.vue';
import Resume from '@/views/Resume.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectIndex,
    redirect: '/projects/',
    children: [
      {
        path: '',
        name: 'ProjectList',
        component: ProjectList,
      },
      {
        path: 'dining-selector',
        name: 'DiningSelector',
        component: DiningSelector,
      },
    ],
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
