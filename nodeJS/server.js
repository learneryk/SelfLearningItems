const path = require("path")


const dirName = __dirname
const fileName = __filename

console.log(`directory name: ${dirName}`)
console.log(`using path.dirname(): ${path.dirname(dirName)}`)
console.log(`using path.basename(): ${path.basename(dirName)}`)
console.log(`using path.parse(): ${path.parse(fileName)}`)
console.log(path.parse(__filename)) //formatted Text gives wrong output 


// That's how it is
const myObject = {
    name: "afsal",
    age: 22
}

console.log(`${myObject}`) // returns -> [object Object]
console.log(myObject) // returns -> { name: 'afsal', age: 22 }