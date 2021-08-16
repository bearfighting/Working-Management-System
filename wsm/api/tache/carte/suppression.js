const { carte_repo } = require("../repo");

module.exports = async function tache(req, res) {
    const { crt_titre } = req?.body;
    await carte_repo.deleteCarteByCrtTitre({ crt_titre });
    res.sendStatus(200);
}
