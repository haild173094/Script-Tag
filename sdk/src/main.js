import { createApp } from 'vue'
import App from './App.vue'

import AppConfig from './configs/app'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// import PolarisVue from '@qikify/polaris-vue'
// import '@qikify/polaris-vue/dist/style.css'


createApp(App).mount(`#${AppConfig.ELEMENT_ID}`)

console.log(AppConfig.PORTAL_SERVER);