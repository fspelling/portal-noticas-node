module.exports = function (app) {
    app.get('/form_noticia', function (req, res) {
        app.app.controllers.admin.form_inclusao(app, req, res);
    });

    app.post('/noticias/salvar', function (req, res) {
        app.app.controllers.admin.form_inclusao_salvar(app, req, res);
    });
}