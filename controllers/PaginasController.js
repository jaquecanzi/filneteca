const FilmesServices = require('../services/FilmesServices')

const PaginasController = {
    index: (req, res) => {
        let filmes = FilmesServices.showFilmes()
        console.log(filmes)
        res.render('index.ejs', {filmes})
    },
    showFilme:(req,res) => {
        // capturar o id do filme desejado
        let id = req.params.id
        //capturar o filme desejado
        let filme = FilmesServices.idFilme(id)
        //renderizar filme.ejs passando p ela o filme encontrado
        res.render('filme.ejs', {filme})
    }
}

module.exports = PaginasController