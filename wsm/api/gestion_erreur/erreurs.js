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
    }

    res.send(message);
}