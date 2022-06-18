import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// 引入Antd-design-vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/css/common.scss'

const pinia = createPinia()
const app = createApp(App)

app.use(Antd)
app.use(router)
app.use(pinia)

app.mount('#app')
