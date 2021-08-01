const _ = require("lodash");
const Validateur = require("../../commun/validateur");

class TableauValidateur extends Validateur {

    #tableau_repo;

    constructor(tableau_repo){
        super();
        this.#tableau_repo = tableau_repo
    }

    async valider_requete(req) {
        const { method, params, user } = req;

        let erreur = this.valider_user_authentifier(user);

        if(_.isEmpty(erreur)){
            if (method === "GET" && params.id_carte) {
                erreur = await this.#valider_get_by_id(params.id_tableau);
            }
        }

        return [_.isEmpty(erreur), erreur];
    }

    async #valider_get_by_id(id_tableau){

        if(!this.est_un_nombre(id_tableau)){
            return "errCheminInvalid"
        }

        const tableau = this.#tableau_repo.get_by_id(id_tableau);

        if(!tableau){
            return "errClefNonTrouvee"
        }

        return "";
    }
}

module.exports = TableauValidateur;
