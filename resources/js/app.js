require('./bootstrap');

import VueRouter from 'vue-router';
import router from './routes';
import Index from './Index';
import Vue from 'vue';

window.Vue = require('vue').default;

Vue.use(VueRouter);

// Global components
import StarRating from './components/shared/StarRating';
Vue.component('star-rating', StarRating);

// Moment.js library
import moment from "moment";
Vue.filter("fromNow", value => moment(value).fromNow());

// Font Awesome Icons
import './font-awesom';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon);


const app = new Vue({
    el: '#app',
    router,
    components: {
        "index": Index
    }
});
