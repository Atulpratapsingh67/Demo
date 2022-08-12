const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 8080;


// const db = mysql.createConnection({
//     host:"newdatabase.cq3launkwzcx.ap-south-1.rds.amazonaws.com",
//     port:"3306",
//     user:"NewDatabase",
//     password:"NewDatabase"
// });

// const s="";
// db.connect(err=>{
//     if(err){
//         s=err;
//         console.log(err);
//         return;
//     }
//     s="Connected";
//     console.log("Connected");
// });


app.get('/', (req, res) => res.send("ss"));

app.listen(port);



