const FilmesServices = require('../services/FilmesServices')

const FilmesController = {
    create: (req,res) => {
        res.render('filme-create.ejs')
    }
}

module.exports = FilmesController