import axios from 'axios';

const state = {
    countries: []
};

const getters = {
    allCountries: (state) => state.countries
};

const actions = {
    async fetchCountries({ commit }){
        const response = await axios.get('https://restcountries.eu/rest/v2/all');

        commit('setCountries', response.data);
    }
};

const mutations = {
    setCountries: (state, countries) => (state.countries = countries)
};

export default {
    state,
    getters,
    actions,
    mutations
}
