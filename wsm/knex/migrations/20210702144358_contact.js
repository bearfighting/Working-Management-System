exports.up = function (knex) {
  return knex.schema.createTable('ctc_contact', (table) => {
    table.increments('ctc_id').unsigned().primary();
    table.integer('gtc_id').unsigned();
    table.foreign('gtc_id').references('gtc_gestion_contact.gtc_id');
    table.string('ctc_nom');
    table.string('ctc_prenom');
    table.string('ctc_courriel');
    table.string('ctc_adresse');
    table.string('ctc_telephone');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('ctc_contact');
};
