
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('crt_carte').del()
    .then(function () {
      // Inserts seed entries
      return knex('crt_carte').insert([
        {
          col_id: 3,
          gtt_id: 1,
          crt_titre: "Consulter une carte",
          crt_description: "Tâche backend",
          crt_date_debut: "28-07-2021",
          crt_date_echeance: "17-08-2021",
        },
        {
          col_id: 2,
          gtt_id: 1,
          crt_titre: "Ajouter une carte",
          crt_description: "Tâche backend",
          crt_date_debut: "28-07-2021",
          crt_date_echeance: "17-08-2021",
        },
        {
          col_id: 1,
          gtt_id: 1,
          crt_titre: "Modifier une carte",
          crt_description: "Tâche backend",
          crt_date_debut: "28-07-2021",
          crt_date_echeance: "17-08-2021",
        },
        {
          col_id: 1,
          gtt_id: 1,
          crt_titre: "Supprimer une carte",
          crt_description: "Tâche backend",
          crt_date_debut: "28-07-2021",
          crt_date_echeance: "17-08-2021",
        },
        {
          col_id: 6,
          gtt_id: 3,
          crt_titre: "Consulter une carte",
          crt_description: "Tâche backend",
          crt_date_debut: "28-07-2021",
          crt_date_echeance: "17-08-2021",
        },
        {
          col_id: 5,
          gtt_id: 3,
          crt_titre: "Ajouter une carte",
          crt_description: "Tâche backend",
          crt_date_debut: "28-07-2021",
          crt_date_echeance: "17-08-2021",
        },
        {
          col_id: 4,
          gtt_id: 3,
          crt_titre: "Modifier une carte",
          crt_description: "Tâche backend",
          crt_date_debut: "28-07-2021",
          crt_date_echeance: "17-08-2021",
        },
        {
          col_id: 4,
          gtt_id: 3,
          crt_titre: "Supprimer une carte",
          crt_description: "Tâche backend",
          crt_date_debut: "28-07-2021",
          crt_date_echeance: "17-08-2021",
        },
        {
          col_id: 9,
          gtt_id: 5,
          crt_titre: "Consulter une carte",
          crt_description: "Tâche backend",
          crt_date_debut: "28-07-2021",
          crt_date_echeance: "17-08-2021",
        },
        {
          col_id: 8,
          gtt_id: 5,
          crt_titre: "Ajouter une carte",
          crt_description: "Tâche backend",
          crt_date_debut: "28-07-2021",
          crt_date_echeance: "17-08-2021",
        },
        {
          col_id: 7,
          gtt_id: 5,
          crt_titre: "Modifier une carte",
          crt_description: "Tâche backend",
          crt_date_debut: "28-07-2021",
          crt_date_echeance: "17-08-2021",
        },
        {
          col_id: 7,
          gtt_id: 5,
          crt_titre: "Supprimer une carte",
          crt_description: "Tâche backend",
          crt_date_debut: "28-07-2021",
          crt_date_echeance: "17-08-2021",
        },
      ]);
    });
};
