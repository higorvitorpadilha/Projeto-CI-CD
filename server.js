const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("API v1.0.3");
});

app.get("/health", (req, res) => {
  res.status(200).send("ok");
});

// 👇 IMPORTANTE
app.listen(3000, "0.0.0.0", () => {
  console.log("rodando com cloudwatch 🚀");
});