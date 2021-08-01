const CarteService = require("./carte_service");
const ColonneService = require("./colonne_service");
const TableauService = require("./tableau_service");

const { carte, colonne, tableau, } = require("../repository");

module.exports = {
    carte_service : new CarteService(carte),
    colonne_service : new ColonneService(colonne, carte),
    tableau_service : new TableauService(tableau, colonne),
}
