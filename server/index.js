require('dotenv').config()
const route = require('./routers/routers')
const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT||5000
const connDB = require('./database/db')
const user = require('./models/user-model')
const cors = require('cors')
app.use(cors())
//middleware
app.use(express.json())
app.use("",route)
//connect frontend
app.get('/',(req,res)=>{
    app.use(express.static(path.resolve(__dirname,"front","build")))
    res.sendFile(path.resolve(__dirname,"front","build","index.html"))
})
connDB().then(()=>{
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})
})