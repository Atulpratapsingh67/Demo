const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
    host:"newdatabase.cq3launkwzcx.ap-south-1.rds.amazonaws.com",
    port:"3306",
    user:"NewDatabase",
    password:"NewDatabase"
});
let s="Not connected";
db.connect(err=>{
    if(err){
        console.log(err);
        return;
    }
    s="Connected";
    console.log(s);
    
});


app.get('/', (req, res) => res.send(s));

const port = process.env.port || 8080;
app.listen(port);

// kksks



