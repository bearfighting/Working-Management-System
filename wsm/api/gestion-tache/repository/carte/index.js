const CarteRepo = require("./carte_repo");
const Carte = require("./carte");

module.exports = new CarteRepo(Carte, "crt_carte");
