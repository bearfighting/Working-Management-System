const { carte_repo } = require("../repo");

module.exports = async function tache(req, res) {
    const { carte } = req?.body;
    await carte_repo.addCarte({ carte });
    res.sendStatus(200);
}
