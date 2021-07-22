const _ = require("lodash");
const Validateur = require("../../commun/validateur");

class OutilsValidateur extends Validateur {

    #outils_repo;

    constructor(outils_repo){
        super();
        this.#outils_repo = outils_repo
    }

    async valider_requete(req) {
        //const {body, method, params} = req;

        // TODO : Brancher le user
        const user_id = 1;

        let erreur = "";

        if (method === "GET" && user_id) {
            erreur = await this.#valider_get_all(user_id);
        }

        return [_.isEmpty(erreur), erreur];
    }

    async #valider_get_all(user_id){

        if(!this.est_un_nombre(user_id)){
            return "errCheminInvalid";
        }

        // TODO : Utiliser le repo du user pour valider son existance

        return "";
    }
}

module.exports = OutilsValidateur;
