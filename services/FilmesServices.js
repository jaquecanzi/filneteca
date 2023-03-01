const filmes = require('../database/filmes.json')
const fs = require('fs')
const path = require('path')

function showFilmes() {
    
    return filmes
}


module.exports = {
    showFilmes
}