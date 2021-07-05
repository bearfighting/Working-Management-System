
class TableauService {
    #tableau_repo;
    #contact_repo;

    constructor(tableau_repo, contact_repo) {
        this.#tableau_repo = tableau_repo;
        this.#contact_repo = contact_repo;
    }

    async select_instance(id_tableau) {
        const tableau = await this.#tableau_repo.get_by_id(id_tableau);
        return tableau.format_instance();
    }

    async get_all_contacts(id_tableau){
        const resultats = await this.#contact_repo.get_by_tableau(id_tableau);
        return resultats.map((contact) => contact.format_liste());
    }
}

module.exports = TableauService;
