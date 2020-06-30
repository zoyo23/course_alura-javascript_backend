class LivroDao {
    constructor(db) {
        this._db = db;
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (erro, resultado) => {
                    if (erro)
                        return reject('Não foi possível listar os livros!');

                    return resolve(resultado);
                }
            );
        })
    }

    adiciona(livro) {
        return new Promise((resolve, reject) => {

            this._db.run(`
            INSERT INTO Livros (
                titulo,
                preco,
                descricao
            ) values (?, ?, ?)
            `, [livro.titulo, livro.preco, livro.descricao],
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o livro!');
                    }

                    resolve();
                }
            );
        });
    }
}

module.exports = LivroDao;