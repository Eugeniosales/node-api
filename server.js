const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();

//Allow the app to receive json data
app.use(express.json());

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    {useNewUrlParser: true}
);

//ORM
requireDir('./src/models');

//const Product = mongoose.model('Product');

//Receber todas as requisições
app.use('/api', require('./src/routes'));

app.listen(3001);