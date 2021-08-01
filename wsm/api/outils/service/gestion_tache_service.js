class GestionTacheService {
    #gestion_tache_repo;

    constructor(gestion_tache_repo) {
        this.#gestion_tache_repo = gestion_tache_repo;
    }

    async select_all(user_id) {
        const outils = await this.#gestion_tache_repo.get_all(user_id);
        return outils.map((outil) => outil.format_instance());
    }

    async select_instance(item_id) {
        const resultat = await this.#gestion_tache_repo.get_by_id(item_id);
        return resultat.format_instance();
    }

    async creation(body) {
        const item_id = await this.#gestion_tache_repo.creer(body);
        return this.select_instance(item_id);
    }
}

module.exports = GestionTacheService;
