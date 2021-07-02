const express = require('express')
const serverless = require('serverless-http')
const data = require("../category")
const app = express()
const router = express.Router()
var cors = require('cors')

//adding cors 
app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
router.get('/',(req, res) =>{
    res.json(data)
})


app.use('/.netlify/functions/api',router)

 module.exports.handler = serverless(app)
