exports.up = function (knex) {
  return knex.schema.createTable('contact', (table) => {
    table.increments('id').unsigned().primary();
    table.string('nom');
    table.string('prenom');
    table.string('email');
    table.string('adresse');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('contact');
};
