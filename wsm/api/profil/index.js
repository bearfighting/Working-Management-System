import gestion_erreur from "../gestion_erreur/erreurs";

const { profil_service } = require("./service");
const { profil_validateur } = require("./validateur");


async function method_delete({req, res}){

    const [est_valide, erreur] = await profil_validateur.valider_requete(req);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }

    profil_service.suppression(req);

    res.send();
}

async function method_get({req, res}){

    const [est_valide, erreur] = await profil_validateur.valider_requete(req);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }

    const profil = await profil_service.select_instance(req);

    res.send(profil);
}

async function method_patch({req, res}){

    const [est_valide, erreur] = await profil_validateur.valider_requete(req);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }

    const profil = await profil_service.modification(req);

    res.send(profil);
}

module.exports = async function(req, res) {

    const {method} = req;

    switch(method){
        case "DELETE": await method_delete({req, res});break;
        case "GET": await method_get({req, res});break;
        case "PATCH": await method_patch({req, res});break;
        default:
            res.status(404);
            res.send();
    }
}
