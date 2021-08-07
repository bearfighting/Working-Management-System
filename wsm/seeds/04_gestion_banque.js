
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('gtb_gestion_banque').del()
    .then(function () {
      // Inserts seed entries
      return knex('gtb_gestion_banque').insert([
        {
          user_id: 1,
          gtb_bg_couleur: "#D2FEA4",
          gtb_titre: "Sprint 3",
        },
        {
          user_id: 1,
          gtb_bg_couleur: "#ECFEA4",
          gtb_titre: "Session Été 2021",
        },
        {
          user_id: 2,
          gtb_bg_couleur: "#D2FEA4",
          gtb_titre: "Sprint 3",
        },
        {
          user_id: 2,
          gtb_bg_couleur: "#D2FEA4",
          gtb_titre: "Session Été 2021",
        },
        {
          user_id: 3,
          gtb_bg_couleur: "#D2FEA4",
          gtb_titre: "Sprint 3",
        },
        {
          user_id: 3,
          gtb_bg_couleur: "#F2FEA4",
          gtb_titre: "Session Été 2021",
        },
      ]);
    });
};
