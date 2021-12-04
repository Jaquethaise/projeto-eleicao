const models = require('../models/votoModels.js');
const qs = require('querystring');

module.exports = {
    votoMenu,
    votoGetAll,
    votoGetById,
    votoNovo,
    salvarVoto,
    editarVoto,
    votoEditar,
    votoDelete
}

function votoMenu(req, res) {
    res.json('Rota votos Encontrada!!!');
    console.log('Rota votos Encontrada!!!');
}

function votoGetAll(req, res) {
    console.log('Listar Votos {M O D E L}');
    models.getAllVoto(function(err, resposta) {
        console.log('Retorno de Votos {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function votoNovo(req, res) {
    res.json('Rota Novo Voto Encontrada!!!');
    console.log('Rota Novo Voto Encontrada!!!');
}

function votoEditar(req, res) {
    res.json('Rota Novo Canditado Encontrada!!!');
    console.log('Rota Novo Canditado Encontrada!!!');
}

async function salvarVoto(req, res) {
    var body = '';

    req.on('data', function (data) {
        body += data;

        // Too much POST data, kill the connection!
        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
    });
    req.on('end', function () {
        var post = qs.parse(body);
        console.log("dados", post)
        models.salvarVoto(post, function(err, resposta) {
            console.log('Retorno de voto Id {M O D E L}', resposta)
            if(err) {
                throw err;
            } else {
                res.json(resposta);
                res.end()
            }
        })
        // use post['blah'], etc.
    });
    
}

async function editarVoto(req, res) {
    var body = '';

    req.on('data', function (data) {
        body += data;

        // Too much POST data, kill the connection!
        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
    });
    req.on('end', function () {
        var post = qs.parse(body);
        console.log("dados", post)
        models.editarVoto(post, function(err, resposta) {
            console.log('Retorno de candidato Id {M O D E L}', resposta)
            if(err) {
                throw err;
            } else {
                res.json(resposta);
            }
        })
        // use post['blah'], etc.
    });
    
}

function votoDelete(req, res) {
    var body = '';

    req.on('data', function (data) {
        body += data;

        // Too much POST data, kill the connection!
        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
    });
    req.on('end', function () {
        var post = qs.parse(body);
        console.log("dados", post)
        models.deleteEleitor(post, function(err, resposta) {
            console.log('Retorno de candidato Id {M O D E L}', resposta)
            if(err) {
                throw err;
            } else {
                
                return res.redirect("http://localhost:3000/");
            }
        })
        // use post['blah'], etc.
    });
    
}

function  votoGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado: ' + id);
    models.getByIdVoto(id, function(err, resposta) {
        console.log('Retorno de votos Id {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}


