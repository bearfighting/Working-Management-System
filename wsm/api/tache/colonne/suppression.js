const { colonne_repo } = require("../repo");

module.exports = async function tache(req, res) {
    await colonne_repo.deleteColonneByColTitre({ col_titre: req?.body?.col_titre });
    res.sendStatus(200);
}
