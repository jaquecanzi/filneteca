const express = require('express')
const PaginasController = require('../controllers/PaginasController')
const FilmesController = require('../controllers/FilmesController')

//Criar router
const router = express.Router()

router.get('/', PaginasController.index) //passo 1
router.get('/filmes/:id', PaginasController.showFilme) //passo 1
router.get('/filmes/create', FilmesController.create)

//Exportando o router
module.exports = router