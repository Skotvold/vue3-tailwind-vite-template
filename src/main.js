import { createApp } from 'vue'
import App from '@/App.vue'
import Router from '@/router/index.js'
import './tailwind.css'

const app = createApp(App)
app.use(Router)
app.mount('#app')
// createApp(App).use(router).mount('#app')
