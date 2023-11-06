import { createApp } from 'vue'
import './style.css'
import router from './router'
import store from './store'
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from './plugins/font-awesome'
import 'bootswatch/dist/sketchy/bootstrap.min.css'; // Added this :boom:

createApp(App)
    .use(router)
    .use(store)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
