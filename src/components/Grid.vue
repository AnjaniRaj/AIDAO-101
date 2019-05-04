<template>
  <v-container fluid v-bind="{ [`grid-list-${size}`]: true }" >

    <v-layout row wrap>
            <v-dialog v-model="dialog" max-width = "500">
                      <v-card>
                        <v-card-title class="headline">Transfer {{image_data[currIdx===-1? 0:currIdx].price}} ETH to this address?</v-card-title>
                        <v-card-text>
                          0x84305239e6577D11d4eb54Bb0e6120187FbF5A81
                        </v-card-text>

                        <v-card-actions>
                          <v-btn color="blue darken-1" flat @click="dialog = false" >Cancel</v-btn>
                          <v-btn color="blue darken-1" flat @click="onBuyClicked(currIdx)">Buy</v-btn>
                          
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
      <v-flex v-for="(img,idx) in image_data" :key="idx" xs3 style="padding: 8px;">
        
        <v-hover>
          <v-card tile slot-scope="{ hover }">            
            <v-img
                
                :src = img.link
                :aspect-ratio="1">
              
              <v-layout justify-center>

                <v-btn  flat color= "#fff" class="my-span">{{img.price}}-ETH</v-btn>                
               
                <v-fade-transition > 
                 <div v-if="hover"> 
                    <a  v-if="img.isBought" :href="img.link">
                        <v-btn dark color="primary" >Download</v-btn>   
                    </a>       
                    <v-btn  v-else dark color="primary" @click.stop="dialog = true; currIdx=idx" >BUY</v-btn>   
                                      
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
     bought_ids : Array(),
      size: 'sm',
      currIdx:-1,
      bought:false,
      items: [
        { text: 'Extra small (2px)', value: 'xs' },
        { text: 'Small (4px)', value: 'sm' },
        { text: 'Medium (8px)', value: 'md' },
        { text: 'Large (16px)', value: 'lg' },
        { text: 'Extra large (24px)', value: 'xl' }
      ],
      dialog : false,     
      image_data:[
        {
          link:"https://drive.google.com/uc?export=download&id=1cAWsMk-aohm3FNcrxZ25ZyGYfIpNJr34",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1kpqP5vVeRndLh-54RboiSxAmjFZBZiiI",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1bAir3OMQ4uPbIdJmzLe62EY-JX_c85er",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1wLz-NdJvOmzUUujXiFblrADeYwE6ot1t",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1T_8c6mRmUV49rNCYKoUVw9ySl4icHoFA",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=13JyTK459HCobutp2iTBT9L4i6raxZiId",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1zKo1BhonZe4mgZrBYR2mInY0KoRWOd0a",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1lrkEYDzz2HfAkW3_9iWKJmp9c62XhYJA",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1LJbqyE7_JOBADCHLQaRDvZoTxqm3AVPz",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1u6kD-7b-43ZXIpjXWpZZ9cIuWgoMLrj2",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1_Quwefwm5Ful0l8sIhXDrvTsUtQ-8RBF",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1SRXh6CfxKDYACyCOnxVzPkbCSn1zeVpo",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1tzqSvZ3OwPgVdHJ2p-jxyLm5IOEW9h5m",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=11qAZsOA0bjGoeL3YIRete0DXroKj15Dg",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1kHoYoP2CEz0iliGCAt23WEhSlEHJm_go",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=15aSfNpPaD0dNYuF1-LY8mXnWcrmcbZZl",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=10kWRXQvbTvyVCu4M4y2wlsRuxOM4Fypi",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=175BLfE0ckfzlfhXE6fjVWEJeyWvwQrKk",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1Z-yF405wBGQ1pxCfvjXwLF8EMAhxx7jV",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1X08HJVqUzckQBeZSb0Veovk_wC_gIwTK",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1BxXtbseZXaGdWhz0mG6OfWF39jxLkjSv",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1DfhyKMJePhNn0AkBr7NhQCS9FXPBm6GR",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1OjlwmpqyX-HsBLjK59hWfNPpJUgbwsmH",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1qvwO3NzNColg_xdAjzqG4sdKeTyo6Kx6",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1dTqaejPSgq3G7jNhAM5TirhpvdR-3FCT",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1_T_bP9SjSnVd37V0BRby7APq1S9Tcxfv",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1xLm8_wk7EBpK94-1vi5ZQNXJBcqqmeN8",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=10Aslvyvfx1Ofb6GGg5n599c-79WEs352",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1aBf4pQXzFiVLEnjbyFapTMxWSfr6yc5l",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1T5bonn2TQUOVacUvyRCtVBYlv33MQFKS",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1GAkq8EoesIbJ2nh8euUFnntRnBvcsjwk",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=15enxA-RSbb2kkUPUp4jHCpIgB7R32Kwr",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1OU9Br1mfjKwWho-oPjakRpyE7sCpKCEm",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=115gLg47x1fxtYuT2w7Y2zFMZ3iDwGvQs",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=12QDL1hpJ_Cq1nRTJpE3LAw3Xdx0X9QhQ",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1o7ocVxKLODUKMmqN7hKgsvHo447Ar4Hf",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=11kskwLvEzD0GZ-s9oJSnsKNFZTh0YtV7",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1cY9f8Z19f4Rph0jm0TjIFyFPhRgxE1NP",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=14dx6bjEtKaYiSNCCQgCd7qjBpyO3hm6a",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1R7AsBtrkWsAHRVPSYnlEQK6fbMsEw077",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1G9BLIwz7FRk6WGDw4yTS6WTPpICGaF_u",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1EgxbYHadpcXKsd-ezs-eTVJ0DglUqB0t",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1_WQxD2ybrOZ0uIndCZeSvKe6f5ihLJXw",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=13UAEiBimVuKTRsXy6WeNjRBCr6UkwnxF",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
        {
          link:"https://drive.google.com/uc?export=download&id=1U4UFueB2rnj8OqGvRX6FhX-IiS05-Bze",
          price: (Math.random()*5 + 0.002).toFixed(3),
          isBought:false
        },
         ]   }),

    methods: {
      onBuyClicked: function(id) {
        this.dialog = false;
        this.currIdx=-1;

        this.image_data[id].isBought = true;
        // alert(id);
      },
    },
    
    
  }
</script>


