const { tache_repo } = require("./repo");

module.exports = async function tache(req, res) {
    const resultat = await tache_repo.findTacheById({ gtt_id: +req?.params?.tache });
    res.send(resultat);
}
