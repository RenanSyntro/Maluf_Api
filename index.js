const app = require("express")();
const consign = require("consign");
const bancoDados = require("./config/bd");

app.bancoDados = bancoDados;

consign()
  .then("./config/middlewares.js")
  .then("./api/validator.js")
  .then("./api")
  .then("./config/routes.js")
  .into(app);

const port = 3001;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
