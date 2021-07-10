const OutilsRepo = require("./outils_repo");
const Outils = require("./outils");

const GestionBanqueRepo = require("../gestion_banque");
const GestionContactRepo = require("../gestion_contact");
const GestionTacheRepo = require("../gestion_tache");

module.exports = new OutilsRepo(Outils, {
    banque_repo: GestionBanqueRepo, 
    contact_repo: GestionContactRepo, 
    tache_repo: GestionTacheRepo
});