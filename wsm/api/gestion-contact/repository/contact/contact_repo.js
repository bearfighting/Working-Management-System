const Repository = require("../../../commun/repository");
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
        const [contact] = await this.#get_from_db({ctc_id: id});
        return contact;
    }

    async get_all(user_id) {

        const resultats = await this.trx(this.nom_table + " as ctc")
            .select(this.#champs_reponse)
            .innerJoin("gtc_gestion_contact as gtc", (query_builder) => {
                query_builder.on("ctc.gtc_id", "=", "gtc.gtc_id")
            })
            .where("gtc.user_id", "=", user_id)
            .orderBy("ctc.ctc_id");

        return resultats.map((contact) => new this.modele(contact));
    }

    async trouver_si_unique(contact_id, body){

        const { id_tableau, telephone, courriel } = body;

        if (!(telephone || courriel)){
            return [];
        }

        const qb = (query_builder) => {
            query_builder
            .where("gtc_id", "=", id_tableau).andWhere("ctc_id", "!=", contact_id).andWhere((query_builder) =>{
                if(telephone && courriel){
                    query_builder.andWhere("ctc_courriel", "=", courriel).orWhere("ctc_telephone", "=", telephone)
                }else{
                    if(telephone){
                        query_builder.where("ctc_telephone", "=", telephone);
                    }else{
                        query_builder.where("ctc_courriel", "=", courriel);
                    }
                }
            });
        }

        const contacts = await this.#get_from_db(qb);
        return contacts;
    }

    async get_by_tableau(id_tableau){
        const resultats = await this.#get_from_db({gtc_id: id_tableau});
        return resultats;
    }

    async #get_from_db(where) {
        const resultats = await this.trx(this.nom_table).select(this.#champs_reponse).where(where).orderBy("ctc_id");
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

        const { nom, prenom, courriel, adresse, telephone  } = body;

        const data = {
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

    async creer_plusieurs(body) {
        const contacts = body;
        let contact_ids = [];

        for(const contact of contacts) {
            contact_ids.push(await this.creer(contact));
        }

        return contact_ids;
    }
}

module.exports = ContactRepo;
