import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import VueLazyload from "vue-lazyload";
import { queryClient } from "./providers/query";
import { lazyloadConfig } from "./providers/lazyload";
import router from "./providers/router/router";
import "@/app/styles/style.scss";
import App from "./App.vue";

const app = createApp(App);

app.use(VueQueryPlugin, { queryClient });
app.use(router);
app.use(VueLazyload, lazyloadConfig);
app.mount("#app");
