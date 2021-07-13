import gestion_erreur from "../../../gestion_erreur/erreurs";

const _ = require("lodash");
const { contact_service } = require("../../service");

async function est_champ_obligatoire_present(body){

    const { data } = body;
    const { contacts, idsTableau } = data;

    if (idsTableau.length == 0) {
        return false;
    }

    contacts.forEach(contact => {
        const { nom, prenom, courriel, telephone } = contact;
        if(_.isEmpty(nom) || _.isEmpty(prenom) ||_.isEmpty(courriel) || _.isEmpty(telephone)){
            return false;
        }
    });

    return true;
}

async function valider_post(body){

    if(await !est_champ_obligatoire_present(body)){
        return "errRequeteInvalide";
    }

    return "";
}

async function valider_requete(req) {
    const { body } = req;

    const erreur = await valider_post(body);

    return [_.isEmpty(erreur), erreur];
}

async function method_post({req, res}){

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
