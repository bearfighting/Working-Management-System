const GestionContactValidateur = require("./gestion_contact_validateur");
const GestionTacheValidateur = require("./gestion_tache_validateur");
const OutilsValidateur = require("./outils_validateur");
const GestionBanqueValidateur = require("./gestion_banque_validateur");

const { outils , gestion_banque, gestion_tache, gestion_contact } = require("../repository");


module.exports = {
    gestion_banque_validateur: new GestionBanqueValidateur(gestion_banque),
    gestion_contact_validateur: new GestionContactValidateur(gestion_contact),
    gestion_tache_validateur: new GestionTacheValidateur(gestion_tache),
    outils_validateur: new OutilsValidateur(outils)
}
