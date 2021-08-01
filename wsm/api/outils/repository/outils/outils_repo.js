const Repository = require("../../../commun/repository");
class OutilsRepo extends Repository {

    constructor(modele, {tache_repo, banque_repo, contact_repo}) {
        super();
        this.modele = modele;
        this.contact_repo = contact_repo;
        this.tache_repo = tache_repo;
        this.banque_repo = banque_repo;
    }

    async get_all(user_id) {
        let data = [];
        data.gestion_contact = await this.contact_repo.get_all(user_id);
        data.gestion_banque = [];//this.banque_repo.get_all(user_id);
        data.gestion_tache = await this.tache_repo.get_all(user_id);
        return new this.modele(data);
    }
}

module.exports = OutilsRepo;
