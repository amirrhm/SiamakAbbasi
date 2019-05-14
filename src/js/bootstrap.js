import lodash from 'lodash';
import moment from 'moment-jalaali';
import axios from 'axios';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import VeeValidate from 'vee-validate';
import messagesFa from './lang/validation/fa';
import './router';
// import BootstrapVue from 'bootstrap-vue';
// import 'node_modules/bootstrap/scss/bootstrap';


require('es6-promise').polyfill();
window._ = lodash;
window.moment = moment;
moment.loadPersian();
window.axios = axios;
window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueI18n);
require('./i18n');

Vue.use(VeeValidate, {
  locale: 'fa',
  dictionary: {
    fa: messagesFa,
  },
});