const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 8080;


const db = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"Atul@12345",
    database:"world"
});
let s="Not connected";
db.connect(err=>{
    if(err){
        console.log(err);
        return;
    }
    s="Connected";
    console.log("Connected");
});


app.get('/', (req, res) => res.send(s));

app.listen(port);



