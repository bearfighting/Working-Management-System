import gestion_erreur from "../../../gestion_erreur/erreurs";

const { gestion_contact_service } = require("../../service");

async function method_get({req, res}){

    const resultat = await gestion_contact_service.select_instance(req.params.id);

    if(!resultat){
        gestion_erreur(res, "errClefNonTrouvee");
        return; 
    }

    res.send(resultat);
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