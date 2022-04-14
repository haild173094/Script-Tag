import { createApp } from 'vue'
import App from './App.vue'
import './bootstrap'
import AppConfig from './configs/app';
import PolarisVue from '@qikify/polaris-vue'
// import '@qikify/polaris-vue/dist/style.css'


createApp(App).use(PolarisVue).mount(`#${AppConfig.ELEMENT_ID}`)

console.log(AppConfig.PORTAL_SERVER);