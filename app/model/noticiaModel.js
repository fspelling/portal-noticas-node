module.exports = function(){
    this.getNoticias = function(con, callback) {
        con.query('select * from noticias', callback);
    }

    this.getNoticia = function(con, callback) {
        con.query('select * from noticias where id_noticia = 1', callback);
    }

    this.salvarNoticia = function(noticia, con, callback) {
        con.query('insert into noticias set ?', noticia, callback);
    }

    return this;
}
