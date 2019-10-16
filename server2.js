const express = require('express');

const app = express();

app.get('/', (req, res) => {
    //res.send('Hola desde NOde Express')'
    let salida = {
        nombre: 'Tito',
        edad: 44,
        ciudad: "Cdelu"
    }

    res.send(salida)
});

app.get('/data', (req, res) => {
    res.send('Hola desde Data')
});

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});


