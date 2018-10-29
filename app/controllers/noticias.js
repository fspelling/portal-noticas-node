module.exports.noticias = function (app, req, res) {
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.model.noticiasDAO(connection);

    noticiasModel.getNoticias(function (error, result) {
        res.render('noticias/noticias', { noticias: result });
    });
}

module.exports.noticia = function (app, req, res) {
    var myConn = app.config.dbConnection();
    var noticiasModel = new app.app.model.noticiasDAO(myConn);
    var id = req.query;

    noticiasModel.getNoticia(id.noticiaId, function (err, results) {
        console.log('test = ', err);
        res.render('noticias/noticia', { noticia: results });
    });
}
