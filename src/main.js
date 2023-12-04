//引入初始化样式文件
import "@/styles/common.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
//引入懒加载插件
import { lazyPlugin } from "./directives";
//测试api调用
//全局插件引入
import { componentPlugin } from "./components";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(lazyPlugin);
app.use(componentPlugin);
app.mount("#app");
