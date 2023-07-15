const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
 
// app.post('/usuario', (req, res) => {
//     const { email } = req.body;
//     if (!email) {
//         res.status(400).json({
//             ok: false,
//             mensaje: 'El email es necesario'
//         });
//     } else {
//         res.status(200).json({
//             usuario: email
//         });
//     }

// });


app.get('/empleado', (req, res) => {
    res.json('GET Empleado');
});

app.post('/empleado', (req, res) => {
    const { nombre } = req.body;
    res.status(200).json({
        empleado: nombre,
        message: 'Guardado correctament...'
    });
});

app.put('/empleado/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        id: id   
    });
});

app.delete('/empleado/:dni', (req, res) => {
    const dni = req.params.dni;
    //busqueda de empleado por dni
    
    res.json({
        message: 'DELETE Empleado ' + dni
    });
});

app.listen(port, () => {
    console.log('Iniciando aplicacion node en puerto: ' + port );
});