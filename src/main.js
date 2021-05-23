import { createApp } from 'vue'
import App from './App.vue'
import Icon from "./components/Icon"
import './index.css'

const app = createApp(App)

app.component('Icon', Icon)
app.mount('#app')
