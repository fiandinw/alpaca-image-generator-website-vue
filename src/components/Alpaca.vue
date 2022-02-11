<script>
export default{
  props:{
    dir: String,
    img: String
  },

  data(){
    return{
      imgPath: `src/assets/alpaca/${this.dir}/${this.img}.png`
    }
  },

  methods:{
    changeImg(){
      this.imgPath = `src/assets/alpaca/${this.dir}/${this.img}.png`
    }
  },
}
</script>

<template>
  <img :src="imgPath"/>
</template>