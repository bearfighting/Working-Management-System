const _ = require("lodash");
const Validateur = require("../../commun/validateur");

class ContactValidateur extends Validateur {
    #contact_repo;

    constructor(contact_repo){
        super();
        this.#contact_repo = contact_repo;
    }

    async valider_requete(req) {
        const {body, method, params} = req;

        let erreur = "";

        if (method === "GET" && params.id_contact) {
            erreur = await this.#valider_get_by_id(params.id_contact);
        }else if (method === "POST") {
            erreur = await this.#valider_post(body);
        }else if(method === "PATCH"){
            erreur = await this.#valider_patch(params.id_contact, body);
        }
        else if(method === "DELETE"){
            erreur = await this.#valider_delete(params.id_contact);
        }

        return [_.isEmpty(erreur), erreur];
    }

    async #valider_delete(contact_id){

        if(!this.est_un_nombre(contact_id)){
            return "errCheminInvalid"
        }

        const contact = await this.#contact_repo.get_by_id(contact_id);

        if(!contact){
            return "errRequeteInvalide"
        }

        return "";
    }

    async #valider_patch(contact_id, body){

        if(!this.est_un_nombre(contact_id)){
            return "errCheminInvalid"
        }

        if(await !this.#est_champ_obligatoire_present(body)){
            return "errRequeteInvalide";
        }

        const contacts = await this.#contact_repo.trouver_si_unique(contact_id, body);

        if(contacts.length > 0){
            return "errValeurUtilisee";
        }

        return "";
    }

    async #valider_post(body){

        if(await !this.#est_champ_obligatoire_present(body)){
            return "errRequeteInvalide";
        }

        const contacts = await this.#contact_repo.trouver_si_unique(-1, body);

        if(contacts.length > 0){
            return "errValeurUtilisee";
        }

        return "";
    }

    async #valider_get_by_id(contact_id){

        if(!this.est_un_nombre(contact_id)){
            return "errCheminInvalid"
        }

        const contact = await this.#contact_repo.get_by_id(contact_id);

        if(!contact){
            return "errClefNonTrouvee"
        }

        return "";
    }

    async #est_champ_obligatoire_present(body){

        const {nom, prenom, id_tableau} = body;

        if(_.isEmpty(nom) || _.isEmpty(prenom) || _.isEmpty(id_tableau)){
            return false;
        }

        return true;
    }
}

module.exports = ContactValidateur;
