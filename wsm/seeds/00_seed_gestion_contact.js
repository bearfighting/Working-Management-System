
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('gtc_gestion_contact').del()
    .then(function () {
      // Inserts seed entries
      return knex('gtc_gestion_contact').insert([
        {
          user_id: 1,
          gtc_bg_couleur: "#D2FEA4",
          gtc_titre: "Projet INM5151",
          gtc_icon_gauche: "male_1",
          gtc_icon_millieu: "male_3",
          gtc_icon_droite: "female_1",
        },
        {
          user_id: 1,
          gtc_bg_couleur: "#ECFEA4",
          gtc_titre: "Entreprise",
          gtc_icon_gauche: "female_5",
          gtc_icon_millieu: "male_5",
          gtc_icon_droite: "male_2",
        },
        {
          user_id: 1,
          gtc_bg_couleur: "#DCC7FF",
          gtc_titre: "Groupe D&D",
          gtc_icon_gauche: "female_7",
          gtc_icon_millieu: "female_3",
          gtc_icon_droite: "female_6",
        },
        {
          user_id: 2,
          gtc_bg_couleur: "#D2FEA4",
          gtc_titre: "Travail",
          gtc_icon_gauche: "male_1",
          gtc_icon_millieu: "male_3",
          gtc_icon_droite: "male_2",
        },
        {
          user_id: 3,
          gtc_bg_couleur: "#D2FEA4",
          gtc_titre: "Amis",
          gtc_icon_gauche: "female_1",
          gtc_icon_millieu: "male_5",
          gtc_icon_droite: "female_7",
        },
        {
          user_id: 4,
          gtc_bg_couleur: "#D2FEA4",
          gtc_titre: "Amis",
          gtc_icon_gauche: "female_1",
          gtc_icon_millieu: "male_5",
          gtc_icon_droite: "female_7",
        }
      ]);
    });
};
