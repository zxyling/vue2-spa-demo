/**
 * @file router
 * @author windwithfo(windwithfo@yeah.net)
 */

import Vue       from 'vue';
import VueRouter from 'vue-router';

// components
const Demo = (resolve) => {
    require.ensure(['../pages/demo/Demo'], () => {
        resolve(require('../pages/demo/Demo'));
    });
};

const About = (resolve) => require(['../pages/about/About'], resolve);

Vue.use(VueRouter);

const routes = [
    {
        path: '/demo/',
        name: 'demo',
        component: Demo
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
];

const router = new VueRouter({
    routes
});

export default router;
