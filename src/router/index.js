/*
 * @Author: your name
 * @Date: 2021-01-04 17:13:45
 * @LastEditTime: 2021-01-21 15:45:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import("views/home/Home")
const Category = ()=>import('views/category/Category')
const Profile = ()=>import('views/profile/Profile')
const Cart = ()=>import('views/cart/Cart')
const Detail = ()=>import('views/detail/Detail')
Vue.use(VueRouter)
const routes = [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/detail/:id',
        component:Detail
    }
    
]
const router = new VueRouter({
    routes,
    mode:"history"
})

export default router