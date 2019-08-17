import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//懒加载  @=src
const Login=()=>import('@/views/login/Login.vue')

export default new VueRouter({
    routes:[
        {path:'/login',
        component:Login
        }
    ]
})