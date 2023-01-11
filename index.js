const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Bem vindo")
})

app.listen(port, () => {
    console.log("Aplicação executando na porta", port);
})