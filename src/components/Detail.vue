<template>
    <div class="country">
    <h1>This is details for: {{ this.$route.params.id }}</h1>
    <img :src="this.$route.params.flag" alt="">
    <table class="details">
      <tr>
        <th class="prop">Country</th>
        <th class="propValue">{{ this.$route.params.id }}</th>
      </tr>
      <tr>
        <td class="prop">Code</td>
        <td class="propValue">{{ this.$route.params.alpha2Code }}</td>
      </tr>
      <tr>
        <td class="prop">Capital</td>
        <td class="propValue">{{ this.$route.params.capital }}</td>
      </tr>
      <tr>
        <td class="prop">Region</td>
        <td class="propValue">{{ this.$route.params.region }}</td>
      </tr>
      <tr>
        <td class="prop">Sub-Region</td>
        <td class="propValue">{{ this.$route.params.subregion }}</td>
      </tr>
      <tr>
        <td class="prop">Population</td>
        <td class="propValue">{{ this.$route.params.population }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
      data() {
    return {
      countryId: this.$route.params.id
    }
  },
  computed: { 
            detailedCountry: function(){
                return this.allCountries.find(
                  country => country.name === this.countryId
                )
            }
        },
}
</script>

<style lang="scss" scoped>
  .country {
    text-align: center;
    img{
      width: 100px;
      height: auto;
      margin: 2rem 0 ;
    }

    table {
      margin: 0 auto;
      font-size: 2rem;
      min-width: 80vw;

      tr {
        text-align: left;
        &:nth-child(even){
          background: #eee;
        }
      }

      .prop{
        font-weight: bold;
      }
      .propValue {
        
      }
    }
  }
  

</style>
