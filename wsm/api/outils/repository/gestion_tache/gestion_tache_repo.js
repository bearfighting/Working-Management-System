const Repository = require("../../../commun/repository");
class GestionTacheRepo extends Repository {

    constructor(modele, nom_table) {
        super();
        this.modele = modele;
        this.nom_table = nom_table;
    }

    #champs_reponse = {
        id: "gtc_id",
        user_id: "user_id",
        titre: "gtc_titre",
        bg_couleur: "gct_bg_couleur",
    };

    async get_all(user_id) {
        const resultats = await this.trx(this.nom_table).select(this.#champs_reponse).where({user_id: user_id});
        return resultats.map((item) => new this.modele(item));
    }

}

module.exports = GestionTacheRepo;
