import { createApp } from 'vue';
import router from './router';
import './assets/main.css';
import App from './App.vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const app = createApp(App);
app.use(router);
app.mount('#app');
