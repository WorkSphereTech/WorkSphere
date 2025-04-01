import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.js'

const port = process.env.PORT || 3000;

const app = express()
app.use(cors())
app.use(express.json())
app.use('api/auth', authRouter)

app.listen(port, ()=>{
    console.log(`server is rnning on port ${port}`)
})