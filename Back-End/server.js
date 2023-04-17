import express from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import initialPath from "./helpers/initialPath.js";
import publicPath from "./helpers/publicPath.js";
import path from "path";
import cookieParser from "cookie-parser";
dotenv.config();
import { loginRouter, manageRouter, modRouter } from "./routes/index.js";
import mime from "mime";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use(express.static(publicPath));
// app.use("/", loginRouter);
// app.use("/", authenticator);
// app.use('/dashboard', manageRouter)
// app.get('/', (req, res) => {
//     res.redirect('/login')
// })

app.use(loginRouter);
app.use(manageRouter);
app.use(modRouter);

app.listen(port, async () => {
  console.log(`listen on port: ${port}`);
});
