module.exports = app => {
    app.route('/receitas')
        .post(app.api.receita.save)
        .get(app.api.receita.get)

    app.route('/receitas/:id')
        .put(app.api.receita.save)

    app.route('/logins')
        .post(app.api.login.save)
        .get(app.api.login.get)
}