const conexao = require('../../config/conexao.js');

module.exports = {
    getAllCandidato,
    getByIdCandidato,    
    deleteCandidato,
    deleteEleitor,
    salvarCandidato,
    editarCandidato
}

function getAllCandidato (callback) {
    conexao.query('select * from candidato', callback)
}

function getByIdCandidato (id, callback) {
    conexao.query('select * from candidato WHERE can_codigo = ' + id, callback)
}

function salvarCandidato(dados, callback) {
    console.log("oi", dados.can_candidato)
    conexao.query("insert into candidato (can_candidato, can_partido, can_sigla, can_fundacao, can_cargo) values (" + "'" + dados.can_candidato + "'" + "," + "'" + dados.can_partido + "'" + "," + "'" + dados.can_sigla + "'" + "," + dados.can_fundacao + "," + "'" + dados.can_cargo + "'" + ')', callback)
}

function editarCandidato(dados, callback) {
    console.log("oi", dados.can_candidato)
    conexao.query("update candidato set can_candidato =" + " '" + dados.can_candidato + "'" + ", can_partido =" + " '" + dados.can_partido + "'" + ", can_sigla = " + " '" + dados.can_sigla + "'" + ", can_fundacao =" + " '" + dados.can_fundacao + "'" + ", can_cargo = " + " '" + dados.can_cargo + "'" + "where can_codigo = " + dados.can_codigo, callback)
}

function deleteEleitor (dado, callback) {
    conexao.query('delete from voto WHERE can_codigo = ' + dado.can_codigo, callback)
}

function deleteCandidato (dado, callback) {
    conexao.query('delete from candidato WHERE can_codigo = ' +  dado.can_codigo, callback)
}

