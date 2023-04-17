import path from "path";
import objectHandle from "../helpers/modify-object.js";
import modelPath from "../helpers/modelPath.js";

const getTask = async (req, res) => {
  const fileName = modelPath + "/tasks-data.json";
  const Tasks = objectHandle.readJSON(fileName);
  const TaskID = req.params.id;
  const result = Tasks.find(({ id }) => {
    return id === TaskID;
  });
  if (result) {
    res.json(result);
    console.log("Get task successfully");
  } else res.send("Can't find task");
};
const getAllTasks = async (req, res) => {
  const fileName = modelPath + "/tasks-data.json";
  const Tasks = objectHandle.readJSON(fileName);
  if (Tasks) {
    res.json(Tasks);
    console.log("Get all tasks successfully");
  } else res.send("Can't find any task");
};
const addTask = async (req, res) => {
  const fileName = modelPath + "/tasks-data.json";
  const newObject = req.body;
  const result = objectHandle.createObject({ fileName, newObject });
  if (result) {
    res.json(newObject);
    console.log("Add task successfully");
  } else res.send("Can't add task");
};
const updateTask = async (req, res) => {
  const fileName = modelPath + "/tasks-data.json";
  const newObject = req.body;
  const objectID = req.params.id;
  const result = objectHandle.modifyObject({ fileName, objectID, newObject });
  if (result) {
    res.json(newObject);
    console.log("Update task successfully");
  } else res.send("Can't update task");
};
const deleteTask = async (req, res) => {
  const fileName = modelPath + "/tasks-data.json";
  const objectID = req.params.id;
  const result = objectHandle.removeObject({ fileName, objectID });
  if (result) {
    res.send("Deleted");
    console.log("Delete task successfully");
  } else res.send("Can't delete task");
};
const getMCP = async (req, res) => {
  return;
};
const getAllMCPs = async (req, res) => {
  return;
};
const addMCP = async (req, res) => {
  return;
};
const updateMCP = async (req, res) => {
  return;
};
const deleteMCP = async (req, res) => {
  return;
};
const getVehicle = async (req, res) => {
  return;
};
const getAllVehicles = async (req, res) => {
  return;
};
const addVehicle = async (req, res) => {
  return;
};
const updateVehicle = async (req, res) => {
  return;
};
const deleteVehicle = async (req, res) => {
  return;
};

export default {
  getTask,
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
  getMCP,
  getAllMCPs,
  addMCP,
  updateMCP,
  deleteMCP,
  getVehicle,
  getAllVehicles,
  addVehicle,
  updateVehicle,
  deleteVehicle,
};
