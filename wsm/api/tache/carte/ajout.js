const { carte_repo } = require("../repo");

module.exports = async function tache(req, res) {
    console.log("carte body", req?.body);
    const { carte } = req?.body;
    await carte_repo.addCarte({ carte });
    res.sendStatus(200);
}
