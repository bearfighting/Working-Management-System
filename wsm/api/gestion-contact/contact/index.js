import gestion_erreur from "../../gestion_erreur/erreurs";

const { contact_service } = require("../service");
const { contact_validateur } = require("../validateur");


function method_post({req, res}){
    
    const [est_valide, erreur] = contact_validateur.valider_requete(req);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }

    const contact = contact_service.creation(req.body);
    res.send(contact);
}

const temp = [
    {
        id: "123",
        nom: "Jacques",
        prenom: "Bergi",
    },
    {
        id: "321",
        nom: "Xing",
        prenom: "Wenfeng",
    },
    {
        id: "213",
        nom: "Patel",
        prenom: "Mitesh",
    },
    {
        id: "312",
        nom: "Stebenne",
        prenom: "Sebastien",
    }
]

function method_get({req, res}){
    res.send(temp);
}

module.exports = function(req, res) {

    const {method} = req;

    switch(method){
        case "POST": method_post({req, res});break;
        case "GET": method_get({req, res});break;
        default: 
            res.status(404);
            res.send();
    }
}