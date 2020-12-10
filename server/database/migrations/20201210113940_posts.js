exports.up = function(knex) {
    return knex.schema.createTable('posts', table => {
        table.increments('id').notNullable()
        table.string('title', 128).notNullable()
        table.string('description').notNullable()
        table.string('body').notNullable()
        table.string('date').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('posts')
};
