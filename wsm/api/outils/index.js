import gestion_erreur from "../gestion_erreur/erreurs";

const { outils_validateur } = require("./validateur");
const { outils_service } = require("./service");

async function method_get({req, res}){

    // TODO : Plante pour une raison inconnu
    /*const [est_valide, erreur] = await outils_validateur.valider_requete(req);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }*/

    const contact = await outils_service.select_all(1);
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