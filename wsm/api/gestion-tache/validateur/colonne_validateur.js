const _ = require("lodash");
const Validateur = require("../../commun/validateur");

class ColonneValidateur extends Validateur {
    #colonne_repo;

    constructor(colonne_repo){
        super();
        this.#colonne_repo = colonne_repo;
    }

    async valider_requete(req) {
        const { body, method, params, user } = req;

        let erreur = this.valider_user_authentifier(user);

        if(_.isEmpty(erreur)){
            if (method === "GET" && params.id_colonne) {
                erreur = await this.#valider_get_by_id(params.id_colonne);
            }else if (method === "POST") {
                erreur = await this.#valider_post(body);
            }else if(method === "PATCH"){
                erreur = await this.#valider_patch(params.id_colonne, body);
            }
            else if(method === "DELETE"){
                erreur = await this.#valider_delete(params.id_colonne);
            }
        }
        return [_.isEmpty(erreur), erreur];
    }

    async #valider_post(body){

        if(await !this.#est_champ_obligatoire_present(body)){
            return "errRequeteInvalide";
        }

        return "";
    }

    async #valider_patch(colonne_id, body){

        if(!this.est_un_nombre(colonne_id)){
            return "errCheminInvalid"
        }

        if(await !this.#est_champ_obligatoire_present(body)){
            return "errRequeteInvalide";
        }

        return "";
    }

    async #valider_delete(colonne_id){

        if(!this.est_un_nombre(colonne_id)){
            return "errCheminInvalid"
        }

        const colonne = await this.#colonne_repo.get_by_id(colonne_id);

        if(!colonne){
            return "errRequeteInvalide"
        }

        return "";
    }

    async #valider_get_by_id(colonne_id){

        if(!this.est_un_nombre(colonne_id)){
            return "errCheminInvalid"
        }

        const colonne = await this.#colonne_repo.get_by_id(colonne_id);

        if(!colonne){
            return "errClefNonTrouvee"
        }

        return "";
    }

    async #est_champ_obligatoire_present(body){

        const { titre, ordre, id_tableau } = body;

        if(_.isEmpty(titre) || _.isEmpty(ordre) ||_.isEmpty(id_tableau)){
            return false;
        }

        return true;
    }
}

module.exports = ColonneValidateur;
