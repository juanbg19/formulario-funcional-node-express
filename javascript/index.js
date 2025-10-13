const express = require('express');
const app = express();

const mysql = require('mysql');

let  conexion = mysql.createConnection({
    host: 'localhost',
    user:   'root',
    password: '',
    database: 'formulario'
});

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/validar', (req, res) => {
    const datos = req.body;
    console.log(datos);
    res.send('Datos recibidos');

    let documento= datos.documento_cliente;
    let nombre= datos.nombre_cliente;
    let direccion = datos.direccion_cliente;
    let telefono = datos.telefono_cliente;
    let correo= datos.email_cliente;

    let registrar = `INSERT INTO tabla_usuarios (nombre_cliente, documento_cliente, direccion_cliente, telefono_cliente, correo_cliente) 
    VALUES ('${nombre}', '${documento}', '${direccion}', '${telefono}', '${correo}')`;

    conexion.query(registrar, function(error){
        if(error){
            throw error;
        } else {
            console.log("Registro exitoso");
        }
    });

});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});