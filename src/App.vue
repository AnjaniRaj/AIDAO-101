<template>
  <v-app>
    <v-toolbar app class="nav-bar">
      <v-toolbar-title class="title">
        <span class="title">LEONARDO</span>
      </v-toolbar-title>
 
      <!-- <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn> -->
    </v-toolbar>

    <v-content>
      <v-layout style="background: rgba(0,0,0,0.8);">
        <Grid/>
        <!-- <HelloWorld/> -->
      </v-layout>
    </v-content>
    
  </v-app>
</template>

<script>
import Grid from './components/Grid.vue';

export default {
  name: 'App',
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

