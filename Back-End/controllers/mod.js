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
    // res.send(JSON.stringify(Tasks));
    console.log(Tasks);
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
  const fileName = modelPath + "/mcps-data.json";
  const MCPs = objectHandle.readJSON(fileName);
  const MCPID = req.params.id;
  const result = MCPs.find(({ id }) => {
    return id === MCPID;
  });
  if (result) {
    res.json(result);
    console.log("Get MCP successfully");
  } else res.send("Can't find MCP");
};
const getAllMCPs = async (req, res) => {
  const fileName = modelPath + "/mcps-data.json";
  const MCPs = objectHandle.readJSON(fileName);
  if (MCPs) {
    res.json(MCPs);
    console.log("Get all MCPs successfully");
  } else res.send("Can't find any MCP");
};
const addMCP = async (req, res) => {
  const fileName = modelPath + "/mcps-data.json";
  const newObject = req.body;
  const result = objectHandle.createObject({ fileName, newObject });
  if (result) {
    res.json(newObject);
    console.log("Add MCP successfully");
  } else res.send("Can't add MCP");
};
const updateMCP = async (req, res) => {
  const fileName = modelPath + "/mcps-data.json";
  const newObject = req.body;
  const objectID = req.params.id;
  const result = objectHandle.modifyObject({ fileName, objectID, newObject });
  if (result) {
    res.json(newObject);
    console.log("Update MCP successfully");
  } else res.send("Can't update MCP");
};
const deleteMCP = async (req, res) => {
  const fileName = modelPath + "/mcps-data.json";
  const objectID = req.params.id;
  const result = objectHandle.removeObject({ fileName, objectID });
  if (result) {
    res.send("Deleted");
    console.log("Delete MCP successfully");
  } else res.send("Can't delete MCP");
};
const getVehicle = async (req, res) => {
  const fileName = modelPath + "/vehicles-data.json";
  const Vehicles = objectHandle.readJSON(fileName);
  const VehicleID = req.params.id;
  const result = Vehicles.find(({ id }) => {
    return id === VehicleID;
  });
  if (result) {
    res.json(result);
    console.log("Get vehicle successfully");
  } else res.send("Can't find vehicle");
};
const getAllVehicles = async (req, res) => {
  const fileName = modelPath + "/vehicles-data.json";
  const Vehicles = objectHandle.readJSON(fileName);
  if (Vehicles) {
    res.json(Vehicles);
    console.log("Get all vehicles successfully");
  } else res.send("Can't find any vehicle");
};
const addVehicle = async (req, res) => {
  const fileName = modelPath + "/vehicles-data.json";
  const newObject = req.body;
  const result = objectHandle.createObject({ fileName, newObject });
  if (result) {
    res.json(newObject);
    console.log("Add vehicle successfully");
  } else res.send("Can't add vehicle");
};
const updateVehicle = async (req, res) => {
  const fileName = modelPath + "/vehicles-data.json";
  const newObject = req.body;
  const objectID = req.params.id;
  const result = objectHandle.modifyObject({ fileName, objectID, newObject });
  if (result) {
    res.json(newObject);
    console.log("Update vehicle successfully");
  } else res.send("Can't update vehicle");
};
const deleteVehicle = async (req, res) => {
  const fileName = modelPath + "/vehicles-data.json";
  const objectID = req.params.id;
  const result = objectHandle.removeObject({ fileName, objectID });
  if (result) {
    res.send("Deleted");
    console.log("Delete vehicle successfully");
  } else res.send("Can't delete vehicle");
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
