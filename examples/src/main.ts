import { createApp } from 'vue'
import './style.css'
import VantUI from 'vant'
import 'vant/lib/index.css'
// import VlibUI from '@vlib/ui'
import App from './App.vue'

const app = createApp(App)
app.use(VantUI)
// app.use(VlibUI)

app.mount('#app')
