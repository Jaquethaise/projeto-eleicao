const controller = require('../controllers/candidatoControllers.js');

server.get('/candidato', controller.candidatoMenu)

server.get('/candidato/listar', controller.candidatoGetAll)

server.get('/candidato/consultar/:codigo', controller.candidatoGetById)

server.post('/candidato/deletar/:codigo', controller.candidatoDelete)

server.get('/candidato/novo', controller.candidatoNovo)

server.post('/candidato/new', controller.salvarCandidato)

server.get('/candidato/editar/:codigo', controller.candidatoEditar)

server.post('/candidato/edit', controller.editarCandidato)

//server.get('/candidato/ativoInativo/:codigo', controller.candidatoAtivoInativo)


