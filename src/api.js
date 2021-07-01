const express = require('express')
const serverless = require('serverless-http')
const data = require("../category")
const app = express()
const router = express.Router()

router.get('/',(req, res) =>{
    res.json(data)
})

app.use('/.netlify/functions/api',router)
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://yoursite.com");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
 module.exports.handler = serverless(app)