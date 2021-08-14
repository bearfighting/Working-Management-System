const { tableau_service } = require("../../service");

module.exports = async (req, res) => {

    const resultat = await tableau_service.select_instance(req?.params?.id_tableau);
    res.send({ res: resultat });
}
