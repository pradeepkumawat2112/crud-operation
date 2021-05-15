const  mysql=require('mysql');
 
const  db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:'employeedb',
})

db.connect((error)=>{
    if(error){
        console.log('Error--->')
    }else{
        console.log("Database Connected Successfully!!")
    }
})


module.exports=db;
