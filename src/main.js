import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'




createApp(App).use(store).use(router).mount('#app')

// :class="{label_error: ...}"
// :class="{input_error: ...}" 
// Проверка введено ли что нибудь в поле email
// this.errors.email === null && this.errors.name === null && this.errors.password === null && this.errors.passwordСonfirm === null
