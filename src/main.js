import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router'
import VueKinesis from 'vue-kinesis';
import './styles/main.scss'
import { plugin as Slicksort } from 'vue-slicksort';

createApp(App).use(router).use(VueKinesis).use(Slicksort).mount('#app')
