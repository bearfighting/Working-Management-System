import gestion_erreur from "../../gestion_erreur/erreurs";

const { colonne_service } = require("../service");
const { colonne_validateur } = require("../validateur");

async function method_get({req, res}){

    const [est_valide, erreur] = await colonne_validateur.valider_requete(req);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }

    const { user } = req;

    const colonnes = await colonne_service.select_all(user.id);
    res.send(colonnes);
}

async function method_post({req, res}){

    const [est_valide, erreur] = await colonne_validateur.valider_requete(req);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }

    const colonne = await colonne_service.creation(req.body);
    res.send(colonne);
}

module.exports = async function(req, res) {

    const {method} = req;

    switch(method){
        case "GET": await method_get({req, res});break;
        case "POST": await method_post({req, res});break;
        default:
            res.status(404);
            res.send();
    }
}
