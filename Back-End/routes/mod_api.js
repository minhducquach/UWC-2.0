import express from "express";
import { modController } from "../controllers/index.js";

const router = express.Router();

router.get("/tasks/getTask/:id", modController.getTask);
router.get("/tasks/getAllTasks", modController.getAllTasks);
router.post("/tasks/addTask", modController.addTask);
router.post("/tasks/updateTask/:id", modController.updateTask);
router.post("/tasks/deleteTask/:id", modController.deleteTask);

router.get("/mcps/getMCP/:id", modController.getMCP);
router.get("/mcps/getAllMCPs", modController.getAllMCPs);
router.post("/mcps/addMCP", modController.addMCP);
router.post("/mcps/updateMCP/:id", modController.updateMCP);
router.post("/mcps/deleteMCP/:id", modController.deleteMCP);

router.get("/vehicles/getVehicle/:id", modController.getVehicle);
router.get("/vehicles/getAllVehicles", modController.getAllVehicles);
router.post("/vehicles/addVehicle", modController.addVehicle);
router.post("/vehicles/updateVehicle/:id", modController.updateVehicle);
router.post("/vehicles/deleteVehicle/:id", modController.deleteVehicle);

router.get("/staffs/getCollector/:id", modController.getCollector);
router.get("/staffs/getAllCollectors", modController.getAllCollectors);
router.post("/staffs/addCollector", modController.addCollector);
router.post("/staffs/updateCollector/:id", modController.updateCollector);
router.post("/staffs/deleteCollector/:id", modController.deleteCollector);

router.get("/staffs/getJanitor/:id", modController.getJanitor);
router.get("/staffs/getAllJanitors", modController.getAllJanitors);
router.post("/staffs/addJanitor", modController.addJanitor);
router.post("/staffs/updateJanitor/:id", modController.updateJanitor);
router.post("/staffs/deleteJanitor/:id", modController.deleteJanitor);

router.get("/users/getUser/:id", modController.getUser);
router.get("/users/getAllUsers", modController.getAllUsers);
router.post("/users/addUser", modController.addUser);
router.post("/users/updateUser/:id", modController.updateUser);
router.post("/users/deleteUser/:id", modController.deleteUser);
export default router;
