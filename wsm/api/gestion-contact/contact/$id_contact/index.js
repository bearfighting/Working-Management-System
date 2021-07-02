import gestion_erreur from "../../../gestion_erreur/erreurs";


const { contact_service } = require("../../service");
const { contact_validateur } = require("../../validateur");

async function method_get({req, res}){

    const [est_valide, erreur] = await contact_validateur.valider_requete(req);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }

    const contact = await contact_service.select_instance(req.params.id_contact);
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