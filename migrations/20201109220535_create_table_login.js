
exports.up = function (knex) {
    return knex.schema.createTable('login', table => {
        table.increments('id').primary()
        table.string('usuario').notNull()
        table.string('senha').notNull()
        table.bool('manutencao').notNull()
        table.bool('editReceita').notNull()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('login')
};
