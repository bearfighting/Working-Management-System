import gestion_erreur from "../../gestion_erreur/erreurs";

const { outils_service } = require("../service");

async function method_get({req, res}){
    const user_id = req.params.user_id;

    const contact = await outils_service.select_all(user_id);

    res.send(contact);
}

module.exports = async function(req, res) {

    const {method} = req;

    switch(method){
        case "GET": await method_get({req, res});break;
        default:
            res.status(404);
            res.send();
    }
}
