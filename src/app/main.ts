import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./providers/router/router";
import "@/app/styles/style.scss";
import App from "./App.vue";

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
