const controller = require('../controllers/votoControllers.js');

server.get('/voto', controller.votoMenu)

server.get('/voto/listar', controller.votoGetAll)

server.get('/voto/consultar/:codigo', controller.votoGetById)

server.get('/voto/novo', controller.votoNovo)

server.post('/voto/new', controller.salvarVoto)

server.get('/voto/editar/:codigo', controller.votoEditar)

server.post('/voto/edit', controller.editarVoto)

server.post('/voto/deletar/:codigo', controller.votoDelete)



