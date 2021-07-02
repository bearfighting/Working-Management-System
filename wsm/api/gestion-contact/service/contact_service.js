
class ContactService {
    #contact_repo;

    constructor(contact_repo) {
        this.#contact_repo = contact_repo;
    }

    async select_instance(contact_id) {
        const contact = await this.#contact_repo.get_by_id(contact_id);
        return contact.format_instance();
    }

    creation(body){
        const contact_id = this.#contact_repo.creer(body);
        return this.select_instance(contact_id);
    }

}

module.exports = ContactService;
