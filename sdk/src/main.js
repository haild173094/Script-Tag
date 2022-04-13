import { createApp } from 'vue'
import App from './App.vue'
import './bootstrap'
import AppConfig from './configs/app';


createApp(App).mount(`#${AppConfig.ELEMENT_ID}`)
