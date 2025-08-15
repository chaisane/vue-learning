import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.config.globalProperties.$appName = 'My Vue App1'
app.use(router)
app.mount('#app')
