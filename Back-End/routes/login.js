import express from "express";
import { loginController } from "../controllers/index.js";

const router = express.Router();

router.get("/", loginController.returnFirstPage);
router.get("/login", loginController.returnFile);
router.post("/login", loginController.login, (req, res) => {
  const token = req.token;
  res.cookie("token", token);
  res.redirect(`/dashboard`);
});
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

export default router;
