const _ = require("lodash");
const Validateur = require("../../commun/validateur");

class CarteValidateur extends Validateur {
    #carte_repo;

    constructor(carte_repo){
        super();
        this.#carte_repo = carte_repo;
    }

    async valider_requete(req) {
        const { body, method, params, user } = req;

        let erreur = this.valider_user_authentifier(user);

        if(_.isEmpty(erreur)){
            if (method === "GET" && params.id_carte) {
                erreur = await this.#valider_get_by_id(params.id_carte);
            }else if (method === "POST") {
                erreur = await this.#valider_post(body);
            }else if(method === "PATCH"){
                erreur = await this.#valider_patch(params.id_carte, body);
            }
            else if(method === "DELETE"){
                erreur = await this.#valider_delete(params.id_carte);
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

    async #valider_patch(carte_id, body){

        if(!this.est_un_nombre(carte_id)){
            return "errCheminInvalid"
        }

        if(await !this.#est_champ_obligatoire_present(body)){
            return "errRequeteInvalide";
        }

        return "";
    }

    async #valider_delete(carte_id){

        if(!this.est_un_nombre(carte_id)){
            return "errCheminInvalid"
        }

        const carte = await this.#carte_repo.get_by_id(carte_id);

        if(!carte){
            return "errRequeteInvalide"
        }

        return "";
    }

    async #valider_get_by_id(carte_id){

        if(!this.est_un_nombre(carte_id)){
            return "errCheminInvalid"
        }

        const carte = await this.#carte_repo.get_by_id(carte_id);

        if(!carte){
            return "errClefNonTrouvee"
        }

        return "";
    }

    async #est_champ_obligatoire_present(body){

        const { titre, id_colonne, id_tableau } = body;

        if(_.isEmpty(titre) || _.isEmpty(id_colonne) ||_.isEmpty(id_tableau)){
            return false;
        }

        return true;
    }
}

module.exports = CarteValidateur;
