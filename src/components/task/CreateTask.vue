<template>
    <a-layout-header style="background: #fff; padding: 0" />
    <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>Create Task</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            <h3 :style="{ marginBottom: '16px' }">Create Task</h3>
            <a-form :model="formData" name="basic" autocomplete="off" @finish="onSubmit" @finishFailed="onError"
                :style="{ maxWidth: '240px' }">

                <a-form-item label="Task" name="task" placeholder="Write task here"
                    :rules="[{ required: true, message: 'Required Field!' }]">
                    <a-input v-model:value="formData.task" />
                </a-form-item>

                <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                    <a-button type="primary" html-type="submit">Create New Task</a-button>
                </a-form-item>
            </a-form>
        </div>
    </a-layout-content>
</template>

<script setup>
import router from "@/routes";
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

const formData = ref({
    task: '',
    username: "",
    password: "",
    remember: true,
});

const onSubmit = async (_formData) => {
    try {
        store.commit('createTask', _formData);
        await router.push({ path: '/', replace: true });
    } catch (error) {
        console.log(error);
    }
};

const onError = (errorInfo) => {
    console.log("Failed:", errorInfo);
};
</script>