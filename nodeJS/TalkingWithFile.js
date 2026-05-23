const fs = require("fs")
const path = require("path")

const dirName = __dirname  // NodeJsS file

const pathToModify = path.join(dirName, 'fileSys', 'starter.txt');
// console.log(pathToModify)

fs.readFile(pathToModify, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})


fs.writeFile(path.join(__dirname, 'fileSys', 'writeText.txt'), 'Hey I wrote this Using Node.JS', (err) => {
    if (err) throw err;
    console.log('Writing Complete')
})

fs.appendFile( path.join(__dirname, 'fileSys', 'appendText.txt'),  'Appendix is a disease\n\n', (err) => {
    if (err) throw err
    console.log('Append Completed')
})

fs.writeFile( path.join(__dirname, 'fileSys', 'anotherNew.txt'), 'this is new File', (err) => {
    if (err) throw err
    console.log('new writing complete')
})

fs.appendFile( path.join(__dirname, 'fileSys', 'anotherNew.txt'), 'appending to earlier texts', (err) => {
    if (err) throw err
    console.log('new Append Complete')
})

