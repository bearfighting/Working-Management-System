exports.up = function (knex) {
  return knex.schema.createTable('col_colonne', (table) => {
    table.increments('col_id').unsigned().primary();
    table.integer('gtt_id').unsigned();
    table.foreign('gtt_id').references('gtt_gestion_tache.gtt_id');
    table.string('col_titre');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('col_colonne');
};
