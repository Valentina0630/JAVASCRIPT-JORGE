const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require("path");

//Requiriendo la conexión a BD
const connection = require("./configBD");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded());

app.use("/public", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("saludando desde el backend");
})

app.get("/form-registro", (req, res) => {
    res.render("formulario");
})

app.post('registrarse', (req, res) => {
    //res.send("Saludando desde el servidor Backend")
    for (const campo in req.body) {
        if (!req.body[campo]) {
            res.send(`Error: el campo ${campo} está vacío`)
            return
        }
    }

    //Desestructurando los datos que vienen en el body
    const { documento, nombre, apellido, usuario, email, pass } = JSON.parse(JSON.stringify(req.body));//para que el body no llegue como Undefined

    try {
        const query = "INSERT INTO usuario(id, nombres, apellidos, usuario, correo, password, fechaCreacion) VALUES (?,?,?,?,?,?,?)";
        connection.execute(query, [documento, nombre, apellido, usuario, email, pass, new Date()]);
        res.send("Registro exitoso");
    } catch (error) {
        console.error("Error al insertar en la BD", error);
        res.send("Error al procesar el formulario");
    }
})

const port = 3001;

app.listen(port, () => {
    console.log("Servidor escuchando en puerto ", port);
})