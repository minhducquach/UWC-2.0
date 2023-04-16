import path from "path";
import initialPath from "../helpers/initialPath.js";
// import authenticator from "./controllers/auth.js";
import Users from "../model/user-data.js";
import jwt, { verify } from "jsonwebtoken";

const returnFile = async (req, res) => {
  res.sendFile(path.join(initialPath, "login.html"));
};
const returnFirstPage = async (req, res) => {
  res.sendFile(path.join(initialPath, "firstPage.html"));
};

const login = async (req, res, next) => {
  const user = req.body.username;
  const pass = req.body.password;
  console.log(req.body);
  const result = Users.find(({ username, password }) => {
    return (username === user) & (password === pass);
  });
  if (result) {
    let token = jwt.sign({ data: result }, process.env.JWT_SECRET);
    req.token = token;
    next();
    // const message = { ...result, password: "hide", token: token };
    // res.json(message);
    // authenticator(req, res);
  } else {
    res.redirect("/login");
  }
};

export default {
  login,
  returnFile,
  returnFirstPage,
};
