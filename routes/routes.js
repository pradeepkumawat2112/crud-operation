const express=require('express');
const router=express.Router();
const  mysql=require('mysql');
 
const  db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:'employeedb',
})



//get all employees---->
router.get('/employees',(req,res)=>{                                                        
    db.query("SELECT * FROM employee",(err,rows,fields)=>{
      if(err){
       
      return res.json({
        code:404,
        status:"fail",
        message:"failed to load data",
        data:err
      })
          
      } else{
        res.json({
          code:200,
          status:"success",
          message:"data fatched successfully!!",
          data:rows

        })
       
      } 
    })
})

//get employee by id---->
router.get('/employees/:id',(req,res)=>{
    db.query("SELECT * FROM employee WHERE id=?",[req.params.id],(err,rows,fields)=>{
        if(err){ 
          return res.json({
              code:404,
              status:"failed",
              message:"didn't Get Data...",
              data:err
          })
        }
      
        else{
            return res.json({
                code:200,
                status:"success",
                message:"data get successfully!!",
                data:rows
         })  
        }
    })
})

// DELETE an employee
router.delete('/employees/:id',(req,res)=>{
    db.query('DELETE FROM employee WHERE id=?',[req.params.id],(err,rows,fields)=>{
        if(err){
        return res.json({
           code:404,
           status:"failed",
           message:"Can't Deleted Data",
           data:err
        })
        }
        else{
         return res.json({
           code:200,
           status:"success",
           message:'Employee Data DELETED Successfully!!',
           data:rows
         })
       }

    })
})

//  //INSERT an employees---->
router.post("/employees",(req,res)=>{

    console.log(req.body)
   
   var input={
    name:req.body.name,
    empcode:req.body.empcode,
    salary:req.body.salary,
   }
   console.log(input)  
db.query("INSERT INTO employee SET ?",input,(err,rows,fields)=>{
    if(err){
        return res.json({
            code:404,
            status:'fail',
            message:'fail to insert data',
            data:rows
        })
    }
    else{
        return  res.json({
             code:200,
            status:'success',
            message:'data inserted successfully',
            data:rows
        })
    }
})

  })
  
// UPDATE EMPLOYEE DATA--->
router.put("/employees/:id",(req,res)=>{
    var data={
         name:req.body.name,
         empcode:req.body.empcode,
         salary:req.body.salary
    }
    db.query("UPDATE employee SET ? WHERE id=?",[data,req.params.id],(err,row,fields)=>{
        if(err){
          return res.json({
            code:404,
            status:"fail",
            message:"failed to update data",
            data:err
          })
        } 
        else{
            return res.json({
                code:200,
                status:"success",
                message:"successfully updated..",
                data:row
            }) 
        }
    })
  })
module.exports=router;
