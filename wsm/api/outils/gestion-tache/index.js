import gestion_erreur from "../../gestion_erreur/erreurs";

const { gestion_tache_validateur } = require("../validateur");
const { gestion_tache_service } = require("../service");

async function method_post({req, res}) {

    const [est_valide, erreur] = await gestion_tache_validateur.valider_requete(req);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }

    const { user } = req;
    req.body.user_id = user.id;

    const outil = await gestion_tache_service.creation(req.body);
    res.send(outil);
}

module.exports = async function(req, res) {

    const {method} = req;

    switch(method){
        case "POST": await method_post({req, res});break;
        default:
            res.status(404);
            res.send();
    }
}
