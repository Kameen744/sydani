import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';

import { quillEditor } from 'vue3-quill'


import { createStore } from "vuex";
const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Sydani';
const store = createStore({
    state: {
        activeNavLink: -1
    },
    mutations: {
        setActiveNavLink(state, payload) {
            state.activeNavLink = payload;
        },
    },
    // actions: {
    //     setCurrentUrl(state, payload) {
    //         state.commit('setCurrentUrl', payload);
    //     }
    // },
    // getters: {
    //     getCurrentUrl: state => state.currentUrl,
    // }
});
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => import(`./Dashboard/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(quillEditor)
            .use(store)
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#ff9005' });
