import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as tf from '@tensorflow/tfjs'
// main.js에서 코드 작성 시 전역으로 사용

const app = createApp(App)
app.config.globalProperties.$tf = tf // this.$tf로 사용
app.use(store).use(router).mount('#app')
