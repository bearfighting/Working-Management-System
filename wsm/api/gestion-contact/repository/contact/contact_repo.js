const Repository = require("../repository");
class ContactRepo extends Repository {

    constructor(modele, nom_table) {
        super();
        this.modele = modele;
        this.nom_table = nom_table
    }

    #champs_reponse = {
        id: "ctc_id",
        prenom: "ctc_prenom",
        nom: "ctc_nom",
        adresse: "ctc_adresse",
        courriel: "ctc_courriel",
        telephone: "ctc_telephone",
    };

    async get_by_id(id) {
        const [contact] = await this.#get_condition({ctc_id: id});
        return new this.modele(contact);
    }

    async get_all(user_id) {

        const resultats = await this.trx(this.nom_table + " as ctc")
            .select(this.#champs_reponse)
            .innerJoin("gtc_gestion_contact as gtc", (query_builder) => {
                query_builder.on("ctc.gtc_id", "=", "gtc.gtc_id")
            })
            .where("gtc.user_id", "=", user_id);

        return resultats.map((contact) => new this.modele(contact));
    }

    async #get_condition(where) {
        const resultats = await this.trx(this.nom_table).select(this.#champs_reponse).where(where);
        return resultats.map((contact) => new this.modele(contact));
    }

    async creer(body){

        const { id_tableau, nom, prenom, courriel, adresse, telephone  } = body;

        const data = {
            gtc_id: id_tableau,
            ctc_nom: nom,
            ctc_prenom: prenom,
            ctc_courriel: courriel,
            ctc_adresse: adresse,
            ctc_telephone: telephone,
        }

        const [resultat] = await this.trx(this.nom_table).insert(data).returning("*");
        return resultat.ctc_id;
    }

    async modifier(body, id_contact){

        const { id_tableau, nom, prenom, courriel, adresse, telephone  } = body;

        const data = {
            gtc_id: id_tableau,
            ctc_nom: nom,
            ctc_prenom: prenom,
            ctc_courriel: courriel,
            ctc_adresse: adresse,
            ctc_telephone: telephone,
        }

        const [resultat] = await this.trx(this.nom_table).update(data).where({ctc_id: id_contact}).returning("*");
        return resultat.ctc_id;
    }

    async supprimer(id){
        await this.trx(this.nom_table).delete().where({ctc_id: id});
        return [];
    }
}

module.exports = ContactRepo;
