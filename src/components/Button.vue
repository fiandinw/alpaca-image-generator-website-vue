<script>
	export default{
		emits:['changeFile'],
		
		props:{
			asset: String,
			type: String
		},

		methods:{
			changeAsset(){
				this.$emit('changeFile')
			}
		}
	}
</script>

<template>
	<button class="px-4 py-2 rounded-xl bg-slate-500 text-slate-50 font-bold m-2 hover:bg-slate-400" @click="changeAsset">{{ asset.replace(/\.[^/.]+$/, "").replace('-', ' ') }}</button>
</template>