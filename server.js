const archivodb= require('./conexion')
const express= require('express');
const cors = require('cors');

let app= express();



app.use(cors());

const ruta_user= require('./Rutas/usuarios')

const body_parse=require('body-parser');


app.use(body_parse.json());
app.use(body_parse.urlencoded({extended:true}));


app.use('/api/user',ruta_user);


app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.listen(5000,()=>
{
    console.log("Server is running on port 5000");

})
