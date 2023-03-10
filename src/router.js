import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import PostList from './pages/PostList.vue';
import AboutUs from './pages/AboutUs.vue';
import SinglePage from './pages/SinglePage.vue';
import ContactUs from './pages/ContactUs.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/posts',
            name: 'posts',
            component: PostList
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactUs
        },
        {
            path:'/posts/:slug',
            name: 'single-page',
            component: SinglePage

        },
        {
            path: "/*",
            name: "not-found",
            component: NotFound
        }
    ]
});

export { router };