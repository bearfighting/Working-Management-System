const _ = require("lodash");

class TableauValidateur {

    async valider_requete(req) {
        const {body, method, params} = req;

        let erreur = "";

        if (method === "GET" && params.id_contact) {
            erreur = await this.#valider_get_by_id(params.id_tableau);
        }

        return [_.isEmpty(erreur), erreur];
    }

    async #valider_get_by_id(id_tableau){
        return "";
        //return "errClefNonTrouvee";
    }
}

module.exports = TableauValidateur;
