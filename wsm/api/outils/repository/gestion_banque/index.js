const GestionBanqueRepo = require("./gestion_banque_repo");
const GestionBanque = require("./gestion_banque");

module.exports = new GestionBanqueRepo(GestionBanque, "gtb_gestion_banque");