import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


createApp(App).use(store).use(router).mount('#app')
