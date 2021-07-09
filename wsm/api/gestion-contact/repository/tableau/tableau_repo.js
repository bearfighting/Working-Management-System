const Repository = require("../../../commun/repository");

class TableauRepo extends Repository{

    constructor(modele, nom_table) {
        super();
        this.modele = modele;
        this.nom_table = nom_table
    }

    #champs_reponse = {
        id: "gct_id",
        user_id: "user_id"
    };

    async get_by_id(id_tableau) {

        const [tableau] = await this.#get_from_db({gtc_id: id_tableau});
        return tableau;
    }

    async #get_from_db(where) {
        const resultats = await this.trx(this.nom_table).select(this.#champs_reponse).where(where).orderBy("ctc_id");
        return resultats.map((contact) => new this.modele(contact));
    }

}

module.exports = TableauRepo;
