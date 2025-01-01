import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './css/main.css'
import './css/animations.css'
import './css/responsive.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app')