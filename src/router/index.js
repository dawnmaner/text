import Vue from 'vue'
import VueRouter from 'vue-router'
import AddEmployee from "../views/employee/AddEmployee";
// @ = src
// 懒加载
const Login = () => import('@/views/login/Login')
const Department = () => import('@/views/department/Department')
const Employee = () => import('@/views/employee/Employee')
const Homepage = () => import('@/components/homepage/Homepage')
// 字典目录
const SystemDict = () => import('@/views/sysdict/SystemDict')


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            component: Homepage,
            children: [
                {
                    path: 'login',
                    component: Login
                },
                {
                    path: 'department',
                    meta: {
                        title: '部门管理',
                        name: '/department'
                    },
                    component: Department
                },
                {
                    path: 'sysdict',
                    meta: {
                        title: '字典目录',
                        name: '/sysdict'
                    },
                    component: SystemDict
                },
                {
                    path: 'employee',
                    meta: {
                        title: '员工管理',
                        name: '/employee'
                    },
                    component: Employee
                },
                {
                    path: 'employee/add',
                    meta: {
                        title: '员工添加',
                        name: '/employee'
                    },
                    component: AddEmployee
                },

            ]
        }
    ]
})