import express from "express";
import { loginController } from "../controllers/index.js";

const router = express.Router();

router.get("/", loginController.returnFirstPage);
router.get("/login", loginController.returnFile);
router.post("/login", loginController.login, (req, res) => {
  const token = req.token;
  const role = req.role;
  res.cookie("token", token);
  res.cookie("role", role);
  res.redirect(`/dashboard`);
});
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.clearCookie("role");
  res.redirect("/");
});

export default router;
