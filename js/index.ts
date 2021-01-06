import './bootstrap.js';
import Vue from 'vue';

import App from './vue/App';

new Vue({
	render: (h: any) => h(App),
	created() {
	},
	mounted() {

	}
}).$mount('#app');