<script>
import Alpaca from './components/Alpaca.vue'
import assetList from './utils/assetList.json'
import Button from './components/Button.vue'
import domtoimage from 'dom-to-image'

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
    },
    downloadAlpaca(){
      domtoimage.toJpeg(document.getElementById('alpaca'), { quality: 0.95 })
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'alpaca.jpeg';
          link.href = dataUrl;
          link.click();
      });
    },
    randomize(){
      for(let folderName in assetList){
        this.changeFile(folderName, assetList[folderName][Math.floor(Math.random() * assetList[folderName].length)])
      }
    }
  },
}
</script>

<template>
  <div class="flex p-4 flex-col items-center gap-4 max-w-xl">
    <div id="title"><h1 class="uppercase text-2xl font-bold text-slate-100">Alpaca Generator</h1></div>
    <div id="alpaca" class="relative h-[300px] w-[300px]">
      <Alpaca dir="backgrounds" :img="backgrounds" ref="backgrounds"/>
      <Alpaca dir="ears" :img="ears" ref="ears"/>
      <Alpaca dir="neck" :img="neck" ref="neck"/>
      <Alpaca dir="nose" :img="nose" ref="nose"/>
      <Alpaca dir="mouth" :img="mouth" ref="mouth"/>
      <Alpaca dir="hair" :img="hair" ref="hair"/>
      <Alpaca dir="eyes" :img="eyes" ref="eyes"/>
      <Alpaca dir="leg" :img="leg" ref="leg"/>
      <Alpaca dir="accessories" :img="accessories" ref="accessories"/>
    </div>
    <div id="btn-group-1">
      <button class="px-4 py-2 rounded-xl bg-slate-500 m-1 text-slate-50 font-bold hover:bg-slate-400" @click="randomize">random</button>
      <button class="px-4 py-2 rounded-xl bg-slate-500 m-1 text-slate-50 font-bold hover:bg-slate-400" @click="downloadAlpaca">download</button>
    </div>
    <div id="btn-group-2" class="self-start">
      <h2 class="font-bold uppercase text-slate-100">Customize</h2>
      <button class="px-4 py-2 rounded-xl bg-slate-500 m-1 text-slate-50 font-bold hover:bg-slate-400" v-for="(folder, folderName) in assetList" :key="folderName" @click="() => {changeType(folderName)}">{{folderName}}</button>
    </div>
    <div id="btn-group-3" class="self-start">
      <div v-for="(folder, folderName) in assetList" :key="folderName" v-show="typeSelected == folderName">
        <h2 class="font-bold uppercase text-slate-100">{{ folderName }}</h2>
        <Button v-for="(file, key) in folder" :key="key" :type="folderName" :asset="file" @changeFile="() => {changeFile(folderName, file)}"/>
      </div>
    </div>
  </div>
  <footer class="m-4 text-slate-200 text-xs">
    Code by: <a href="https://github.com/fiandinw" target="_blank">fiandinw</a><br>
    Assets by: <a href="https://www.codementor.io/" target="_blank">codementor</a>
  </footer>
</template>