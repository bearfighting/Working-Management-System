
class Contact {
    constructor(data) {
        this.id = data.id;
        this.nom = data.nom;
        this.prenom = data.prenom;
    }

    format_instance() {
        return {
            id: this.id,
            nom: this.nom,
            prenom: this.prenom,
        };
    }

    format_liste() {
        return this.format_instance();
    }
}

module.exports = Contact;
