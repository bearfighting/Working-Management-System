
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('gtt_gestion_tache').del()
    .then(function () {
      // Inserts seed entries
      return knex('gtt_gestion_tache').insert([
        {
          user_id: 1,
          gtt_bg_couleur: "#D2FEA4",
          gtt_titre: "Sprint 3",
        },
        {
          user_id: 1,
          gtt_bg_couleur: "#ECFEA4",
          gtt_titre: "Session Été 2021",
        },
        {
          user_id: 2,
          gtt_bg_couleur: "#D2FEA4",
          gtt_titre: "Sprint 3",
        },
        {
          user_id: 2,
          gtt_bg_couleur: "#D2FEA4",
          gtt_titre: "Session Été 2021",
        },
        {
          user_id: 3,
          gtt_bg_couleur: "#D2FEA4",
          gtt_titre: "Sprint 3",
        },
        {
          user_id: 3,
          gtt_bg_couleur: "#F2FEA4",
          gtt_titre: "Session Été 2021",
        },
      ]);
    });
};
