const path = require("path")


const dirName = __dirname
const fileName = __filename

console.log(`dirName: ${dirName}`)
console.log(`fileName: ${fileName}`)

console.log(`using path.dirname(dirName): ${path.dirname(dirName)}`)
console.log(`using path.dirname(fileName): ${path.dirname(fileName)}`)

console.log(`using path.basename(dirName): ${path.basename(dirName)}`)
console.log(`using path.basename(fileName): ${path.basename(fileName)}`)

console.log(path.parse(fileName))
console.log(`using path.extname(): ${path.extname(fileName)}`)
console.log(path.parse(dirName)) //formatted Text gives wrong output 


// That's how it is
const myObject = {
    name: "afsal",
    age: 22
}

console.log(`${myObject}`) // returns -> [object Object]
console.log(myObject) // returns -> { name: 'afsal', age: 22 }


