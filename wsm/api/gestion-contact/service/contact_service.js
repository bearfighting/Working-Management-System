
class ContactService {
    #contact_repo;

    constructor(contact_repo) {
        this.#contact_repo = contact_repo;
    }

    select_instance(contact_id) {
        const contact = this.#contact_repo.get_by_id(contact_id);
        return contact.format_instance();
    }

    select_all_from_tool(id_outil){
        const resultat = this.#contact_repo.get_condition(id_outil);
        return resultat.map((contact) => contact.format_liste());
    }
    
    creation(body){
        const contact_id = this.#contact_repo.creer(body);
        return this.select_instance(contact_id);
    }

}

module.exports = ContactService;
