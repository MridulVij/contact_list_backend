import UserRouter from "./routes/userRouter.js"
import express from "express";
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import cors from "cors";
import connect from './config/db.js'


const app = express()
const port = 8000

dotenv.config()
app.use(cors())
app.use(bodyParser.json());
app.use("/",UserRouter);
connect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => console.log("Server is running :" + 3000))