import gestion_erreur from "../../../gestion_erreur/erreurs";

const _ = require("lodash");
const { contact_service } = require("../../service");
const { contact_validateur } = require("../../validateur");

async function valider_requete(req) {

    const { body } = req;

    const erreur = await contact_validateur.valider_post_multiple(body);

    return [_.isEmpty(erreur), erreur];
}

async function method_post({req, res}) {

    const [est_valide, erreur] = await valider_requete(req);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }

    const { body } = req;

    const liste_erreur = await contact_service.creation_all(body);

    res.send(liste_erreur);
}

module.exports = async function(req, res) {

    const { method } = req;

    switch(method){
        case "POST": await method_post({ req, res });break;
        default:
            res.status(404);
            res.send();
    }
}
