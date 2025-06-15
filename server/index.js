import express from 'express'
import cors from 'cors'
import router from "./routes/auth.js";
import departmentRouter from "./routes/department.js"
import connectToDatabase from './db/db.js';

connectToDatabase()

const port = process.env.PORT;

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth', router);
app.use("/api/department", departmentRouter);


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})