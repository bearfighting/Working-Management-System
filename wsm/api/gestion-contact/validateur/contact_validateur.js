const _ = require("lodash");

class ContactValidateur {

    valider_requete(req) {
        const {body, method} = req;

        let erreur = "";

        if (method === "GET") {
            erreur = this.#valider_get(body);
        }

        if (method === "POST") {
            erreur = this.#valider_post(body);
        }

        return [_.isEmpty(erreur), erreur];
    }

    #valider_post(body){

        const { nom, prenom, courriel, adresse, telephone  } = body;

        if(_.isEmpty(nom) || _.isEmpty(prenom)){
            return "errRequeteInvalide";
        }

        return "";
    }

    #valider_get(){
        return "";
        //return "errClefNonTrouvee";
    }

}

module.exports = ContactValidateur;
