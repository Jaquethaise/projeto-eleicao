const express = require('express');
const consign = require('consign');
const cors = require('cors');

// instanciando objeto express
server = express();

server.use(express.json())

server.use(cors());

// definição da porta 
server.set('porta', 3003);
server.set('url', 'http://localhost:');
 
consign({ cwd: 'api'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(server)
;

module.exports = server;

