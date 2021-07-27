import { createApp } from 'vue'
import vuetify from './core/plugins/vuetify'
import App from './App.vue'
import router from './core/router'
import store from './core/stores'
import ApiService from './core/services/api.service'

ApiService.init();

const app = createApp(App).use(store).use(vuetify).use(router)

app.mount('#app')
