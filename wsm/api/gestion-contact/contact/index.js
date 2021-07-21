import gestion_erreur from "../../gestion_erreur/erreurs";

const { contact_service } = require("../service");
const { contact_validateur } = require("../validateur");

async function method_post({req, res}){

    const { contacts } = req.body;

    if(contacts) {
        // Ajout de plusieurs contacts
        const [est_valide, erreur] = await contact_validateur.valider_requete_multiple(req);

        if(!est_valide){
            gestion_erreur(res, erreur);
            return;
        }

        const { body } = req;

        const contacts_non_valide = await contact_validateur.trouver_contacts_non_valide(body);

        const contacts_valide = await contact_service.epurer_contacts_non_valide(body, contacts_non_valide);

        const contact_ajoutes = await contact_service.creation_all(contacts_valide);
        res.send(contact_ajoutes);

    } else {
        // Ajout d'un seul contact
        const [est_valide, erreur] = await contact_validateur.valider_requete(req);

        if(!est_valide){
            gestion_erreur(res, erreur);
            return;
        }

        const contact = await contact_service.creation(req.body);
        res.send(contact);
    }
}

async function method_get({req, res}){
    const contact = await contact_service.select_all(1);
    res.send(contact);
}

module.exports = async function(req, res) {

    const {method} = req;

    switch(method){
        case "POST": await method_post({req, res});break;
        case "GET": await method_get({req, res});break;
        default:
            res.status(404);
            res.send();
    }
}
