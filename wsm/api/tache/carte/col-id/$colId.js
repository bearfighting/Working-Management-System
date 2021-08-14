const { carte_repo } = require("../../repo");

module.exports = async function tache(req, res) {
    console.log("carte req", req.params);
    const resultat = await carte_repo.findCarteByCol({ col_id: +req?.params?.colId });
    res.send({ resultat });
}
