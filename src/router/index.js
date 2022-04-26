import {createRouter, createWebHistory} from 'vue-router';
import Characters from "../components/Characters.vue";
import Details from "../components/Details.vue";

const routes = [
    {
        path: '/',
        name: 'Characters',
        component: Characters
    },
    {
        path: '/details/:id',
        name: 'Details',
        component: Details
    }
];

const router = createRouter({
    history: createWebHistory(''),
    routes,
});

export default router;