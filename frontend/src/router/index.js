import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/books',
        name: 'books',
        components: {
            default: () => import(/* webpackChunkName: "auth" */ '../views/books/books-list'),
        }
    },
    {
        path: '/books/:id',
        name: 'view-book',
        components: {
            default: () => import(/* webpackChunkName: "auth" */ '../views/books/book'),
        }
    },
    {
        path: '/character/:id',
        name: 'view-book-characters',
        components: {
            default: () => import(/* webpackChunkName: "auth" */ '../views/characters/characters-list'),
        }
    },
    {
        path: '*',
        redirect: '/books',
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
