import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import VueLazyload from "vue-lazyload";
import { queryClient } from "./providers/query";
import { lazyloadConfig } from "./providers/lazyload";
import { setupErrorHandler } from "./providers/errorHandler";
import router from "./providers/router/router";
import "@/app/styles/style.scss";
import App from "./App.vue";

const app = createApp(App);

setupErrorHandler(app);
app.use(VueQueryPlugin, { queryClient });
app.use(router);
app.use(VueLazyload, lazyloadConfig);
app.mount("#app");
