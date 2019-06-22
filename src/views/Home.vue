<template>
  <v-app>
    <v-content>
      <v-layout style="background: rgba(0,0,0,0.8);">
        <Grid/>
        <!-- <HelloWorld/> -->
      </v-layout>
    </v-content>
    
  </v-app>
</template>

<script>
import Grid from '../components/Grid.vue';

export default {
  name: 'Home',
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
