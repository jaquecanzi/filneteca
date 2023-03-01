const FilmesServices = require('../services/FilmesServices')

const FilmesController = {
    create: (req,res) => {
        res.render('filme-create.ejs')
    },
    showFilme:(req,res) => {
        res.render('filme.ejs')
    }
}

module.exports = FilmesController