const { colonne_repo } = require("../repo");

module.exports = async function tache(req, res) {
    await colonne_repo.addColonne({ colonne: req?.body });
    res.sendStatus(200);
}
