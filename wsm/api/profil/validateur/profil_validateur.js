const _ = require("lodash");
const Validateur = require("../../commun/validateur");

class ProfilValidateur extends Validateur {
    #profil_repo;

    constructor(profil_repo){
        super();
        this.#profil_repo = profil_repo;
    }

    async valider_requete(req) {
        const {body, method, user} = req;

        let erreur = "";

        if (method === "GET") {
            erreur = await this.#valider_get_by_id(user);
        }else if(method === "PATCH"){
            erreur = await this.#valider_patch(body, user);
        }
        else if(method === "DELETE"){
            erreur = await this.#valider_delete(user);
        }

        return [_.isEmpty(erreur), erreur];
    }

    async #valider_delete(user){

        if(_.isNil(user.id)){
            return "errActionNonAutorisee";
        }

        return "";
    }

    async #valider_patch(body, user){

        if(_.isNil(user.id)){
            return "errActionNonAutorisee";
        }

        const { nom, prenom, courriel} = body;

        if(_.isNil(nom) || _.isNil(prenom) || _.isNil(courriel)){
            return "errRequeteInvalide";
        }

        return "";
    }

    async #valider_get_by_id(user){

        if(_.isNil(user.id)){
            return "errActionNonAutorisee";
        }

        return "";
    }
}

module.exports = ProfilValidateur;
