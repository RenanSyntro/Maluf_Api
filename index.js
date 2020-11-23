const app = require("express")();
const consign = require("consign");
const {initReadCLP} = require("./services/requestDataCLP")();
const bancoDados = require("./config/bd");
const {saveData} = require("./services/saveDataClpDb");

app.bancoDados = bancoDados;

consign()
  .then("./config/middlewares.js")
  .then("./api/validator.js")
  .then("./api")
  .then("./config/routes.js")
  .into(app);

  initReadCLP();
  saveData();

const port = 3001;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
