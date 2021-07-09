const Repository = require("../../../commun/repository");
class GestionContactRepo extends Repository {

    constructor(modele, nom_table) {
        super();
        this.modele = modele;
        this.nom_table = nom_table;
    }

    #champs_reponse = {
        id: "gtc_id",
        user_id: "user_id",
        titre: "gtc_titre",
        bg_couleur: "gtc_bg_couleur",
    };

    async get_by_id(id) {
        const [resultat] = await this.#get_from_db({gtc_id: id});
        return resultat;
    }


    async get_all(user_id) {
        const resultats =  await this.#get_from_db({user_id: user_id});
        return resultats.map((item) => new this.modele(item));
    }

    async creer(body){

        const { user_id, titre, bg_couleur } = body;

        const data = {
            user_id: user_id,
            gtc_titre: titre,
            gtc_bg_couleur: bg_couleur,
        }

        const [resultat] = await this.trx(this.nom_table).insert(data).returning("*");
        return resultat.gtc_id;
    }

    async #get_from_db(where) {
        const resultats = await this.trx(this.nom_table).select(this.#champs_reponse).where(where).orderBy("gtc_id");
        return resultats.map((item) => new this.modele(item));
    }

}

module.exports = GestionContactRepo;
