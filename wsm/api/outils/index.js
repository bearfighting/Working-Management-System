import gestion_erreur from "../gestion_erreur/erreurs";
import outils from "./repository/outils";
import outils_validateur from "./validateur"

const { outils_service } = require("./service");

async function method_get({req, res}){

    const user_id = 1;

    const [est_valide, erreur] = outils_validateur.valider_requete(user_id);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }

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