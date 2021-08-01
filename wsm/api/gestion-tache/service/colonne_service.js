class ColonneService {
    #colonne_repo;
    #carte_repo

    constructor(colonne_repo, carte_repo) {
        this.#colonne_repo = colonne_repo;
        this.#carte_repo = carte_repo
    }

    async select_all(user_id) {
        const colonnes = await this.#colonne_repo.get_all(user_id);
        return colonnes.map((colonne) => colonne.format_instance());
    }

    async get_all_cartes(id_colonne) {
        const resultats = await this.#carte_repo.get_by_colonne(id_colonne);
        return resultats.map((carte) => carte.format_liste());
    }

    async select_instance(colonne_id) {
        const colonne = await this.#colonne_repo.get_by_id(colonne_id);
        return colonne.format_instance();
    }

    async creation(body) {
        const colonne_id = await this.#colonne_repo.creer(body);
        return this.select_instance(colonne_id);
    }

    async modification(body, id) {
        const colonne_id = await this.#colonne_repo.modifier(body, id);
        return this.select_instance(colonne_id);
    }

    async suppression(id) {
        return await this.#colonne_repo.supprimer(id);
    }
}

module.exports = ColonneService;
