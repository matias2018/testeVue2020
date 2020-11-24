<template>
    <div>
        
        <div class="search">
            <form>
                <input type="text" v-model="search" placeholder="Search here for country name...">
            </form>
        </div>

        <ul class="countries">
            <!-- for each country, create a link with an li inside -->
            <router-link 
                :to="{
                    name: 'Details', 
                    params:{
                        id:country.name,
                        flag:country.flag,
                        alpha2Code:country.alpha2Code,
                        capital:country.capital,
                        region:country.region,
                        subregion:country.subregion,
                        population:country.population
                        } 
                    }" 
                v-for="country in filteredCountries" 
                :key="country.id"
            >
                <li class="country">
                    <div class="link">
                        {{ country.name }}
                    </div>
                
                    <div class="flag_display">
                        <img v-bind:src="country.flag" alt="" class="country_flag">
                    </div>
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Countries",
    data(){
        return {
            search:''
        }
    },
    methods: {
        ...mapActions(['fetchCountries'])
    },
    computed: { 
        ...mapGetters(['allCountries']),
            filteredCountries: function(){
                return this.allCountries.filter((country) => {
                    return country.name.toLowerCase().match(this.search.toLowerCase())
                });
            }
        },
    created() {
        this.fetchCountries();
    }
};

</script>
<style scoped>
form {
        display: flex;
        width: 100vw;
        margin-bottom: 2rem;
        background: #fff;
        position: fixed;
        top: 11vh;
        left: 0;
        z-index: 1;
    }

    input{
        padding: 2rem;
        border: none;
    }
    input[type="text"]{
        flex: 10;
    }

    input[type="text"]:focus{
        outline: none;
        box-shadow: inset 0 0 5px rgb(97, 165, 120); 
    }

    .countries {
        width: 90vw;
        display: grid;
        margin: 0 auto;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
    }

    .country {
        display: flex;
        justify-content: space-between;
        background: #41b883;
        padding: 1.5rem;
        margin: 1rem 0;
        text-align: center;
        position: relative;
        cursor: pointer;
        font-size: 1.6rem;
        font-weight: bold;
        color: #fff;
    }

    .country:hover{
        background: #70e9c8;
    }

    .link{
        width: 100%;
        height: 100%;
    }

    .flag_display {
        height: 100%;
        width: 40px;
    }

    .country_flag {
        width: 100%;
    }
    
    @media (min-width: 768px) {
        .countries {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1rem;
    }
}
</style>