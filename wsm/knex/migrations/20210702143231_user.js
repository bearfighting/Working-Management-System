
exports.up = function (knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id').unsigned().primary();
    table.string('nom');
    table.string('prenom');
    table.string('email');
    table.boolean('est_actif');
    table.string('mots_de_passe');
    table.string('avatar');
    table.string('adresse');
    table.string('telephone');
    table.string('langue');
    table.string('theme');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('user');
};
