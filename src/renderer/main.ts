import { createApp } from 'vue'
import { createPinia } from 'pinia';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import App from './App.vue';

const app = createApp(App);
app.use(Antd);
app.use(createPinia());
app.mount('#app');
