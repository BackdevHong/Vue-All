import { createApp } from "vue";
import { router } from "./routes";
import store from "./store";
import mitt from "mitt";

import App from "./App";

const app = createApp(App);

let emitter = mitt();
app.config.globalProperties.emitter = emitter;

app.use(router);
app.use(store);
app.mount("#app");
