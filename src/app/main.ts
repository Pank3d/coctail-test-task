import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueLazyload from 'vue-lazyload'
import { piniaColadaPlugin } from './providers/pinia'
import { lazyloadConfig } from './providers/lazyload'
import { setupErrorHandler } from './providers/errorHandler'
import router from './providers/router/router'
import '@/shared/styles/style.scss'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

setupErrorHandler(app)
app.use(pinia)
app.use(piniaColadaPlugin)
app.use(router)
app.use(VueLazyload, lazyloadConfig)
app.mount('#app')
