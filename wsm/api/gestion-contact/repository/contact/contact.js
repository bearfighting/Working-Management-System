
class Contact {
    constructor(data) {
        this.id = data.id;
        this.nom = data.nom;
        this.prenom = data.prenom;
        this.courriel = data.courriel,
        this.adresse = data.adresse,
        this.telephone = data.telephone
    }

    format_instance() {
        return {
            id: this.id,
            nom: this.nom,
            prenom: this.prenom,
            courriel: this.courriel,
            adresse: this.adresse,
            telephone: this.telephone
        };
    }

    format_liste() {
        return this.format_instance();
    }
}

module.exports = Contact;
