import gestion_erreur from "../../../gestion_erreur/erreurs";

const { contact_service } = require("../../service");
const { contact_validateur } = require("../../validateur");

function method_get({req, res}){

    const [est_valide, erreur] = contact_validateur.valider_requete(req);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }

    const contact = contact_service.select_instance(req.params.id_contact);
    res.send(contact);
}

module.exports = function(req, res) {

    const {method} = req;

    switch(method){
        case "GET": method_get({req, res});break;
        default: 
            res.status(404);
            res.send();
    }
}