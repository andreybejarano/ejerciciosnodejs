var http = require('http');
var url = require('url');
var fs = require('fs');

var seridor = http.createServer(function (pedido, respuesta) {
    var objetoUrl = url.parse(pedido.url);
    var camino = 'static' + objetoUrl.pathname;
    if (camino == 'static/')
        camino = 'static/index.html';
    fs.exists(camino, function (existe) {
        if (existe) {
            fs.readFile(camino, function (error, contenido) {
                if (error) {
                    respuesta.writeHead(500, { 'Conten-Type': 'text/html' });
                    respuesta.write('Error interno');
                    respuesta.end();
                } else {
                    respuesta.writeHead(200, { 'Conten-Type': 'text/html' });
                    respuesta.write(contenido);
                    respuesta.end();
                }
            });
        } else {
            respuesta.writeHead(404, { 'Content-Type': 'text/html' });
            respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');
            respuesta.end();
        }
    });
});

seridor.listen(8888);

console.log('Servidor iniciado');