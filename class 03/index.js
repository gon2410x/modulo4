const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
 
//Rutas
app.use('/tareas', requir('./routes/tareas.routes'))
app.use('/usuarios', requir('./routes/usuarios.routes '))


app.listen(port, () => {
    console.log('Iniciando aplicacion node en puerto: ' + port );
});