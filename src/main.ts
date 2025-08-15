import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$appName = 'My Vue App1'
app.use(router)
app.mount('#app')
