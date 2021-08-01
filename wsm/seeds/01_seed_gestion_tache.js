
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
          gtt_icon_gauche: "male_1",
          gtt_icon_millieu: "male_3",
          gtt_icon_droite: "female_1",
        },
        {
          user_id: 1,
          gtt_bg_couleur: "#ECFEA4",
          gtt_titre: "Session Été 2021",
          gtt_icon_gauche: "female_5",
          gtt_icon_millieu: "male_5",
          gtt_icon_droite: "male_2",
        },
        {
          user_id: 2,
          gtt_bg_couleur: "#D2FEA4",
          gtt_titre: "Sprint 3",
          gtt_icon_gauche: "male_1",
          gtt_icon_millieu: "male_3",
          gtt_icon_droite: "male_2",
        },
        {
          user_id: 2,
          gtt_bg_couleur: "#D2FEA4",
          gtt_titre: "Session Été 2021",
          gtt_icon_gauche: "male_1",
          gtt_icon_millieu: "male_3",
          gtt_icon_droite: "male_2",
        },
        {
          user_id: 3,
          gtt_bg_couleur: "#D2FEA4",
          gtt_titre: "Sprint 3",
          gtt_icon_gauche: "female_1",
          gtt_icon_millieu: "male_5",
          gtt_icon_droite: "female_7",
        },
        {
          user_id: 3,
          gtt_bg_couleur: "#F2FEA4",
          gtt_titre: "Session Été 2021",
          gtt_icon_gauche: "female_1",
          gtt_icon_millieu: "male_5",
          gtt_icon_droite: "female_7",
        },
      ]);
    });
};
