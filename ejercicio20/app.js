var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//especificamos el subdirectorio donde se encuentran las pagians estaticas
app.use(express.static(__dirname + '/public'));

//extended: false significa  que parsea solo string(no archivos de imagenes por ejemplo)
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/mostrarnumeros', function (req, res) {
    var num1 = parseInt(req.body.numero1);
    var num2 = parseInt(req.body.numero2);
    var pagina = '<!doctype html><html><head></head><body>';
    for (var x = num1; x <= num2; x++) {
        pagina += '<a href="/mostrartabla?valor=' + x + '">' + x + '</a>' + ' - ';
    }
    pagina += '</body></html>';
    res.send(pagina);
});

app.get('/mostrartabla', function (req, res) {
    var num = parseInt(req.query.valor);
    var pagina = '<!doctype html><html><head></head><body>';
    for (var x = 1; x <= num; x++) {
        var tabla = num * x;
        pagina += num + ' * ' + x + ' = ' + tabla + '<br>';
    }
    pagina += '<a href="index.html">Retornar</a>';
    pagina += '</body></html>';
    res.send(pagina);
});

var server = app.listen(8888, function () {
    console.log('Servidor web iniciado');
});