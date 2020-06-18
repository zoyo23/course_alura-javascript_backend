const http = require('http');

const servidor = http.createServer(function (req, resp) {
    resp.end(`
    <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <h1>Casa do Código</h1>
        </body>
    </html>`);

});
servidor.listen(3000);
