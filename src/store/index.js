import Vuex from 'vuex';
import Vue from 'vue';
import Countries from './modules/countries.js';

// load vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
    modules: {
        Countries
    }
});
