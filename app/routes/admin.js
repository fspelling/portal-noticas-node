module.exports = function (app) {
    app.get('/form_noticia', function (req, res) {
        res.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar', function (req, res) {
        var noticias = req.body;
        
        var myConn = app.config.dbConnection();
        var noticiasModel = app.app.model.noticiasModel;

        noticiasModel.salvarNoticia(noticias, myConn, function (err, results) {
            res.redirect('/noticias');
        });
    });
}   