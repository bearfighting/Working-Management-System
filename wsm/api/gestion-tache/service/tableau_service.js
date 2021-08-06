class TableauService {
    #tableau_repo;
    #colonne_repo;
    #carte_repo;

    constructor(tableau_repo, colonne_repo, carte_repo) {
        this.#tableau_repo = tableau_repo;
        this.#colonne_repo = colonne_repo;
        this.#carte_repo = carte_repo;
    }

    async select_instance(id_tableau) {
        const tableau = await this.#tableau_repo.get_by_id(id_tableau);
        return tableau.format_instance();
    }

    async get_all_colonnes(id_tableau) {
        const resultats = await this.#colonne_repo.get_by_tableau(id_tableau);
        return resultats.map((colonne) => colonne.format_liste());
    }

    async get_tableau(id_tableau) {
        const resultats = await this.#colonne_repo.get_by_tableau(id_tableau);
        for(const colonne of resultats) {
            const cartes = await this.#carte_repo.get_by_colonne(colonne.id);
            colonne.cartes = cartes.map((carte) => carte.format_liste());
        }
        return resultats;
    }
}

module.exports = TableauService;
