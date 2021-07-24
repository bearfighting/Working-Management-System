const _ = require("lodash");
const Validateur = require("../../commun/validateur");

class GestionContactValidateur extends Validateur {

    #gestion_contact_repo;

    constructor(gestion_contact_repo){
        super();
        this.#gestion_contact_repo = gestion_contact_repo
    }

    async valider_requete(req) {
        const {body, method, params} = req;

        let erreur = "";

        if (method === "POST") {
            erreur = await this.#valider_post(body);
        }

        return [_.isEmpty(erreur), erreur];
    }

    async #valider_post(body){

        // TODO : Faire validation pour le post

        return "";
    }

}

module.exports = GestionContactValidateur;
