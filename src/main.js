import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './core/router'
import store from './core/stores'

const app = createApp(App).use(store).use(vuetify).use(router)

app.mount('#app')
