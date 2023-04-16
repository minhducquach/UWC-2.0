import express from "express";
import { loginController } from "../controllers/index.js";

const router = express.Router();

router.get("/", loginController.returnFile);
router.post("/login", loginController.login, (req, res) => {
  const token = req.token;
  res.redirect(`/dashboard?token=${token}`);
});

export default router;
