import gestion_erreur from "../../../gestion_erreur/erreurs";

const { colonne_service } = require("../../service");
const { colonne_validateur } = require("../../validateur");

async function method_get({req, res}){

    const [est_valide, erreur] = await colonne_validateur.valider_requete(req);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }

    const colonne = await colonne_service.select_instance(req.params.id_colonne);

    if(!colonne){
        gestion_erreur(res, "errClefNonTrouvee");
        return;
    }

    res.send(colonne);
}

async function method_delete({req, res}){

    const [est_valide, erreur] = await colonne_validateur.valider_requete(req);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }

    const colonne = await colonne_service.suppression(req.params.id_colonne);
    res.send(colonne);
}

async function method_patch({req, res}){

    const [est_valide, erreur] = await colonne_validateur.valider_requete(req);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }

    const colonne = await colonne_service.modification(req.body, req.params.id_colonne);
    res.send(colonne);
}


module.exports = async function(req, res) {

    const {method} = req;

    switch(method){
        case "GET": await method_get({req, res});break;
        case "DELETE": await method_delete({req, res});break;
        case "PATCH": await method_patch({req, res});break;
        default:
            res.status(404);
            res.send();
    }
}
