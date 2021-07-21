const ProfilRepo = require("./profil_repo");
const Profil = require("./profil");

module.exports = new ProfilRepo(Profil, "user");