const Tache = require("./tache");
const Colonne = require("./colonne");
const Carte = require("./carte");
const knex = require("../../knex_bd");

const tache_repo = new Tache({ db: knex });
const colonne_repo = new Colonne({ db: knex });
const carte_repo = new Carte({ db: knex });

module.exports = { tache_repo, colonne_repo, carte_repo };
