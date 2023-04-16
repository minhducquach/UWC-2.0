import path from "path";
import initialPath from "../helpers/initialPath.js";
import Users from "../model/user-data.js";
import jwt from "jsonwebtoken";

const returnIndex = async (req, res) => {
  res.sendFile(path.join(initialPath, "index.html"));
};
const returnDashboard = async (req, res) => {
  res.sendFile(path.join(initialPath, "dashboard.html"));
};
const returnChart = async (req, res) => {
  res.sendFile(path.join(initialPath, "charts.html"));
};
const returnTask = async (req, res) => {
  res.sendFile(path.join(initialPath, "tasks-management.html"));
};
const returnMcp = async (req, res) => {
  res.sendFile(path.join(initialPath, "mcps-management.html"));
};
const returnVehicle = async (req, res) => {
  res.sendFile(path.join(initialPath, "vehicles-management.html"));
};

export default {
  returnIndex,
  returnDashboard,
  returnChart,
  returnMcp,
  returnTask,
  returnVehicle,
};
