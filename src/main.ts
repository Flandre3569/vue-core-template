import { createApp } from "vue";
import App from "./App.vue";

// pinia
import { createPinia } from "pinia";
const pinia = createPinia();

// router
import router from "./router";

// 挂载到vue根实例
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
