class CarteService {
    #carte_repo;

    constructor(carte_repo) {
        this.#carte_repo = carte_repo;
    }

    async select_all(user_id) {
        const cartes = await this.#carte_repo.get_all(user_id);
        return cartes.map((carte) => carte.format_instance());
    }

    async select_instance(carte_id) {
        const carte = await this.#carte_repo.get_by_id(carte_id);
        return carte.format_instance();
    }

    async creation(body) {
        const carte_id = await this.#carte_repo.creer(body);
        return this.select_instance(carte_id);
    }

    async modification(body, id) {
        const carte_id = await this.#carte_repo.modifier(body, id);
        return this.select_instance(carte_id);
    }

    async suppression(id) {
        return await this.#carte_repo.supprimer(id);
    }
}

module.exports = CarteService;
