<script>
export default{
  props:{
    dir: String,
    img: String
  },

  data(){
    return{
      imgPath: `src/assets/alpaca/${this.dir}/${this.img}`
    }
  },

  methods:{
    changeImg(folder, file){
      this.imgPath = `src/assets/alpaca/${folder}/${file}`
    }
  },
}
</script>

<template>
  <img class="absolute h-auto w-full" :src="imgPath"/>
</template>