import Vue from 'vue'
import VueRouter from 'vue-router'

//处理重复路由问题
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const Home = ()=>import('views/home/Home');
const Category = ()=>import('views/category/Category');
const Cart = ()=>import('views/cart/Cart');
const Profile = ()=>import('views/profile/Profile');

const routes = [
 {
   path:'',
   redirect:'/home'
 },
 {
   path:'/home',
   component:Home
 },
 {
  path:'/category',
  component:Category
},
{
  path:'/cart',
  component:Cart
},
{
  path:'/profile',
  component:Profile
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
