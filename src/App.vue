<template>
  <div id="app">
        <v-toolbar app class="nav-bar">
      <v-toolbar-title class="title">
        <span class="title">LEONARDO</span>
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      </v-toolbar-title>
  
      <!-- <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn> -->
    </v-toolbar>
    
    <router-view/>
  </div>
</template>

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

