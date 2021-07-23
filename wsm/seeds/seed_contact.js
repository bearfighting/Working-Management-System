
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ctc_contact').del()
    .then(function () {
      // Inserts seed entries
      return knex('ctc_contact').insert([
        {gtc_id: 1, ctc_nom: 'Xing', ctc_prenom: 'Wenfeng', ctc_adresse: '2719 Jacobs Street', ctc_courriel: 'xing@wenfeng.com', ctc_telephone: '412-312-1137'},
        {gtc_id: 1, ctc_nom: 'Patel', ctc_prenom: 'Mitesh', ctc_adresse: '1466 Elm Drive', ctc_courriel: 'patel@mitesh.com', ctc_telephone: '646-506-3621'},
        {gtc_id: 1, ctc_nom: 'Stébenne', ctc_prenom: 'Sébastien', ctc_adresse: '613 Sarah Drive', ctc_courriel: 'stebenne@sebastien.com', ctc_telephone: '337-517-7362'}
      ]);
    });
};
