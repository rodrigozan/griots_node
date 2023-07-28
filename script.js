/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'griots';
const collection = 'User';

// Create a new database.
//use(database);

// Inserindo os usuários
db.User.insertMany([
    {
        "name": "Rod Zandonadi",
        "email": "rodzandonadi@gmail.com",
        "username": "rodzandonadi",
        "password": "Seilad12",
        "birth": "1982-05-12",
        "gender": "M",
        "zipCode": "12247-480",
        "street": "Rua Benedito Fraga da Silva",
        "number": "1136",
        "district": "Galo Branco",
        "city": "São José dos Campos",
        "state": "SP",
        "country": "Brasil",
        "role": ["system_admin", "writer"],
    },
    {
        "name": "Deborah Zandonadi",
        "email": "deborahzandonadi@gmail.com",
        "username": "deborahzandonadi",
        "password": "Seilad12",
        "birth": "1986-06-08",
        "gender": "F",
        "zipCode": "12247-480",
        "street": "Rua Benedito Fraga da Silva",
        "number": "1136",
        "district": "Galo Branco",
        "city": "São José dos Campos",
        "state": "SP",
        "country": "Brasil",
        "role": ["reader"],
    },
    {
        "name": "Yasmin Zandonadi",
        "email": "yasmin.zandonadi@gmail.com",
        "username": "yasmin.zandonadi",
        "password": "Seilad12",
        "birth": "1986-06-08",
        "gender": "F",
        "zipCode": "12247-480",
        "street": "Rua Benedito Fraga da Silva",
        "number": "1136",
        "district": "Galo Branco",
        "city": "São José dos Campos",
        "state": "SP",
        "country": "Brasil",
        "role": ["writer"],
    },
    {
        "name": "Yasmin Zandonadi",
        "email": "yasmin.zandonadi@gmail.com",
        "username": "yasmin.zandonadi",
        "password": "Seilad12",
        "birth": "1986-06-08",
        "gender": "F",
        "zipCode": "12247-480",
        "street": "Rua Benedito Fraga da Silva",
        "number": "1136",
        "district": "Galo Branco",
        "city": "São José dos Campos",
        "state": "SP",
        "country": "Brasil",
        "role": ["editor"],
    },
    {
        "name": "Yasmin Zandonadi",
        "email": "yasmin.zandonadi@gmail.com",
        "username": "yasmin.zandonadi",
        "password": "Seilad12",
        "birth": "1986-06-08",
        "gender": "F",
        "zipCode": "12247-480",
        "street": "Rua Benedito Fraga da Silva",
        "number": "1136",
        "district": "Galo Branco",
        "city": "São José dos Campos",
        "state": "SP",
        "country": "Brasil",
        "role": ["publisher"],
    }
])

/*
db.series.insertMany([
    {
        "title": "Semideuses e Bruxos",
        "genre": ["fantasia", "ficcao-cientifica"],
        "description": "Uma série baseada em Percy Jackson e Harry Potter",
        "books": []
    },
    {
        "title": "A Filha do Tempo",
        "genre": ["fantasia", "ficcao-cientifica"],
        "description": "Uma série baseada em Percy Jackson e Harry Potter",
        "books": []
    }
])

// Inserindo os livros
db.books.insertMany([
    {
        "title": "A Árvore da Fronteira",
        "writer": "author1",
        "cover": "caminho/para/imagem.jpg",
        "description": "Em um mundo mágico cheio de criaturas fantásticas, um grupo de adolescentes embarca em uma jornada épica. Eles devem desvendar os mistérios da Árvore da Fronteira, um local sagrado que conecta os reinos dos humanos e dos seres mágicos. Com poderes especiais e amizades improváveis, eles enfrentam desafios perigosos para proteger a harmonia entre os dois mundos. A Árvore da Fronteira é uma história repleta de ação, aventura e magia que cativará leitores de todas as idades.",
        "co_writers": [],
        "chapters": [
            {
                "title": "Capítulo 1",
                "content": "Conteúdo do Capítulo 1",
                "comments": [
                    {
                        "author": "Capítulo 1",
                        "content": "Conteúdo do Capítulo 1",
                    }
                ]
            },
            {
                "title": "Capítulo 2",
                "content": "Conteúdo do Capítulo 2",
                "comments": []
            }
        ],
        "feedbacks": []
    },
    {
        "title": "Livro 2",
        "writer": "writer2",
        "co_writers": ["writer1"],
        "chapters": [
            {
                "_id": "chapter1",
                "title": "Capítulo 1",
                "content": "Conteúdo do Capítulo 1",
                "comments": []
            }
        ],
        "feedbacks": []
    }
]);

// Inserindo os plannings
db.plannings.insertMany([
    {
        "writer": "writer1",
        "characters": [],
        "plots": [],
        "wordbuilding": [],
        "feedbacks": []
    }
]);
*/

print("Dados inseridos com sucesso!");
