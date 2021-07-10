
class GestionContactService {
    #gestion_contact_repo;

    constructor(gestion_contact_repo) {
        this.#gestion_contact_repo = gestion_contact_repo;
    }

    async select_all(user_id){
        const outils = await this.#gestion_contact_repo.get_all(user_id);
        return outils.map((outil) => outil.format_instance()); 
    }

    async select_instance(item_id) {
        const resultat = await this.#gestion_contact_repo.get_by_id(item_id);
        return resultat.format_instance();
    }

    async creation(body){
        const item_id = await this.#gestion_contact_repo.creer(body);
        return this.select_instance(item_id);
    }
}

module.exports = GestionContactService;
