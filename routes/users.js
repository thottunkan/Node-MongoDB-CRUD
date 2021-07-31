var express = require('express');
var router = express.Router();
var db = require('../db/connection')

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  db.getDatabase().collection("employees").find().toArray((err,data)=>{
      console.log(data)
      res.render("employe/ListEmployees.hbs",{data,headerr:true,title:'All employees'})
  })      
  
});

router.get("/:empid/edit", (req, res) => {
  
  var doc = { empid: req.params.empid}
  db.getDatabase().collection("employees").find(doc).toArray((err,data)=>{
    if(err){
      console.log(err)
    }
    console.log(data)
    res.render("employe/UpdateEmploye.hbs",{data,headerr:true})
 })
 
});

router.post("/:empid/edit/update", (req,res)=>{
  
   var doc = {empid:req.params.empid}
   var obj = {
     name:req.body.name,
     email:req.body.email,
     phone:req.body.phone,
     address:req.body.address,
     company:req.body.company
   }
   db.getDatabase().collection('employees').updateOne(doc,obj).then(data =>{
      console.log(data)
   })
})

router.get("/:empid/delete", (req, res) => {
  var doc = {empid:req.params.empid}
   db.getDatabase().collection("employees").deleteOne(doc).then(data =>{
    
     res.redirect('/list')
     
   })
});


module.exports = router;
