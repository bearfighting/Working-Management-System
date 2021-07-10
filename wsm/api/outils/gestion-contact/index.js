import gestion_erreur from "../../gestion_erreur/erreurs";

const { gestion_contact_service } = require("../service");

async function method_post({req, res}){
    const outil = await gestion_contact_service.creation(req.body);
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