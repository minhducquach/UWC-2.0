import objectHandle from '../helpers/modify-object.js';
import modelPath from "../helpers/modelPath.js";
const taskData = async (req, res) => {
    const fileName =  modelPath + '/tasks-data.json'
    const Tasks = objectHandle.readJSON(fileName)    
    res.send(JSON.stringify(Tasks))
}

export default {
    taskData
}