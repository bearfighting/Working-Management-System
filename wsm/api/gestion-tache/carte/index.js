import gestion_erreur from "../../gestion_erreur/erreurs";

const { carte_service } = require("../service");
const { carte_validateur } = require("../validateur");

async function method_get({req, res}){

    const [est_valide, erreur] = await carte_validateur.valider_requete(req);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }

    const { user } = req;

    const cartes = await carte_service.select_all(user.id);
    res.send(cartes);
}

async function method_post({req, res}){

    const [est_valide, erreur] = await carte_validateur.valider_requete(req);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }

    const carte = await carte_service.creation(req.body);
    res.send(carte);
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
