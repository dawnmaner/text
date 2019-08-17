import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//懒加载  @=src
const Login=()=>import('@/views/login/Login.vue')
const Homepage=()=>import('@/components/homepage/Homepage.vue')

export default new VueRouter({
    routes:[
        {path:'/login',
        component:Login
        },
        {
            path:'/homepage',
            component:Homepage,
            children:[
                {path:'login',
                    component:Login
                },
            ]
        }
    ]
})