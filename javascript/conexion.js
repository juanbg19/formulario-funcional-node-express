let mysql = require('mysql');

let conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'formulario' //poner el nombre de la base que se va a usar
})

conexion.connect(function(error){
    if(error){
        throw error;}
    else{
        console.log("Conexión exitosa");
    }
});
conexion.end();
