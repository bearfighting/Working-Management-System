
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('col_colonne').del()
    .then(function () {
      // Inserts seed entries
      return knex('col_colonne').insert([
        {
          gtt_id: 1,
          col_titre: "À faire",
        },
        {
          gtt_id: 1,
          col_titre: "En cours",
        },
        {
          gtt_id: 1,
          col_titre: "Terminé",
        },
        {
          gtt_id: 3,
          col_titre: "À faire",
        },
        {
          gtt_id: 3,
          col_titre: "En cours",
        },
        {
          gtt_id: 3,
          col_titre: "Terminé",
        },
        {
          gtt_id: 5,
          col_titre: "À faire",
        },
        {
          gtt_id: 5,
          col_titre: "En cours",
        },
        {
          gtt_id: 5,
          col_titre: "Terminé",
        },
      ]);
    });
};
