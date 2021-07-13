import gestion_erreur from "../../../gestion_erreur/erreurs";

async function get_from_db(where) {
    const resultats = await this.trx(this.nom_table).select(this.#champs_reponse).where(where).orderBy("ctc_id");
    return resultats.map((contact) => new this.modele(contact));
}

async function trouver_si_unique(contact_id, id_tableau, telephone, courriel) {

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
    const contacts = await get_from_db(qb);
    return contacts;
}

async function est_champ_obligatoire_present(body){

    const { data } = body;
    const { contacts, idsTableau } = data;

    if (idsTableau.length == 0) {
        return false;
    }

    contacts.foreach(contact => {
        const { nom, prenom, courriel, telephone } = contact;
        if(_.isEmpty(nom) || _.isEmpty(prenom) ||_.isEmpty(courriel) || _.isEmpty(telephone)){
            return false;
        }
    });

    return true;
}

async function valider_post(body){

    const { data } = body;
    const { contacts, idsTableau } = data;

    if(await !est_champ_obligatoire_present(body)){
        return "errRequeteInvalide";
    }

    const contacts = await trouver_si_unique(-1, body);

    if(contacts.length > 0){
        return "errValeurUtilisee";
    }

    return "";
}

async function valider_requete(req) {
    const { body } = req;

    const erreur = await valider_post(body);

    return [_.isEmpty(erreur), erreur];
}

async function method_post({req, res}){

    const [est_valide, erreur] = await valider_requete(req);

    if(!est_valide){
        gestion_erreur(res, erreur);
        return;
    }

    const { data } = req.body;
    const { contacts, idsTableau } = data;

    const liste_erreur = await ajouter_plusieurs(contacts, idsTableau);

    res.send(liste_erreur);
}

async function ajouter_plusieurs(contacts, idsTableau) {
    let liste_erreur = [];

    idsTableau.foreach(id => {
        contacts.foreach(contact => {
            const { courriel, telephone } = contact;
            const contact_trouve = await trouver_si_unique(-1, id, telephone, courriel);
            if(contact_trouve.length > 0) {
                contact.id_tableau = id;
                liste_erreur.push(contact);
            } else {
                ajouter(contact, id);
            }
        });
    });

    return liste_erreur;
}

async function ajouter(contact, id){
    const contact_id = await creer(contact, id);
    return;
}

async function creer(contact, id_tableau){
    const { nom, prenom, courriel, adresse, telephone  } = contact;

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

module.exports = async function(req, res) {
    const { method } = req;

    switch(method){
        case "POST": await method_post({ req, res });break;
        default:
            res.status(404);
            res.send();
    }
}
