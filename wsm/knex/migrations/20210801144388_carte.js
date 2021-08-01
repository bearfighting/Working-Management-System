exports.up = function (knex) {
  return knex.schema.createTable('crt_carte', (table) => {
    table.increments('crt_id').unsigned().primary();
    table.integer('col_id').unsigned();
    table.foreign('col_id').references('col_colonne.col_id');
    table.integer('gtt_id').unsigned();
    table.foreign('gtt_id').references('gtt_gestion_tache.gtt_id');
    table.string('crt_titre');
    table.string('crt_description');
    table.date('crt_date_debut');
    table.date('crt_date_echeance');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('crt_carte');
};
