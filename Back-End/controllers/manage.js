import path from "path";
import initialPath from "../helpers/initialPath.js";

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
  // res.sendFile(path.join(initialPath, "tasks-management.html"));
  res.sendFile(path.join(initialPath, "/overviewTask/overview-task.html"));
};
const returnMcp = async (req, res) => {
  res.sendFile(path.join(initialPath, "mcps-management.html"));
};
const returnVehicle = async (req, res) => {
  res.sendFile(path.join(initialPath, "vehicles-management.html"));
};

const returnGenInfo = async (req, res) => {
  res.sendFile(
    path.join(
      initialPath,
      "/overviewTask/overview_task_detail_GeneralInfo.html"
    )
  );
};

const returnTaskMCP = async (req, res) => {
  res.sendFile(
    path.join(initialPath, "/overviewTask/overview_task_detail_MCP.html")
  );
};

const returnAddTask = async (req, res) => {
  res.sendFile(path.join(initialPath, "/add-task.html"));
};
const returnUpdateTask = async (req, res) => {
  res.sendFile(path.join(initialPath, "/edit-task.html"));
};

const returnTaskStaff = async (req, res) => {
  res.sendFile(
    path.join(initialPath, "/overviewTask/overview_task_detail_Staff.html")
  );
};

const returnTaskRoute = async (req, res) => {
  res.sendFile(path.join(initialPath, "/map/map.html"));
};

export default {
  returnIndex,
  returnDashboard,
  returnChart,
  returnMcp,
  returnTask,
  returnVehicle,
  returnGenInfo,
  returnTaskMCP,
  returnTaskStaff,
  returnAddTask,
  returnTaskRoute,
  returnUpdateTask
};
