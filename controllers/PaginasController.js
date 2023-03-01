const FilmesServices = require('../services/FilmesServices')

const PaginasController = {
    index: (req, res) => {
        let filmes = FilmesServices.showFilmes()
        console.log(filmes)
        res.render('index.ejs', {filmes})
    }
}

module.exports = PaginasController