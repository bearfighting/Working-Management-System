import gestion_erreur from "../../../gestion_erreur/erreurs";

const { carte_service } = require("../../service");
const { carte_validateur } = require("../../validateur");

async function method_get({req, res}){

    const [est_valide, erreur] = await carte_validateur.valider_requete(req);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }

    const carte = await carte_service.select_instance(req.params.id_carte);

    if(!carte){
        gestion_erreur(res, "errClefNonTrouvee");
        return;
    }

    res.send(carte);
}

async function method_delete({req, res}){

    const [est_valide, erreur] = await carte_validateur.valider_requete(req);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }

    const carte = await carte_service.suppression(req.params.id_carte);
    res.send(carte);
}

async function method_patch({req, res}){

    const [est_valide, erreur] = await carte_validateur.valider_requete(req);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }

    const carte = await carte_service.modification(req.body, req.params.id_carte);
    res.send(carte);
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
