<template>
  <div class="home">
    <Header />
    <Countries />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Countries from '@/components/Countries.vue';
import Footer from '@/components/Footer.vue';


export default {
  name: 'Home',
  components: {
    Header,
    Countries,
    Footer
  }
}
</script>

<style lang="scss" scoped>

</style>