const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 8080;


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
    while(1){
        console.log("Connected");
        setInterval(5000);
    }
    
});


app.get('/', (req, res) => res.send(s));

app.listen(port);



