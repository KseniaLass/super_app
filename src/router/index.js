import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import Calculate from '../views/Calculate'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {path: '/home', component: Home},
        {path: '/', component: Login},
        {path: '/calculate', component: Calculate}
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

export default router
