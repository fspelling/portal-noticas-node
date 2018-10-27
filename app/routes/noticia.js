module.exports = function (app) {
    app.get('/noticia', function (req, res) {
        var myConn = app.config.dbConnection();
        var noticiasModel = app.app.model.noticiasModel;

        noticiasModel.getNoticia(myConn, function (err, results) {
            res.render('noticias/noticia', { noticia: results });
        });
    });
}