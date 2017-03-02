import Vue from 'vue';
import router from './router';

Vue.component('app', require('./components/App.vue'));
Vue.component('navigation', require('./components/Navigation.vue'));

new Vue({
    el: '#app',
    template: '<app/>',
    router
});
