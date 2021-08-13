const { colonne_repo } = require("../repo");

module.exports = async function tache(req, res) {
    const resultat = await colonne_repo.findColonnesByTache({ gtt_id: +req?.params?.colonne });
    res.send({ resultat });
}
