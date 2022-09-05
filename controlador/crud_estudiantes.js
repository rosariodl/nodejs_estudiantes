import { conectar } from "../modelo/db_conectar.js";
var crud_estudiantes =({});
crud_estudiantes.leer = (req,res)=>{
    conectar.query('SELECT estudiantes.id_estudiante,estudiantes.carne,estudiantes.nombres,estudiantes.apellidos,estudiantes.direccion,estudiantes.telefono,estudiantes.correo_electronico,estudiantes.id_tipo_sangre,DATE_FORMAT(estudiantes.fecha_nacimiento,"%d-%m-%Y") as fecha_nacimiento FROM estudiantes;',(error,results)=>{
        if (error){
            throw error;

    }else{
    res.render('estudiantes/index',{resultado:results})
    }
})
};
crud_estudiantes.cud = (req,res)=>{
    const btn_crear = req.body.btn_crear;
    const btn_actualizar = req.body.btn_actualizar;
    const btn_borrar = req.body.btn_borrar;
    const id = req.body.txt_id;
    const carne = req.body.txt_carne;
    const nombres = req.body.txt_nombres;
    const apellidos = req.body.txt_apellidos;
    const direccion = req.body.txt_direccion;
    const telefono = req.body.txt_telefono;
    const correo_electronico = req.body.txt_correo;
    const id_tipo_sangre = req.body.txt_sangre;
    const fecha_nacimiento = req.body.txt_fn;
    if (btn_crear){
        conectar.query('insert into estudiantes SET ?',{carne:carne,nombres:nombres, apellidos:apellidos,direccion:direccion,telefono:telefono,correo_electronico:correo_electronico,id_tipo_sangre:id_tipo_sangre,fecha_nacimiento:fecha_nacimiento}, (error, results)=>{
            if(error){
                console.log(error);
            }else{  
                res.redirect('/');         
            }
        });
    }
    if (btn_actualizar){
        conectar.query('update estudiantes SET ? where id_estudiante = ?',[{carne:carne,nombres:nombres, apellidos:apellidos,direccion:direccion,telefono:telefono,correo_electronico:correo_electronico,id_tipo_sangre:id_tipo_sangre,fecha_nacimiento:fecha_nacimiento},id], (error, results)=>{
            if(error){
                console.log(error);
            }else{   
                res.redirect('/');         
            }
        });
    }
    if (btn_borrar){
        conectar.query('delete from estudiantes  where id_estudiante = ?',[id], (error, results)=>{
            if(error){
                console.log(error);
            }else{   
                res.redirect('/');         
            }
        });
    }
};
export {crud_estudiantes}