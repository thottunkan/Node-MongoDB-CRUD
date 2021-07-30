var express = require('express');
var router = express.Router();
var db = require('../db/connection')

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  db.getDatabase().collection("employees").find().toArray((err,data)=>{
      console.log(data)
      res.render("employe/ListEmployees.hbs",{data,headerr:true})
  })      
  
});
router.get("/:empid/edit", (req, res) => {
  res.send("edit "+req.params.empid)
});
router.get("/:empid/delete", (req, res) => {
  res.send("delete "+req.params.empid)
});


module.exports = router;
