const express= require('express')
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser')
const path = require("path")


//Requiere la conexión a BD

const connection = require("./configBD")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(express.urlencoded());

app.use("/public", express.static(path.join(__dirname, "public")))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) =>{
    res.render("formulario")
})

app.post('/registrarse', (req, res) => {
    //res.send("Saludando desde el servidor Backend")
    for (const campo in req.body) {
        if (!req.body[campo]){
            res.send(`Error: el campo ${campo} esta vacio`)
            return
        }
    }
})

//Desestructurando los datos que vienen en el body
const {nombre, apellido,identi,correo,contraseña}= JSON.parse(JSON.stringify(req.body));//para que el body no llegue como Undefined

try{
    const query = "INSERT INTO usuario(documento,nombre,apellido,usuario,email,contraseña,fecha) VALUES (?,?,?,?,?,?)";
    connection.execute(query,[documento])
}