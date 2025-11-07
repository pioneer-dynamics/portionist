import './bootstrap';
import '../css/app.css';
import 'flowbite';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import LogoSmall from '../static/logo.small.png';

// PWA Service Worker Registration
// Only register service worker in production builds
if ('serviceWorker' in navigator && import.meta.env.PROD) {
    import('virtual:pwa-register').then(({ registerSW }) => {
        const updateSW = registerSW({
            onNeedRefresh() {
                if (confirm('New content available. Reload to update?')) {
                    updateSW(true);
                }
            },
            onOfflineReady() {
                console.log('App ready to work offline');
            },
        });
    });
}

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
