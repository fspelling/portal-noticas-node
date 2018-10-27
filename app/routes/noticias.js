module.exports = function (app) {
    app.get('/noticias', function (req, res) {
        var myConn = app.config.dbConnection();
        var noticiasModel = app.app.model.noticiasModel;

        noticiasModel.getNoticias(myConn, function (err, results) {
            res.render('noticias/noticias', { noticias: results });
        });
    });
}