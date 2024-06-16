<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="task-list">
          <pie-chart-outlined />
          <span><RouterLink to="/">Task List</RouterLink></span>
        </a-menu-item>
        <a-menu-item key="create-list">
          <desktop-outlined />
          <span><RouterLink to="/create-task">Create Task</RouterLink></span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <RouterView />
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script setup>
import { ref } from 'vue';
const collapsed = ref(false);
const selectedKeys = ref(['task-list']);
</script>
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
