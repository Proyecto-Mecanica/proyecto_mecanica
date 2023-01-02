import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router'
import VueKinesis from 'vue-kinesis';
import './styles/main.scss'

createApp(App).use(router).use(VueKinesis).mount('#app')
