import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import router from './router'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import store from './store'

createApp(App)
  .use(router)
  .use(Quasar)
  .use(store)
  .mount('#app')
