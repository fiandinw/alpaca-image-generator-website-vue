//run with node server
const fs = require('fs')

async function getList(path) {
	const result = []
  const dir = await fs.promises.opendir(path)
  for await (const dirent of dir) {
    result.push(dirent.name)
  }
  result.sort()
	return result
}

async function getAssetList() {
	const result = {}
	const folders = await getList('../assets/alpaca')
	folders.map(async (folder, index) => {
		const files = await getList(`../assets/alpaca/${folder}`)
		result[folder] = files
		if(index == folders.length - 1){
			const jsonRes = JSON.stringify(result)
			fs.writeFile(`./assetList.json`, jsonRes, function(err) {
				if(err) {
						console.log(err);
				}
				console.log("The file was saved!");
		}); 
		}
	})
}

getAssetList()