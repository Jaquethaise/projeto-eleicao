const models = require('../models/candidatoModels.js');
const qs = require('querystring');

module.exports = {
    candidatoMenu,
    candidatoGetAll,
    candidatoGetById, 
    candidatoDelete,
    candidatoNovo,  
    salvarCandidato,
    editarCandidato,
    candidatoEditar
}

function candidatoMenu(req, res) {
    res.json('Rota Canditado Encontrada!!!');
    console.log('Rota Canditado Encontrada!!!');
}

function candidatoGetAll(req, res) {
    console.log('Listar Candidato {M O D E L}');
    models.getAllCandidato(function(err, resposta) {
        console.log('Retorno de Candidato {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.setHeader('X-Foo', 'bar');
            res.setHeader('Content-Type', 'application/json');
            res.json(resposta);
            res.end();
        }
    })
}

function candidatoGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado: ' + id);
    models.getByIdCandidato(id, function(err, resposta) {
        console.log('Retorno de candidato Id {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
           
            res.json(resposta);
            
        }
    })
}

function candidatoNovo(req, res) {
    res.json('Rota Novo Canditado Encontrada!!!');
    console.log('Rota Novo Canditado Encontrada!!!');
}

function candidatoEditar(req, res) {
    res.json('Rota Novo Canditado Encontrada!!!');
    console.log('Rota Novo Canditado Encontrada!!!');
}

async function salvarCandidato(req, res) {
    var body = '';

    req.on('data', function (data) {
        body += data;

        // Too much POST data, kill the connection!
        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
    });
    req.on('end', function () {
        var post = qs.parse(body);
        console.log("dados", post)
        models.salvarCandidato(post, function(err, resposta) {
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

async function editarCandidato(req, res) {
    var body = '';

    req.on('data', function (data) {
        body += data;

        // Too much POST data, kill the connection!
        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
    });
    req.on('end', function () {
        var post = qs.parse(body);
        console.log("dados", post)
        models.editarCandidato(post, function(err, resposta) {
            console.log('Retorno de candidato Id {M O D E L}', resposta)
            if(err) {
                throw err;
            } else {
                return res.redirect("http://localhost:3000/")
            }
        })
        // use post['blah'], etc.
    });
    
}

function candidatoDelete(req, res) {
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
                models.deleteCandidato(post, function(err, resposta) {
                    console.log('Retorno de candidato Id {M O D E L}', resposta)
                    if(err) {
                        throw err;
                    } else {
                        return res.redirect("http://localhost:3000/");
                    }
                })
            }
        })
        // use post['blah'], etc.
    });
    
}


// function candidatoAtivoInativo(req, res) {
//     const id = req.params.codigo
//     res.json('Ativar/Inativar Candidato { M O D E L }')    
//     console.log('Ativar/Inativar Candidato { M O D E L }')
//     console.log('Parametro Esperado: ' + id);

//     models.getByIdCandidato(id, function(err, resposta) {
//         console.log('Retorno de Candidato Id {M O D E L}', resposta)
//         let p_ativo = resposta[0].aut_ativoinativo
//         if(err) {
//             throw err;
//         } else {
//             if( p_ativo == 'A') {
//                 p_ativo = 'I'
//             } else {
//                 p_ativo = 'A'
//             }
//         }
//         console.log('A/I: ' + p_ativo);
//         models.ativarInativar(id, p_ativo, function(err, result){
//             if(err) {
//                 throw err
//             }
//             console.log("Registro Atualizado!!!")
// //            res.redirect('/autores/consultar/' + id);
//         })
//     })
// }
