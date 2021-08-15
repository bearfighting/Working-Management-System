const { colonne_repo } = require("../repo");

module.exports = async function tache(req, res) {
    console.log("colonne", req?.body);
    await colonne_repo.deleteColonneByColTitre({ col_titre: req?.body?.col_titre });
    res.sendStatus(200);
}
