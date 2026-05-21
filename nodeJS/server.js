const path = require("path")


const dirName = __dirname
console.log(`directory name: ${dirName}`)
console.log(`using path.dirname(): ${path.dirname(dirName)}`)
console.log(`using path.basename(): ${path.basename(dirName)}`)