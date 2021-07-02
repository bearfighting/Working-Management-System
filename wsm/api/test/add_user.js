const knex = require("../knex_bd");

knex('user').insert({ nom: 'b', prenom: 'haha', email: "222@gmail.com", mots_de_passe: 12345 })
    .then(() => console.log("added"));
