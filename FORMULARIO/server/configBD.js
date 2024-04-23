const mysql = require('mysql2')

//conexión local
const connection=sysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"bd2711993",
    port:3306,    
})

connection.connect((err)=>{
    if(!err){console.log("DataBase connected succesfully")}
    else{
        console.log("DataBase connection failed")
    }
})
module.exports=connection