
class OutilsService {
    #outils_repo;

    constructor(outils_repo) {
        this.#outils_repo = outils_repo;
    }

    async select_all(user_id){
        const outils = await this.#outils_repo.get_all(user_id);
        return outils.format_instance();
    }
}

module.exports = OutilsService;
