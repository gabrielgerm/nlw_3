// importar uma dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando o express
const server = express();
server

  //utilizar bodyhjgakdojjiwjn do req
  .use(express.urlencoded({ extended: true }))

  //utilizando arquivos estáticos
  .use(express.static('public'))

  //configurar um template engine
  .set('views', path.join(__dirname, "views"))
  .set('view engine', 'hbs')

  // criar rotas da aplicação
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage)

//ligar o servidor
server.listen(5500);
