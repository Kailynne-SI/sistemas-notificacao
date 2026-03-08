const express = require("express");
const app = express();

app.get("/notificacao", (req, res) => {
    res.json({
        mensagem: "Nova notificação recebida!"
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
