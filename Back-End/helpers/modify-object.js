import fs from 'fs'

const readJSON =  (fileName = '') => {
    return JSON.parse(
    fs.existsSync(fileName)
    ? fs.readFileSync(fileName).toString()
    : 'null'
    )
}

function saveJSON(fileName ="",content = '""') {
    return fs.writeFileSync(
        fileName, 
        JSON.stringify(
            content, 
            null, 
            2),
        err => {
            if (err) throw err;
            console.log('Done writing...')
        })
}

const removeObject = ({fileName, objectID}) => {
    const data = readJSON(fileName)
    let result = data.filter(({id}) => id !== objectID)
    saveJSON(fileName, result)
    return 1
}
const modifyObject = ({fileName, objectID, newObject}) => {
    const data = readJSON(fileName)
    const index = data.findIndex(object => {
        return object.id === objectID
    })
    if (index != -1) {
            if (newObject) {
            data[index] = newObject
            saveJSON(fileName, data)
            return 1
        }
    }
    return 0
}
const createObject = ({fileName, newObject}) => {
    const data = readJSON(fileName) 
    const index = data.findIndex(object => {
        return object.id === newObject.id
    })
    if (index == -1) {
        data.push(newObject)
        saveJSON(fileName, data)
        return 1
    }
    return 0
}

export default {
    removeObject,
    modifyObject,
    createObject,
    readJSON,
}
