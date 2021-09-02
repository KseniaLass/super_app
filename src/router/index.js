import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {path: '/', component: Home},
        {path: '/login', component: Login}
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

export default router
