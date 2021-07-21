module.exports = async function gestion_erreur(res, erreur){

    let message = "";

    switch(erreur){
        case "errClefNonTrouvee": 
            res.status(404);
            message = "Cette valeur n'existe pas";
        break;
        case "errValeurUtilisee": 
            res.status(409); 
            message = "Cette élément existe déjà";
        break;
        case "errRequeteInvalide": 
            res.status(400); 
            message = "Impossible de traiter la requête";
        break;
        case "errCheminInvalid": 
            res.status(404); 
            message = "Ce chemin n'existe pas";
        break;
        case "errActionNonAutorisee": 
            res.status(401); 
            message = "Vous devez être authentifier pour effectuer cette opération";
        break;
        default: 
            res.status(404); 
            message = "Problème serveur, veuillez communiquer avec l'équipe.";
    }

    res.send(message);
}