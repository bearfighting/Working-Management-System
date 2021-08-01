import gestion_erreur from "../../../gestion_erreur/erreurs";

const { tableau_service } = require("../../service");
const { tableau_validateur } = require("../../validateur");

async function method_get({req, res}){

  const [est_valide, erreur] = await tableau_validateur.valider_requete(req);

  if(!est_valide){
      gestion_erreur(res, erreur);
      return;
  }

  const liste_carte = await tableau_service.get_all_cartes(req.params.id_tableau);

  res.send({ cartes : liste_carte });

}

module.exports = async function(req, res) {

    const {method} = req;

    switch(method){
        case "GET": await method_get({req, res});break;
        default:
            res.status(404);
            res.send();
    }

  };
