const Repository = require("../../../commun/repository");
class CarteRepo extends Repository {

    constructor(modele, nom_table) {
        super();
        this.modele = modele;
        this.nom_table = nom_table
    }

    #champs_reponse = {
        id: "crt_id",
        id_tableau: "gtt_id",
        id_colonne: "col_id",
        titre: "crt_titre",
        description: "crt_description",
        date_debut: "crt_date_debut",
        date_echeance: "crt_date_echeance",
    };

    async get_by_id(id) {
        const [carte] = await this.#get_from_db({ crt_id: id });
        return carte;
    }

    async get_all(user_id) {

        const resultats = await this.trx(this.nom_table + " as crt")
            .select(this.#champs_reponse)
            .innerJoin("gtt_gestion_tache as gtt", (query_builder) => {
                query_builder.on("crt.gtt_id", "=", "gtt.gtt_id")
            })
            .where("gtt.user_id", "=", user_id)
            .orderBy("crt.crt_id");

        return resultats.map((carte) => new this.modele(carte));
    }

    async get_by_colonne(id_colonne) {
        const resultats = await this.#get_from_db({ col_id: id_colonne });
        return resultats;
    }

    async #get_from_db(where) {
        const resultats = await this.trx(this.nom_table).select(this.#champs_reponse).where(where).orderBy("crt_id");
        return resultats.map((carte) => new this.modele(carte));
    }

    async creer(body) {

        const { id_colonne, id_tableau, titre, description, date_debut, date_echeance  } = body;

        const data = {
            col_id: id_colonne,
            gtt_id: id_tableau,
            crt_titre: titre,
            crt_description: description,
            crt_date_debut: date_debut,
            crt_date_echeance: date_echeance,
        }

        const [resultat] = await this.trx(this.nom_table).insert(data).returning("*");

        return resultat.crt_id;
    }

    async modifier(body, id_carte) {

        const { id_colonne, titre, description, date_debut, date_echeance  } = body;

        const data = {
            col_id: id_colonne,
            crt_titre: titre,
            crt_description: description,
            crt_date_debut: date_debut,
            crt_date_echeance: date_echeance,
        }

        const [resultat] = await this.trx(this.nom_table).update(data).where({ crt_id: id_carte }).returning("*");
        return resultat.crt_id;
    }

    async supprimer(id) {
        await this.trx(this.nom_table).delete().where({ crt_id: id });
        return [];
    }

}

module.exports = CarteRepo;
