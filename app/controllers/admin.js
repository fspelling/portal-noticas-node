module.exports.form_inclusao = function (app, req, res) {
    res.render('admin/form_add_noticia', { validacao: {}, noticia: {} });
}

module.exports.form_inclusao_salvar = function (app, req, res) {
    var noticias = req.body;

    req.assert('titulo', 'titulo é obrigatório').notEmpty();
    req.assert('resumo', 'resumo é obrigatório').notEmpty();
    req.assert('resumo', 'resumo entre 10 a 100').len(10, 100);
    req.assert('autor', 'autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'data é obrigatório').notEmpty();
    req.assert('noticia', 'noticia é obrigatório').notEmpty();

    var erros = req.validationErrors();

    console.log(erros);
    if (erros) {
        res.render('admin/form_add_noticia', { validacao: erros, noticia: noticias });
        return;
    }

    var myConn = app.config.dbConnection();
    var noticiasModel = new app.app.model.noticiasDAO(myConn);

    noticiasModel.salvarNoticia(noticias, function (err, results) {
        res.redirect('/noticias');
    });
}