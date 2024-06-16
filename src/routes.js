import { createRouter, createWebHistory } from 'vue-router'

import TaskList from './components/task/TaskList.vue'
import CreateTask from './components/task/CreateTask.vue'

const routes = [
  { path: '/', component: TaskList },
  { path: '/create-task', component: CreateTask },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;