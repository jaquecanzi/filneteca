const filmes = require('../database/filmes.json')
const fs = require('fs')
const path = require('path')

function showFilmes() {
    return filmes
}

function idFilme(idF) {
    const filme = filmes.find(i => i.id == idF)
    return filme
}

module.exports = {
    showFilmes,
    idFilme
}