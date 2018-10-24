var app = require('./config/server');
var rotaHome = require('./app/routes/home')(app);
var rotaAdmin = require('./app/routes/admin')(app);
var rotaNoticias = require('./app/routes/noticias')(app);

app.listen(4000, function(){
    console.log('rodando');
});
