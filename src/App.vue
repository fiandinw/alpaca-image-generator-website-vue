<script>
import Alpaca from './components/Alpaca.vue'
import assetList from './utils/assetList.json'
import Button from './components/Button.vue'

export default {
	components:{
    Alpaca,
    Button
},

  data() {
    return {
      accessories: 'glasses.png',
      backgrounds: 'blue50.png',
      ears: 'default.png',
      eyes: 'default.png',
      hair: 'default.png',
      leg: 'default.png',
      mouth: 'default.png',
      neck: 'default.png',
      nose: 'nose.png',
      assetList,
      typeSelected: 'accessories'
    }
  },
	
  methods:{
    changeFile(folder, file){
      this[folder] = file
      this.$refs[folder].changeImg(folder, file)
    },
    changeType(type){
      this.typeSelected = type
    }
  },
}
</script>

<template>
  <div class="relative h-[700px] w-[700px]">
    <Alpaca dir="backgrounds" :img="backgrounds" ref="backgrounds"/>
    <Alpaca dir="neck" :img="neck" ref="neck"/>
    <Alpaca dir="nose" :img="nose" ref="nose"/>
    <Alpaca dir="mouth" :img="mouth" ref="mouth"/>
    <Alpaca dir="ears" :img="ears" ref="ears"/>
    <Alpaca dir="hair" :img="hair" ref="hair"/>
    <Alpaca dir="eyes" :img="eyes" ref="eyes"/>
    <Alpaca dir="leg" :img="leg" ref="leg"/>
    <Alpaca dir="accessories" :img="accessories" ref="accessories"/>
  </div>
  <div>
    <button class="px-4 py-2 rounded-xl bg-slate-500 text-slate-50 font-bold m-2 hover:bg-slate-400" v-for="(folder, folderName) in assetList" @click="() => {changeType(folderName)}">{{folderName}}</button>
    <div v-for="(folder, folderName) in assetList" v-show="typeSelected == folderName">
      <h2 class="font-bold uppercase">{{ folderName }}</h2>
      <Button v-for="file in folder" :type="folderName" :asset="file" @changeFile="() => {changeFile(folderName, file)}"/>
    </div>
  </div>
</template>