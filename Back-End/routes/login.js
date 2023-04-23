import express from "express";
import { loginController } from "../controllers/index.js";

const router = express.Router();

router.get("/", loginController.returnFirstPage);
router.get("/login", loginController.returnFile);
router.post("/login", loginController.login, (req, res) => {
  const token = req.token;
  const role = req.role;
  const id = req.id;
  res.cookie("token", token);
  res.cookie("role", role);
  res.cookie("id", id);
  res.redirect(`/tasks`);
});
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.clearCookie("role");
  res.clearCookie("id");
  res.redirect("/");
});

export default router;
