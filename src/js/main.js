import {createApp} from 'vue';
import {createWebHistory, createRouter} from 'vue-router';

// Vue components
import App from './vue/App.vue'; // Base component
import Home from './vue/Home.vue';
import About from './vue/About.vue';

// Helper functions
import {greet} from './fn.js';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: '/',      component: Home},
		{path: '/about', component: About},
	]
});

function main() {
	greet('my_app');
	let app = createApp(App);
	app.use(router);
	app.mount('#app');
}

document.addEventListener('DOMContentLoaded', main);
