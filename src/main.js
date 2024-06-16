import { createApp } from 'vue';
import App from './App.vue';
import store from './store'
import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";
import 'ant-design-vue/dist/reset.css';
import router from './routes';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Antd).mount("#app");
