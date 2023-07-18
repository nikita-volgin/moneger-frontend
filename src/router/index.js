import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from "../components/HelloWorld.vue";

const routes = [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path: '/home',
        component: () => import('../components/Test.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default  router