class LivroDao {
    constructor(db) {
        this._db = db;
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all('SELECT * FROM livros',

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
                ) values (?, ?, ?)`,
                [livro.titulo, livro.preco, livro.descricao],

                (err) => {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o livro!');
                    }

                    resolve();
                }
            );
        });
    }

    buscarPorId(id) {
        return new Promise((resolve, reject) => {

            this._db.get(`SELECT * FROM Livros WHERE ID = ?`,
                [id],

                (err, resultado) => {
                    if (err) {
                        console.log(err);
                        return reject('Livro não encontrado!');
                    }

                    resolve(resultado);
                }
            );
        });
    }

    atualizar(livro) {
        return new Promise((resolve, reject) => {

            this._db.run(`
                UPDATE Livros 
                SET titulo =    ?,
                    preco =     ?,
                    descricao = ?
                WHERE ID = ?
                `,
                [livro.titulo, livro.preco, livro.descricao, livro.id],

                (err) => {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível atualizar o livro!');
                    }

                    resolve();
                }
            );
        });
    }

    remove(id) {
        return new Promise((resolve, reject) => {

            this._db.run(`DELETE FROM Livros WHERE ID = ?`,
                [id],

                (err) => {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível remover o livro!');
                    }

                    resolve();
                }
            );
        });
    }
}

module.exports = LivroDao;