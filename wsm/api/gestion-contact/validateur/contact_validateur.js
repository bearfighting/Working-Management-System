const _ = require("lodash");

class ContactValidateur {
    #contact_repo;

    constructor(contact_repo){
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

    async valider_requete_multiple(req) {

        const { body } = req;

        let erreur = "";

        erreur = await this.#valider_post_multiple(body);

        return [_.isEmpty(erreur), erreur];
    }

    async #valider_delete(contact_id){

        if(await !this.#est_un_nombre(contact_id)){
            return "errCheminInvalid"
        }

        const contact = await this.#contact_repo.get_by_id(contact_id);

        if(!contact){
            return "errRequeteInvalide"
        }

        return "";
    }

    async #valider_patch(contact_id, body){

        if(await !this.#est_un_nombre(contact_id)){
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

    async #valider_post_multiple(body) {

        const { contacts } = body;

        for(const contact of contacts) {
            const est_valide = await this.#est_champ_obligatoire_present(contact);
            if(!est_valide) {
                return "errRequeteInvalide";
            }
        }

        return "";
    }

    async trouver_contacts_non_valide(body) {

        let liste = [];
        const { contacts } = body;

        for(const contact of contacts) {
            const contacts = await this.#contact_repo.trouver_si_unique(-1, contact);

            if(contacts.length > 0) {
                liste.push(contact);
            }
        }

        return liste;
    }

    async #valider_get_by_id(contact_id){

        if(await !this.#est_un_nombre(contact_id)){
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

    async #est_un_nombre(contact_id){
        return /^\d+$/.test(contact_id);
    }
}

module.exports = ContactValidateur;
