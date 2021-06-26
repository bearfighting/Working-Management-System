
class ContactService {
    #contact_repo;

    constructor(contact_repo) {
        this.#contact_repo = contact_repo;
    }

    select_instance(contact_id) {
        return[]
    }

    select_all_from_tool(id_outil){
        const resultat = this.#contact_repo.get_condition(id_outil);
        return resultat.map((contact) => contact.format_liste());
    }
    

}

module.exports = ContactService;
