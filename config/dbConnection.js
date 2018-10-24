var mysql = require('mysql');

var conMySql = function () {
    var mysql = require('mysql');

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });
}

module.exports = function() {
    return conMySql;
}