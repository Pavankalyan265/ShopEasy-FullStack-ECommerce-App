const mysql = require("mysql2");


const db = mysql.createConnection({

    host:"localhost",

    user:"root",

    password:"Pavan12345",

    database:"shopeasy"

});


db.connect((err)=>{

    if(err){

        console.log("MYSQL ERROR", err);

    }
    else{

        console.log("MYSQL CONNECTED SUCCESSFULLY");

    }

});


module.exports = db;