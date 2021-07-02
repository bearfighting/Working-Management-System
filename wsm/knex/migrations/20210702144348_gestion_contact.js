
exports.up = function(knex) {
	return knex.schema.createTable('gtc_gestion_contact', (table) => {
		table.increments('gtc_id').unsigned().primary();
		table.string('user_id').unsigned();
	})
};

exports.down = function(knex) {
  return knex.schema.dropTable('gtc_gestion_contact');
};
