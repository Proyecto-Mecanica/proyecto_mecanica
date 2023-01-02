import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '',
        name: 'home-layout',
        component: () => import('../src/layouts/HomeLayout.vue'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('../src/views/Home.vue')
            },
            {
                path: 'about',
                name: 'about',
                component: () => import('../src/views/About.vue')
            },
            {
                path: 'lessons',
                name: 'lessons',
                component: () => import('../src/views/Lessons.vue')
            }
        ]
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
})

export default router
