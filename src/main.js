import { createApp } from "vue";
import { createWebHistory } from "vue-router";
import { createPinia } from "pinia";

import createRouter from "./pages/routes.js";
import App from "./App.vue";

const store = createPinia();
const router = createRouter(createWebHistory());
const app = createApp(App);

app.use(router).use(store).mount("#app");
