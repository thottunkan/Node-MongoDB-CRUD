var express = require('express');
var dbobj = require("../db/connection");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('employe/AddEmploye.hbs', { title: 'MongoDB CRUD' ,headerr:true});
});

router.post("/addemp",(req,res)=>{
   
    var empobj = {
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      address:req.body.address,
      company:req.body.company

    }
    dbobj.getDatabase().collection("employees").insertOne(empobj).then((result)=>{
      console.log("1 document inserted")
      console.log(result.insertedId.toString())
      res.render("alert('1 Document inserted')")
      res.redirect("/")
    })
    
})

module.exports = router;
