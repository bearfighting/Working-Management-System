
exports.up = function(knex) {
	return knex.schema.createTable('gtb_gestion_banque', (table) => {
		table.increments('gtb_id').unsigned().primary();
		table.integer('user_id').unsigned();
		table.string('gtb_bg_couleur');
		table.string('gtb_titre');
	})
};

exports.down = function(knex) {
  return knex.schema.dropTable('gtb_gestion_banque');
};
