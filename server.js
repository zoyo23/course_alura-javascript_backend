const express = require('express');
const app = express();

app.listen(3000, function () {
    console.log(`Servidor rodando na porta: 3000`)
});

app.get('/', function (req, resp) {
    resp.send(`
    <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <h1>Casa do Código</h1>
        </body>
    </html>`
    );
});

app.get('/livros', function (req, resp) {
    resp.send(`
    <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <h1>Listagem de livros</h1> 
        </body>
    </html>`
    );
});