const router=require("express").Router();

const db=require("../config/db");



// REGISTER


router.post("/register",(req,res)=>{


const {name,email,password}=req.body;


db.query(

"INSERT INTO users(name,email,password) VALUES(?,?,?)",

[name,email,password],

(err,result)=>{


if(err)

return res.json(err);



res.json({

message:"Register Success"

})


}


)


});



// LOGIN


router.post("/login",(req,res)=>{


const {email,password}=req.body;


db.query(

"SELECT * FROM users WHERE email=? AND password=?",

[email,password],

(err,result)=>{


if(err)

return res.json(err);



if(result.length>0){


res.json({

status:true,

message:"Login Success"

})


}

else{


res.json({

status:false,

message:"Wrong Email Password"

})


}


}


)


});



module.exports=router;