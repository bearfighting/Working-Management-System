
const temp = [
    {
        id: "123",
        nom: "Jacques",
        prenom: "Bergi",
    },
    {
        id: "321",
        nom: "Xing",
        prenom: "Wenfeng",
    },
    {
        id: "213",
        nom: "Patel",
        prenom: "Mitesh",
    },
    {
        id: "312",
        nom: "Stebenne",
        prenom: "Sebastien",
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
        return [];
    }

    get_condition(where) {

        const liste_resultat = temp;
        const resultat = [];

        for(const data of liste_resultat){
            resultat.push(new this.modele(data));
        } 

        return resultat;
    }
}

module.exports = ContactRepo;
