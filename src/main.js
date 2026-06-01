import { createApp } from 'vue'
import App from './App.vue'

import { VisuallyJsPlugin } from "@visuallyjs/browser-ui-vue";

const app = createApp(App);
app.use(VisuallyJsPlugin);
app.mount('.vjs-kanban')


