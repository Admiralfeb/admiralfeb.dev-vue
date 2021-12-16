import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import tailwind THEN core styles. import order important here.
import "./assets/tailwind.css";
import "./styles.css";

createApp(App).use(store).use(router).mount("#app");
