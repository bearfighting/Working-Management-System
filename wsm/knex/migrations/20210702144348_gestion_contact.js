
exports.up = function(knex) {
	return knex.schema.createTable('gtc_gestion_contact', (table) => {
		table.increments('gtc_id').unsigned().primary();
		table.integer('user_id').unsigned();
		table.string('gtc_bg_couleur');
		table.string('gtc_titre');
	})
};

exports.down = function(knex) {
  return knex.schema.dropTable('gtc_gestion_contact');
};
