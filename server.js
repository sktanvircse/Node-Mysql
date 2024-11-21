const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'biva_database'
})

app.get('/', (req, res) => {
    return res.json("Backend");
})

app.get('/users' ,(req , res)=>{
    const sql = "select * from users";
    db.query(sql , (err , data)=>{
        if(err){
            return res.json(err);
        }else{
            return res.json(data);
        }
    })
})

app.listen(8081 , ()=>{
    console.log("listen")
})