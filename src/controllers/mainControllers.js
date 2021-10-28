//ACA VA NUESTRA FUENTE DE DATOS
const recipes = require('../data/recipes.json')

const mainController = {
    index: (req, res) => {
        res.render('index', {recipes});
     },

    detail:  (req, res) => {
        const recipe = 
        // SI EL ID QUE SE BUSCA NO EXISTE... CON EL || TE DA LA RESPUESTA QUE PONGAS
        recipes.find((recipe) => recipe.id == req.params.id) || recipes [0];
        res.render('detail', {recipe});
     }
}

module.exports = mainController;