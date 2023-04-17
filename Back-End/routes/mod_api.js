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

export default router;
