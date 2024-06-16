<template>
    <a-layout-header style="background: #fff; padding: 0" />
    <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>Task List</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            <h3 :style="{ marginBottom: '16px' }">Task List</h3>
            <a-list bordered :data-source="items" :style="{ maxWidth: '240px' }">
                <template #renderItem="{ item }">
                    <a-list-item :style="{ display: 'flex' }">{{ item.title }} <button @click="deleteTask(item)">
                            <DeleteFilled />
                        </button></a-list-item>

                </template>
            </a-list>
        </div>
    </a-layout-content>
</template>

<script setup>
import { DeleteFilled } from '@ant-design/icons-vue';
import 'ant-design-vue/dist/reset.css';

import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const items = computed(() => store.state.tasks.all);
const deleteTask = (item) => { store.commit('deleteTask', item) }
</script>