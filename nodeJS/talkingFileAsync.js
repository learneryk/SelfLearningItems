const fsPromise = require("fs").promises
const path = require("path")

const fileOps = async () => {
    try {
        //READ OPERATION
        const data = await fsPromise.readFile( path.join(__dirname, 'fileSys', 'starter.txt'), 'utf-8')
        console.log(data)
        //WRITE OPERATIOn
        await fsPromise.writeFile( path.join(__dirname, 'fileSys', 'asyncWrite.txt'), 'writing Asynchrously')
        //APPEND OPERATION 
        await fsPromise.appendFile( path.join(__dirname, 'fileSys', 'asyncWrite.txt'), '\n\nAppended Successfully some new words')
        //RENAME OPERATION
        await fsPromise.rename(path.join(__dirname, 'fileSys', 'asyncWrite.txt'), path.join(__dirname, 'fileSys', 'asyncFile.txt'))
        const moreData = await fsPromise.readFile(path.join(__dirname, 'fileSys', 'asyncFile.txt'), 'utf8')
        console.log(moreData)
    }
    catch (err) {
        console.error(err)
    }
}

fileOps()