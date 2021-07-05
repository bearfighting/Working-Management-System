const _ = require("lodash");

class TableauValidateur {

    #tableau_repo;

    constructor(tableau_repo){
        this.#tableau_repo = tableau_repo
    }

    async valider_requete(req) {
        const {body, method, params} = req;

        let erreur = "";

        if (method === "GET" && params.id_contact) {
            erreur = await this.#valider_get_by_id(params.id_tableau);
        }

        return [_.isEmpty(erreur), erreur];
    }

    async #valider_get_by_id(id_tableau){

        if(await !this.#est_un_nombre(id_tableau)){
            return "errCheminInvalid"
        }

        const tableau = this.#tableau_repo.get_by_id(id_tableau);

        if(!tableau){
            return "errClefNonTrouvee"
        }

        return "";
    }

    async #est_un_nombre(contact_id){
        return /^\d+$/.test(contact_id);
    }

}

module.exports = TableauValidateur;
