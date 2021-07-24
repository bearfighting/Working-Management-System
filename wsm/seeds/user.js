
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {nom: 'Stébenne', prenom: 'Sébastien', email: 'seb@steb.com', mots_de_passe: '123', est_actif: true, avatar: '/static/user_avatar_1.jpeg', adresse: '613 Sarah Drive', telephone: '337-517-7362', langue: 'FR', theme: 'dark'},
        {nom: 'Xing', prenom: 'Wenfeng', email: 'wen@xing.com', mots_de_passe: '123', est_actif: true, avatar: '/static/user_avatar_2.jpeg', adresse: '2719 Jacobs Street', telephone: '412-312-1137', langue: 'FR', theme: 'light'},
        {nom: 'Patel', prenom: 'Mitesh', email: 'mit@pat.com', mots_de_passe: '123', est_actif: true, avatar: '/static/user_avatar_3.jpeg', adresse: '1466 Elm Drive', telephone: '646-506-3621', langue: 'FR', theme: 'dark'},
      ])
    });
};
