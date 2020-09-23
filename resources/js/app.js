require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes =[
    { path: '/dashboard', component: require('./components/Dashboard.vue').default},
    { path: '/profile', component: require('./components/Profile.vue').default},
    { path: '/webservice', component: require('./components/Webservices.vue').default},
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    router
})
