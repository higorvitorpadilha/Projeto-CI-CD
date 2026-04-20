const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).send("ok");
});

// 👇 IMPORTANTE
app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor rodando na porta 3000");
});