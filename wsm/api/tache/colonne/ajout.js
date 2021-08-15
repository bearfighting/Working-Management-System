const { colonne_repo } = require("../repo");

module.exports = async function tache(req, res) {
    console.log("colonne", req?.body);
    await colonne_repo.addColonne({ colonne: req?.body });
    res.sendStatus(200);
}
