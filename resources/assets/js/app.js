require('./bootstrap');

import VueRouter from 'vue-router';

import App from './App.vue';
import Home from  './pages/Home.vue';
import About from './pages/About.vue';
import Crud from './pages/Crud.vue';
import NotFound from './pages/404.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/crud', component: Crud},
    {path: '*', component: NotFound}
];

// Router options
let router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

