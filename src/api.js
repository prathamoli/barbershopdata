const express = require('express')
const serverless = require('serverless-http')
const data = require("../category")
const app = express()
const router = express.Router()
const cors = require('cors')

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

router.get('/',(req, res) =>{
    res.json(data)
})


app.use('/.netlify/functions/api',router)

 module.exports.handler = serverless(app)
