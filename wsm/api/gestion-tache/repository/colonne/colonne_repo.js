const Repository = require("../../../commun/repository");
class ColonneRepo extends Repository {

    constructor(modele, nom_table) {
        super();
        this.modele = modele;
        this.nom_table = nom_table
    }

    #champs_reponse = {
        id: "col_id",
        id_tableau: "gtt_id",
        titre: "col_titre",
        ordre: "col_ordre",
    };

    async get_by_id(id) {
        const [colonne] = await this.#get_from_db({ col_id: id });
        return colonne;
    }

    async get_all(user_id) {

        const resultats = await this.trx(this.nom_table + " as col")
            .select(this.#champs_reponse)
            .innerJoin("gtt_gestion_tache as gtt", (query_builder) => {
                query_builder.on("col.gtt_id", "=", "gtt.gtt_id")
            })
            .where("gtt.user_id", "=", user_id)
            .orderBy("col.col_ordre");

        return resultats.map((colonne) => new this.modele(colonne));
    }

    async get_by_tableau(id_tableau) {
        const resultats = await this.#get_from_db({ gtt_id: id_tableau });
        return resultats;
    }

    async #get_from_db(where) {
        const resultats = await this.trx(this.nom_table).select(this.#champs_reponse).where(where).orderBy("col_ordre");
        return resultats.map((colonne) => new this.modele(colonne));
    }

    async creer(body) {

        const { id_tableau, titre, ordre } = body;

        const data = {
            gtt_id: id_tableau,
            col_titre: titre,
            col_ordre: ordre,
        }

        const [resultat] = await this.trx(this.nom_table).insert(data).returning("*");
        return resultat.col_id;
    }

    async modifier(body, id_colonne) {

        const { titre, ordre } = body;

        const data = {
            col_titre: titre,
            col_ordre: ordre,
        }

        const [resultat] = await this.trx(this.nom_table).update(data).where({ col_id: id_colonne }).returning("*");
        return resultat.col_id;
    }

    async supprimer(id) {
        await this.trx(this.nom_table).delete().where({ col_id: id });
        return [];
    }

}

module.exports = ColonneRepo;
