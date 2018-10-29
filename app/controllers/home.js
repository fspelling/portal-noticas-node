module.exports.index = function (app, req, res) {
    var con = app.config.dbConnection();
    var noticiasModel = new app.app.model.noticiasDAO(con);

    noticiasModel.getUltimasNoticias(function(error, result){
        console.log(error);
        res.render('home/index', {noticias: result});
    });
}
