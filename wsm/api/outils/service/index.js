const {
    outils,
    gestion_contact,
    gestion_banque,
    gestion_tache
} = require("../repository");

const OutilsService = require("./outils_service");
const GestionContactService = require("./gestion_contact_service");
const GestionTacheService = require("./gestion_tache_service");

module.exports = {
    outils_service : new OutilsService(outils),
    gestion_contact_service : new GestionContactService(gestion_contact),
    gestion_tache_service : new GestionTacheService(gestion_tache),
}
