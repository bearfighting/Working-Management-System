const _ = require("lodash");

class ContactValidateur {

    async valider_requete(req) {
        const {body, method, params} = req;

        let erreur = "";

        if (method === "GET" && params.id_contact) {
            erreur = await this.#valider_get_by_id(params.id_contact);
        }else if (method === "POST") {
            erreur = await this.#valider_post(body);
        }else if(method === "PATCH"){
            erreur = "bla";
        }
        else if(method === "DELETE"){
            erreur = "bla";
        }

        return [_.isEmpty(erreur), erreur];
    }

    async #valider_post(body){

        const { nom, prenom, courriel, adresse, telephone  } = body;

        if(_.isEmpty(nom) || _.isEmpty(prenom)){
            return "errRequeteInvalide";
        }

        return "";
    }

    async #valider_get_by_id(contact_id){
        return "";
        //return "errClefNonTrouvee";
    }
}

module.exports = ContactValidateur;
