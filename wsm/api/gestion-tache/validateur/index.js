const CarteValidateur = require("./carte_validateur");
const ColonneValidateur = require("./colonne_validateur");
const TableauValidateur = require("./tableau_validateur");

const { carte, colonne, tableau } = require("../repository");

module.exports = {
    carte_validateur: new CarteValidateur(carte),
    colonne_validateur: new ColonneValidateur(colonne),
    tableau_validateur: new TableauValidateur(tableau)
}
