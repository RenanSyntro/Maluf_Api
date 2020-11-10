
exports.up = function (knex) {
    return knex.schema.createTable('registros', table => {
        table.increments('id').primary()
        table.float('temperatura1')
        table.float('temperatura2')
        table.float('velocidade')
        table.float('carga')
        table.date('data')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('registros')
};
