import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.config.globalProperties.$appName = 'My Vue App'
app.mount('#app')
