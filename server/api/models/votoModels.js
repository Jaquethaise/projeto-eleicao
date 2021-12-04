const conexao = require('../../config/conexao.js');

module.exports = {
    getAllVoto,
    getByIdVoto,  
    salvarVoto,
    editarVoto,
    deleteEleitor
}

function getAllVoto (callback) {
    conexao.query('select * from voto', callback)
}

function getByIdVoto (id, callback) {
    conexao.query('select * from voto WHERE vot_codigo = ' + id, callback)
}

function salvarVoto(dados, callback) {
    conexao.query("insert into voto (vot_eleitor, vot_nrotitulo, vot_nrourna, vot_zonaeleitoral, can_codigo) values (" + "'" + dados.vot_eleitor + "'" + "," + dados.vot_nrotitulo + "," + dados.vot_nrourna + "," + dados.vot_zonaeleitoral + "," + dados.can_codigo + ')', callback)
}

function editarVoto(dados, callback) {
    console.log("oi", "update voto set vot_eleitor =" + " '" + dados.vot_eleitor + "'" + ", vot_nrotitulo = " + dados.vot_nrotitulo + ", vot_nrourna = " + dados.vot_nrourna + ", vot_zonaeleitoral = " + dados.vot_zonaeleitoral + "where vot_codigo = " + dados.vot_codigo)
    conexao.query("update voto set vot_eleitor =" + " '" + dados.vot_eleitor + "'" + ", vot_nrotitulo = " + dados.vot_nrotitulo + ", vot_nrourna = " + dados.vot_nrourna + ", vot_zonaeleitoral = " + dados.vot_zonaeleitoral + " where vot_codigo = " + dados.vot_codigo, callback)
}

function deleteEleitor (dado, callback) {
    conexao.query('delete from voto WHERE vot_codigo = ' + dado.vot_codigo, callback)
}


