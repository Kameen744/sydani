// 'ninter/aos/aos.js'
// 'ninter/bootstrap/js/bootstrap.bundle.min.js'
// 'ninter/glightbox/js/glightbox.min.js'
// 'ninter/isotope-layout/isotope.pkgd.min.js'
// 'ninter/swiper/swiper-bundle.min.js'

// 'ninter/js/main.js'
// require('./../../public/gip/js/jquery.min.js');
window.Swiper = require('./../../public/sydani/assets/vendor/swiper/swiper-bundle.min.js');
window.GLightbox = require('./../../public/sydani/assets/vendor/glightbox/js/glightbox.min.js')
window.AOS = require('./../../public/sydani/assets/vendor/aos/aos.js')
require('./../../public/sydani/assets/vendor/bootstrap/js/bootstrap.bundle.min.js')
window.Isotope = require('./../../public/sydani/assets/vendor/isotope-layout/isotope.pkgd.min.js')
require('./../../public/gip/js/main.js')

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Sydani-GIP';
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => import(`./Gip/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({ color: 'darkblue' });
