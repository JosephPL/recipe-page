const express = require('express');
const port = 5000;
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(port, ()=>{
    console.log('funcionando en puerto ' + port);
});
