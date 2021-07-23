
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('gtc_gestion_contact').del()
    .then(function () {
      // Inserts seed entries
      return knex('gtc_gestion_contact').insert([
        {user_id: 1, gtc_bg_couleur: "#D2FEA4", gtc_titre: "Projet INM5151"},
        {user_id: 1, gtc_bg_couleur: "#ECFEA4", gtc_titre: "Cas 2"},
        {user_id: 1, gtc_bg_couleur: "#DCC7FF", gtc_titre: "Cas 3"},
        {user_id: 2, gtc_bg_couleur: "#D2FEA4", gtc_titre: "Cas 1"},
        {user_id: 3, gtc_bg_couleur: "#D2FEA4", gtc_titre: "Cas 1"}
      ]);
    });
};
