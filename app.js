const express = require('express')
const db=require('./database/database');
const app = express();
var bodyParser = require('body-parser');

// parse request 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


const router=require('./routes/routes')
app.use("/",router);

app.listen(8080,()=>{
    console.log("server running on port 8080")

})





