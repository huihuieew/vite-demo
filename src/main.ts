import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router/index";
import pinia from "./store/main";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import SvgIcon from "@/components/SvgIcon/index.vue";

const app = createApp(App);
Object.keys(ElementPlusIconsVue).forEach(key => {
    app.component(key, ElementPlusIconsVue[key as keyof typeof ElementPlusIconsVue]);
})

app.use(pinia).use(router).component('svg-icon', SvgIcon).mount("#app");
