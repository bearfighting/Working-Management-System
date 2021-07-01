
const temp = [
    {
        id: "321",
        nom: "Xing",
        prenom: "Wenfeng",
        courriel: "xing.wenfeng@uqam.ca	",
        adresse: "123 Ave. Mordor",
        telephone: ""
    },
    {
        id: "213",
        nom: "Patel",
        prenom: "Mitesh",
        courriel: "patel.miteshbai@uqam.com",
        adresse: "456 Rue. Hogwarts",
        telephone: "111-111-1111"
    },
    {
        id: "312",
        nom: "Stebenne",
        prenom: "Sebastien",
        courriel: "richer_stebenne.sebastien@uqam.ca",
        adresse: "789 Boul. Westeros",
        telephone: ""
    }
]

class ContactRepo {

    constructor(modele, nom_table) {
        this.modele = modele;
        this.nom_table = nom_table
    }

    #champs_reponse = {
        id: "ctc_id",
        prenom: "ctc_prenom",
        nom: "ctc_nom",
    };

    get_by_id(id) {
        const [contact] = [{id: id, prenom: "Seb", nom: "Steb"}];
        return new this.modele(contact);
    }

    get_condition(where) {

        const liste_resultat = temp;
        const resultat = [];

        for(const data of liste_resultat){
            resultat.push(new this.modele(data));
        } 

        return resultat;
    }

    creer(body){

        const { nom, prenom, courriel, adresse, telephone  } = body;

        const data = {
            ctc_nom: nom,
            ctc_prenom: prenom,
            ctc_courriel: courriel,
            ctc_adresse: adresse,
            ctc_telephone: telephone,
        }

        const [resultat] = [{ctc_id: 999999}];

        return resultat.ctc_id;
    }
}

module.exports = ContactRepo;
