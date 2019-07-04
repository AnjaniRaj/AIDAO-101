<template>
  <v-app>
    <v-content>
      <v-layout style="background: rgba(0,0,0,0.8);">
        <!-- <div>
          <p>Metamask: {{ web3.isInjected }}</p>
          <p>Network: {{ web3.networkId }}</p>
          <p>Account: {{ web3.coinbase }}</p>
          <p>Balance: {{ web3.balance }}</p>
        </div> -->
        <Grid/>
        <!-- <HelloWorld/> -->
      </v-layout>
    </v-content>
    
  </v-app>
</template>

<script>
import Grid from '../components/Grid.vue';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'Home',
  methods: {
    // ...mapActions(['registerWeb3'])
  },
  beforeCreate () {
      console.log('registerWeb3 Action dispatched from home.vue');
      this.$store.dispatch('registerWeb3')
      // this.registerWeb3();
    },
  computed:{
    web3(){
      return this.$store.state.web3;
    }
  },
  components: {
    Grid
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped>
  .nav-bar{
    background: #000;
    color: crimson
  }

  .title{
    font-size: 32pt;
    font-weight: bold;
    float: center;
    justify-content: center;
  }
</style>
