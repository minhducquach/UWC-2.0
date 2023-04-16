import express from "express";
import { manageController } from "../controllers/index.js";
import authenticator from "../controllers/auth.js";

const router = express.Router();

router.get("/dashboard", authenticator, manageController.returnDashboard);
router.get("/charts", authenticator, manageController.returnChart);
router.get("/tasks", authenticator, manageController.returnTask);
router.get("/mcps", authenticator, manageController.returnMcp);
router.get("/vehicles", authenticator, manageController.returnVehicle);

export default router;
