import express from "express"
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
import initialPath from "./helpers/initialPath.js"
import path from 'path'
import cookieParser from "cookie-parser"
dotenv.config()
import {loginRouter, manageRouter} from './routes/index.js'
import authenticator from "./controllers/auth.js"

const app = express()
const port = process.env.PORT ?? 3000
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(initialPath))
app.use('/login', loginRouter)
app.use('/', authenticator)
app.use('/dashboard', manageRouter)
app.get('/', (req, res) => {
    res.redirect('/login')
})
app.listen(port, async() => {
    console.log(`listen on port: ${port}`)
})