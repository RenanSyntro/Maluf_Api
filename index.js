const app = require('express')()
const consign = require('consign')
const db = require('./config/bd')

app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./api/validator.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

const port = 3000

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))