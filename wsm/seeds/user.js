
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {nom: 'Stébenne', prenom: 'Sébastien', email: 'seb@steb.com', mots_de_passe: '123', est_actif: true},
        {nom: 'Xing', prenom: 'Wenfeng', email: 'wen@xing.com', mots_de_passe: '123', est_actif: true},
        {nom: 'Patel', prenom: 'Mitesh', email: 'mit@pat.com', mots_de_passe: '123', est_actif: true},
      ])
    });
};
