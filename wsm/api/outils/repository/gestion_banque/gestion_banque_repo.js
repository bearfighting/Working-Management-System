const Repository = require("../../../commun/repository");
class GestionBanqueRepo extends Repository {

    constructor(modele, nom_table) {
        super();
        this.modele = modele;
        this.nom_table = nom_table;
    }

    #champs_reponse = {
        id: "gtb_id",
        user_id: "user_id",
        titre: "gtb_titre",
        bg_couleur: "gtb_bg_couleur",
    };

    async get_by_id(id) {
        const [resultat] = await this.#get_from_db({ gtb_id: id });
        return resultat;
    }


    async get_all(user_id) {
        const resultats =  await this.#get_from_db({ user_id: user_id });
        return resultats.map((item) => new this.modele(item));
    }

    async creer(body){

        const { user_id, titre, bg_couleur, icon } = body;

        const data = {
            user_id: user_id,
            gtb_titre: titre,
            gtb_bg_couleur: bg_couleur,
        }

        const [resultat] = await this.trx(this.nom_table).insert(data).returning("*");
        return resultat.gtb_id;
    }

    async #get_from_db(where) {
        const resultats = await this.trx(this.nom_table).select(this.#champs_reponse).where(where).orderBy("gtb_id");
        return resultats.map((item) => new this.modele(item));
    }

}

module.exports = GestionBanqueRepo;
