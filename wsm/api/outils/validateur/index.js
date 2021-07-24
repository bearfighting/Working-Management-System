const GestionContactValidateur = require("./gestion_contact_validateur");
const OutilsValidateur = require("./outils_validateur");

const {outils , gestion_banque, gestion_tache, gestion_contact} = require("../repository");

module.exports = {
    gestion_contact_validateur: new GestionContactValidateur(gestion_contact),
    outils_validateur: new OutilsValidateur(outils)
}
