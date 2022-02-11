<script>
import Alpaca from './components/Alpaca.vue'

export default {
	components:{
		Alpaca
	},

  data() {
    return {
      accessories: 'headphone',
      backgrounds: 'blue50',
      ears: 'default',
      eyes: 'default',
      hair: 'fancy',
      leg: 'default',
      mouth: 'default',
      neck: 'default',
      nose: 'nose',
    }
  },
	
  methods:{
    changeBg(){
      if(this.backgrounds == 'blue50'){
        this.backgrounds = 'green50'
      }else{
        this.backgrounds = 'blue50'
      }
      console.log(this.$refs)
      this.$refs['backgrounds'].changeImg()
    },
  },
}
</script>

<template>
  <Alpaca class="absolute" dir="backgrounds" :img="backgrounds" ref="backgrounds"/>
  <Alpaca class="absolute" dir="ears" :img="ears" ref="ears"/>
  <Alpaca class="absolute" dir="neck" :img="neck" ref="neck"/>
  <Alpaca class="absolute" dir="nose" :img="nose" ref="nose"/>
  <Alpaca class="absolute" dir="mouth" :img="mouth" ref="mouth"/>
  <Alpaca class="absolute" dir="accessories" :img="accessories" ref="accessories"/>
  <Alpaca class="absolute" dir="hair" :img="hair" ref="hair"/>
  <Alpaca class="absolute" dir="eyes" :img="eyes" ref="eyes"/>
  <Alpaca class="absolute" dir="leg" :img="leg" ref="leg"/>
</template>