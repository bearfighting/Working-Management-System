
class TableauService {
    #tableau_repo;

    constructor(tableau_repo) {
        this.#tableau_repo = tableau_repo;
    }

    select_instance(contact_id) {
        const contact = this.#tableau_repo.get_by_id(contact_id);
        return contact.format_instance();
    }
}

module.exports = TableauService;
