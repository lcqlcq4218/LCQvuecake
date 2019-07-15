import Vue from 'vue'
import Router from 'vue-router'
import header from './components/header'
import index from './views/index'
import product from './views/product'
import details from './views/details'
import login from './views/login'
import register from './views/register'
import kefu from './views/kefu'
import activity from './views/activity'
import shopcart from './views/shopcart'
import footer from './components/footer'
import NotFound from './views/notFound'
import personal from './views/personal'
import backstage from './houtai/backstage'
import message from './components/message'
import addr from './views/addr'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/addr", component:addr},
    {path:"/header", component:header},
    {path:"/",component: index},
    {path:"/index", component:index},
    {path:"/product", component:product},
    {path:"/details/:pid", component:details, props:true},
    {path:"/login",component:login},
    {path:"/register",component:register},
    {path:"/kefu",component:kefu},
    {path:"/activity",component:activity},
    {path:"/shopcart",component:shopcart},
    {path:"/footer",component:footer},
    {path:"/backstage",component:backstage},
    {path:"/message",component:message},
    {path:"/personal",component:personal},
    {path:"*", component:NotFound}
  ]
})
