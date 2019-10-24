import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home'

Vue.use(VueRouter)

const router = new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/',
            title : 'Home',
            name : 'home',
            component : Home
        
        }
    ]
})

export default router