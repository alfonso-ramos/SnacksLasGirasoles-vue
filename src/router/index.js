import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/contacto', name: 'Contacto', component: ()=>import('../pages/Contacto.vue')},
    {path: '/menu', name: 'Menu',component: ()=>import('../pages/Menu.vue')},
    {path: '/elote', name: 'elotes', component: ()=>import('../pages/Menu/Elotes.vue')},
    {path: '/agridulce', name: 'Agridulce', component: ()=>import('../pages/Menu/Agridulce.vue')},
    {path: '/bebidas', name: 'bebidas', component: ()=>import('../pages/Menu/Bebidas.vue')},
    {path: '/caliente', name: 'caliente', component: ()=>import('../pages/Menu/Caliente.vue')},
    {path: '/helado', name: 'helado', component: ()=>import('../pages/Menu/Helado.vue')},
    {path: '/postres', name: 'postres', component: ()=>import('../pages/Menu/Postres.vue')},
    {path: '/tostitos', name: 'tostitos', component: ()=>import('../pages/Menu/Tostitos.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router