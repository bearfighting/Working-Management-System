
exports.up = function(knex) {
	return knex.schema.createTable('gtt_gestion_tache', (table) => {
		table.increments('gtt_id').unsigned().primary();
		table.integer('user_id').unsigned();
		table.string('gtt_bg_couleur');
		table.string('gtt_titre');
	})
};

exports.down = function(knex) {
  return knex.schema.dropTable('gtt_gestion_tache');
};
