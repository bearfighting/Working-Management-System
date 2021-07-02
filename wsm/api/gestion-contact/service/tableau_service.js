
class TableauService {
    #tableau_repo;
    #contact_repo;

    constructor(tableau_repo, contact_repo) {
        this.#tableau_repo = tableau_repo;
        this.#contact_repo = contact_repo;
    }

    async select_instance(tableau_id) {
        const tableau = await this.#tableau_repo.get_by_id(tableau_id);
        return tableau.format_instance();
    }

    async get_all_contacts(tableau_id){
        const resultats = await this.#contact_repo.get_condition({gtc_id: tableau_id});
        return resultats.map((contact) => contact.format_liste());
    }
}

module.exports = TableauService;
