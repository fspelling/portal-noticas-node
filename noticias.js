var http = require('http');

var server = http.createServer(function (req, res) {
    switch (req.url) {
        case "/tecnologia":
        res.end('<html><body>PORTAL DE TECNOLOGIA</body></html>');
        break;

        case "/moda":
        res.end('<html><body>PORTAL DE MODA</body></html>');
        break;

        case "/beleza":
        res.end('<html><body>PORTAL DE BELEZA</body></html>');
        break;

        default:
        res.end('<html><body>PORTAL DE NOTICIAS</body></html>');
    }
});

server.listen(4000);