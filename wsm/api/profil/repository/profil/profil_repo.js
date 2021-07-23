const Repository = require("../../../commun/repository");

class ProfilRepo extends Repository {

    constructor(modele, nom_table) {
        super();
        this.modele = modele;
        this.nom_table = nom_table;
    }

    #champs_reponse = {
        user_id: "id",
        nom: "nom",
        prenom: "prenom",
        courriel: "email",
        est_actif: "est_actif",
        avatar: "avatar",
        adresse: "adresse",
        telephone: "telephone",
        langue: "langue",
        theme: "theme"
    };

    async get_by_id(user_id){
        const where = {id: user_id};
        const [resultats] = await this.#get_from_db(where);
        return resultats;
    }

    async #get_from_db(where) {
        const resultats = await this.trx(this.nom_table).select(this.#champs_reponse).where(where);
        return resultats.map((contact) => new this.modele(contact));
    }

    async modifier(body, user_id){

        const { nom, prenom, courriel, est_actif, avatar, adresse, telephone, langue, theme } = body;

        const data = {
            nom: nom,
            prenom: prenom,
            email: courriel,
            est_actif: est_actif,
            avatar: avatar,
            adresse: adresse,
            telephone: telephone,
            langue: langue,
            theme: theme,
        }

        const [resultat] = await this.trx(this.nom_table).update(data).where({id: user_id}).returning("*");
        return resultat.user_id;
    }

    async desactiver(user_id){

        const data = {
            est_actif: false,
        }

        const [resultat] = await this.trx(this.nom_table).update(data).where({id: user_id}).returning("*");
        return resultat.user_id;
    }

}

module.exports = ProfilRepo;
