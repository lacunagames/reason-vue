import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import prismic from "./prismic";

const app = createApp(App)

app.use(prismic);
app.use(createPinia())
app.use(router)

app.mount('#app')
