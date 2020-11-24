<template>
  <div class="details">
    <Header />
    <Detail />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Detail from '@/components/Detail.vue';
import Footer from '@/components/Footer.vue';

import store from "../store/index.js";
console.log(store.allCountries);

export default {

  name: 'details',
  components: {
    Header,
    Detail,
    Footer
  }
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