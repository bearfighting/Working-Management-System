
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('col_colonne').del()
    .then(function () {
      // Inserts seed entries
      return knex('col_colonne').insert([
        {
          gtt_id: 1,
          col_titre: "À faire",
          col_ordre: 1,
        },
        {
          gtt_id: 1,
          col_titre: "En cours",
          col_ordre: 2,
        },
        {
          gtt_id: 1,
          col_titre: "Terminé",
          col_ordre: 3,
        },
        {
          gtt_id: 3,
          col_titre: "À faire",
          col_ordre: 1,
        },
        {
          gtt_id: 3,
          col_titre: "En cours",
          col_ordre: 2,
        },
        {
          gtt_id: 3,
          col_titre: "Terminé",
          col_ordre: 3,
        },
        {
          gtt_id: 5,
          col_titre: "À faire",
          col_ordre: 1,
        },
        {
          gtt_id: 5,
          col_titre: "En cours",
          col_ordre: 2,
        },
        {
          gtt_id: 5,
          col_titre: "Terminé",
          col_ordre: 3,
        },
      ]);
    });
};
