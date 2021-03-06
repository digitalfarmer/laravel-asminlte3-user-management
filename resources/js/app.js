require('./bootstrap');

window.Vue = require('vue');
import { Form , HasError, AlertError } from 'vform'
window.form = Form;

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes =[
    { path: '/dashboard',   component: require('./components/Dashboard.vue').default},
    { path: '/profile',     component: require('./components/Profile.vue').default},
    { path: '/webservice',  component: require('./components/Webservices.vue').default},
    { path: '/users',       component: require('./components/Users.vue').default},
]

const router = new VueRouter({
    mode:'history',
    routes
})

const app = new Vue({
    el: '#ades',
    router
})
