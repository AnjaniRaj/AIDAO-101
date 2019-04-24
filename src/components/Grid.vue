<template>
  <v-container fluid v-bind="{ [`grid-list-${size}`]: true }" >

    <v-layout row wrap>
            
      <v-flex v-for="n in 36" :key="n" xs3 style="padding: 8px;">

        <v-hover>

          <v-card tile slot-scope="{ hover }">

            <v-img
                :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                :aspect-ratio="1">
              
              <v-layout justify-center>

                <v-btn flat color= "#fff" class="my-span">$120</v-btn>                
               
                <v-fade-transition >
                  <div v-if="hover">
                    <v-btn dark color="primary" @click.stop="dialog = true" >BUY</v-btn>     
                    <v-dialog v-model="dialog" max-width = "500">
                      <v-card>
                        <v-card-title class="headline">Enter your key</v-card-title>
                        <v-card-text>
                          <v-text-field ></v-text-field>
                        </v-card-text>

                        <v-card-actions>
                          <v-btn color="blue darken-1" flat @click="dialog = false">Cancel</v-btn>
                          <v-btn color="blue darken-1" flat @click="dialog = false">Buy</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>                  
                  </div>                  
                </v-fade-transition>     

                             
                
              </v-layout>                                          

            </v-img>

          </v-card>
        </v-hover>     

      </v-flex>

    </v-layout>

  </v-container>
</template>

<style scoped>
  .my-span {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 8px;
    color: white;
    font-weight: bold;
    margin: 8px;
    float: right;
  }
</style>

<script>
  export default {
    data: () => ({
      size: 'sm',
      items: [
        { text: 'Extra small (2px)', value: 'xs' },
        { text: 'Small (4px)', value: 'sm' },
        { text: 'Medium (8px)', value: 'md' },
        { text: 'Large (16px)', value: 'lg' },
        { text: 'Extra large (24px)', value: 'xl' }
      ],
      dialog : false
    })
    
  }
</script>


