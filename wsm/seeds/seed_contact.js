
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ctc_contact').del()
    .then(function () {
      // Inserts seed entries
      return knex('ctc_contact').insert([
        {
          gtc_id: 1, 
          ctc_nom: 'Xing', 
          ctc_prenom: 'Wenfeng', 
          ctc_adresse: '123 Fausse rue', 
          ctc_courriel: 'xing@wenfeng.com', 
          ctc_telephone: '450-666-777',
          ctc_profil_icon: 'male_2'
        },
        {
          gtc_id: 1, 
          ctc_nom: 'Patel', 
          ctc_prenom: 'Mitesh', 
          ctc_adresse: '321 Mauvaise rue',
          ctc_courriel: 'patel@mitesh.com',
          ctc_telephone: '111-222-3333',
          ctc_profil_icon: 'male_1',
        },
        {
          gtc_id: 1,
          ctc_nom: 'Stébenne',
          ctc_prenom: 'Sébastien',
          ctc_adresse: '111 Rue',
          ctc_courriel: 'stebenne@sebastien.com',
          ctc_telephone: '514-999-8888',
          ctc_profil_icon: 'male_3',
          }
      ]);
    });
};
