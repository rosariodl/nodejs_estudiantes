import mysql from 'mysql'
var conectar = mysql.createConnection({
    host    : 'localhost',
    user    : 'usr_estudiantes',
    password: 'admin123',
    database: 'db_estudiantes'
});
conectar.connect(function(err){
    if(err){
        console.error('Error en la conexion' + err.stack)
        return;
    }
    console.log('Conexion exitosa ID: ' + conectar.threadId);
});
export {conectar}