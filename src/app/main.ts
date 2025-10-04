import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { queryClient } from "./providers/query";
import router from "./providers/router/router";
import "@/app/styles/style.scss";
import App from "./App.vue";

const app = createApp(App);

app.use(VueQueryPlugin, { queryClient });
app.use(router);
app.mount("#app");
