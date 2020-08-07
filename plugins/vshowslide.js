import Vue from 'vue';
import VShowSlide from 'v-show-slide';

Vue.use(VShowSlide, {
	customEasing: {
		exampleEasing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
	}
});
