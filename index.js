import express from "express"   
import { crud_estudiantes } from "./controlador/crud_estudiantes.js";
const app_e = express();
app_e.use(express.urlencoded({extended:false}));
app_e.use(express.json());
app_e.use(express.static('./vista'))
app_e.use(express.static('./controlador'))
app_e.use(express.static('./modelo'))
app_e.use(express.static('./src'))
//motor de vistas
app_e.set('views','./vista')
app_e.set('view engine','ejs')
app_e.listen('5000',function(){
    console.log('Apliacion iniciada en: http://localhost:5000/ ')
})
app_e.get('/',crud_estudiantes.leer);
app_e.post('/crud_e',crud_estudiantes.cud);