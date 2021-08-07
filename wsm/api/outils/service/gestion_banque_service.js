
class GestionBanqueService {
    #gestion_banque_repo;

    constructor(gestion_banque_repo) {
        this.#gestion_banque_repo = gestion_banque_repo;
    }

    async select_all(user_id){
        const outils = await this.#gestion_banque_repo.get_all(user_id);
        return outils.map((outil) => outil.format_instance()); 
    }

    async select_instance(item_id) {
        const resultat = await this.#gestion_banque_repo.get_by_id(item_id);
        return resultat.format_instance();
    }

    async creation(body){
        const item_id = await this.#gestion_banque_repo.creer(body);
        return this.select_instance(item_id);
    }
}

module.exports = GestionBanqueService;
