const express = require('express');
const app = express()
const mysql = require('mysql');
const cors = require('cors');

app.use(cors())
app.use(express.json())


app.post('/addUser',(req,res)=>{



    db.query('insert into users values (?,?,"")',
        [req.body.login,req.body.password_string],
        (err,result) =>{
            if (err){
                console.log(err)
            }
            else{
                res.send(`user ${req.body.login} has been added (server)`)
            }
        })



})


const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'1111',
    database:'animator'
})



app.listen(3001,()=> {
    console.log("server start on port 3001 ")
})

