const Repository = require("../../../commun/repository");
class GestionTacheRepo extends Repository {

    constructor(modele, nom_table) {
        super();
        this.modele = modele;
        this.nom_table = nom_table;
    }

    #champs_reponse = {
        id: "gtt_id",
        user_id: "user_id",
        titre: "gtt_titre",
        bg_couleur: "gtt_bg_couleur",
        icon_gauche: "gtt_icon_gauche",
        icon_millieu: "gtt_icon_millieu",
        icon_droite: "gtt_icon_droite",
    };

    async get_by_id(id) {
        const [resultat] = await this.#get_from_db({ gtt_id: id });
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
            gtt_titre: titre,
            gtt_bg_couleur: bg_couleur,
            gtt_icon_gauche: icon.icon_gauche,
            gtt_icon_millieu: icon.icon_millieu,
            gtt_icon_droite: icon.icon_droite,
        }

        const [resultat] = await this.trx(this.nom_table).insert(data).returning("*");
        return resultat.gtt_id;
    }

    async #get_from_db(where) {
        const resultats = await this.trx(this.nom_table).select(this.#champs_reponse).where(where).orderBy("gtt_id");
        return resultats.map((item) => new this.modele(item));
    }

}

module.exports = GestionTacheRepo;
