const GestionBanqueRepo = require("./gestion_contact_repo");
const GestionContact = require("./gestion_contact");

module.exports = new GestionBanqueRepo(GestionContact, "gtc_gestion_contact");