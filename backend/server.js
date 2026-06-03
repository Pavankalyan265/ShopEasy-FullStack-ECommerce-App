const express = require("express");

const cors = require("cors");


const app = express();


app.use(cors());

app.use(express.json());


// TEST API

app.get("/",(req,res)=>{

res.send("ShopEasy API Working");

});


// ROUTES

app.use(
"/products",
require("./routes/productRoutes")
);


app.use(
"/users",
require("./routes/userRoutes")
);


app.use(
"/cart",
require("./routes/cartRoutes")
);



app.listen(5000,()=>{

console.log(
"Server running on port 5000"
)

});