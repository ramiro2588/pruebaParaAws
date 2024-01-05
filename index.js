const express = require('express');
const app = express();
let port = 3000;

app.listen(port, () => {
    console.log('Servidor en el puerto ' + port)
})

app.get('/', (req, res) => {
    res.send('Prueba para AWS')
})