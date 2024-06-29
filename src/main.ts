import { Component, createApp, markRaw } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes';
import { createPinia } from 'pinia';
import "./style.css"

const pinia = createPinia();
pinia.use(({ store }) => {
    store.router = markRaw(router);
});

const app = createApp(App as Component);

app.use(pinia);
app.use(router);

app.mount('#app');
