module.exports = function (app) {
    app.get('/noticias', function (req, res) {
        var mysql = require('mysql');

        var con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'portal_noticias'
        });

        con.query('select * from noticias', function(err, results) {
            res.render('noticias/noticias', {noticias: results});
        });
    });
}