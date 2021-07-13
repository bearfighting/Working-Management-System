
class ContactService {
    #contact_repo;

    constructor(contact_repo) {
        this.#contact_repo = contact_repo;
    }

    async select_all(user_id){
        const contacts = await this.#contact_repo.get_all(user_id);
        return contacts.map((contact) => contact.format_instance());
    }

    async select_instance(contact_id) {
        const contact = await this.#contact_repo.get_by_id(contact_id);
        return contact.format_instance();
    }

    async creation(body){
        const contact_id = await this.#contact_repo.creer(body);
        return this.select_instance(contact_id);
    }

    async creation_all(body) {
        const contacts = await this.#contact_repo.creer_plusieurs(body);
        return contacts;
    }

    async modification(body, id){
        const contact_id = await this.#contact_repo.modifier(body, id);
        return this.select_instance(contact_id);
    }

    async suppression(id){
        return await this.#contact_repo.supprimer(id);
    }

}

module.exports = ContactService;
