
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('gtc_gestion_contact').del()
    .then(function () {
      // Inserts seed entries
      return knex('gtc_gestion_contact').insert([
        {gtc_id: 1, user_id: 1},
        {gtc_id: 2, user_id: 2},
        {gtc_id: 3, user_id: 3}
      ]);
    });
};
