import Vue from 'vue'
import store from '../store/index'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../components/Login";
import Secure from "../components/Secure";
import About from "../views/About";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            hideForAuth: true
        }
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/secure',
        name: 'secure',
        component: Secure,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            requiresAuth: true
        }
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('login')
    } else {
        next()
    }
    if (to.matched.some(record => record.meta.hideForAuth)) {
        if (store.getters.isLoggedIn) {
            next('home');
        } else {
            next();
        }
    } else {
        next();
    }
})

export default router
