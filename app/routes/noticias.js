module.exports = function (app) {
    app.get('/noticias', function (req, res) {
        var myConn = app.config.dbConnection();

        myConn.query('select * from noticias', function(err, results) {
            res.render('noticias/noticias', {noticias: results});
        });
    });
}