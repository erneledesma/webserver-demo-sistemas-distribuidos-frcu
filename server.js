
const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'))

// app.get('/', (req, res) => {
//     res.send('Hola desde NOde Express')
// });

app.listen(3000);

console.log('Escuchando desde Node');
