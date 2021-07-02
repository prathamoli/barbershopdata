const express = require('express')
const serverless = require('serverless-http')
const data = require("../category")
const app = express()
const router = express.Router()
var cors = require('cors')

//adding cors 
app.use(cors())
router.get('/',(req, res) =>{
    res.json(data)
})


app.use('/.netlify/functions/api',router)

 module.exports.handler = serverless(app)
