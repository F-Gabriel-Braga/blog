const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database/database');

const app = express();
const port = 3000;

// view engine
app.set('view engine', 'ejs');

// static
app.use(express.static('public'))

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// database
connection.authenticate()
    .then(() => {
        console.log("Aplicação conectada com banco de dados");
    })
    .catch(error => {
        console.error("Erro ao conectar com banco de dados:", error);
    })

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(port, () => {
    console.log("Aplicação executando na porta", port);
})