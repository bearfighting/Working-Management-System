import gestion_erreur from "../../../gestion_erreur/erreurs";

const { tableau_service } = require("../../service");
const { contact_service } = require("../../service");
const { tableau_validateur } = require("../../validateur");

function method_get({req, res}){

  const [est_valide, erreur] = tableau_validateur.valider_requete(req);

  if(!est_valide){
      gestion_erreur(res, erreur);
      return;
  }

  const liste_contact = contact_service.select_all_from_tool(req.params.id_tableau);

  res.send({ contacts : liste_contact });

}

module.exports = function(req, res) {
    
    const {method} = req;

    switch(method){
        case "GET": method_get({req, res});break;
        default: 
            res.status(404);
            res.send();
    }

  };