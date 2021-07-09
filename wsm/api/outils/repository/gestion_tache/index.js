const GestionTacheRepo = require("./gestion_tache_repo");
const GestionTache = require("./gestion_tache");

module.exports = new GestionTacheRepo(GestionTache, "gtt_gestion_tache");