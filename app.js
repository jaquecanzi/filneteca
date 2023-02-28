//importar express
const express = require('express')
//criar servidor
const app = express()

//configurando pasta de arquivos estaticos acessiveis
app.use(express.static('public'))

//configurando ejs como template engine
app.set('view engine', 'ejs')

//importando e configurando router
const router = require('./routes/router')
app.use(router)

//pondo app +ara ouvir em porta 
app.listen(3000)