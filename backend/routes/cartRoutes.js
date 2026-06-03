const express=require("express");

const router=express.Router();

const db=require("../config/db");



router.post("/add",(req,res)=>{


const {

product_id,
name,
price,
image

}=req.body;


db.query(

"INSERT INTO cart(product_id,name,price,image) VALUES(?,?,?,?)",

[
product_id,
name,
price,
image
],


(err,result)=>{


if(err){

return res.json(err)

}


res.json({

message:"Added To Cart"

})


}


)


});




router.get("/",(req,res)=>{


db.query(

"SELECT * FROM cart",

(err,result)=>{


res.json(result)


}


)


});




router.delete("/:id",(req,res)=>{


db.query(

"DELETE FROM cart WHERE id=?",

[req.params.id],


()=>{


res.json({

message:"Removed"

})


}


)


});



module.exports=router;