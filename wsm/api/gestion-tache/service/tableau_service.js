class TableauService {
    #tableau_repo;
    #colonne_repo;

    constructor(tableau_repo, colonne_repo) {
        this.#tableau_repo = tableau_repo;
        this.#colonne_repo = colonne_repo;
    }

    async select_instance(id_tableau) {
        const tableau = await this.#tableau_repo.get_by_id(id_tableau);
        return tableau.format_instance();
    }

    async get_all_colonnes(id_tableau) {
        const resultats = await this.#colonne_repo.get_by_tableau(id_tableau);
        return resultats.map((colonne) => colonne.format_liste());
    }
}

module.exports = TableauService;
