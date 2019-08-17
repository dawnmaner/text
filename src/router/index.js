import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//懒加载  @=src
const Login=()=>import('@/views/login/Login.vue')
const Homepage=()=>import('@/components/homepage/Homepage.vue')
const Department=()=>import('@/views/department/Department.vue')
const Employee=()=>import('@/views/employee/Employee.vue')
export default new VueRouter({
    routes:[
        {path:'/login',
        component:Login
        },
        {
            path:'/',
            component:Homepage,
            children:[
                {path:'login',
                    component:Login
                },
                {path:'department',
                    component:Department
                },
                {path:'employee',
                    component:Employee
                },
            ]
        }
    ]
})