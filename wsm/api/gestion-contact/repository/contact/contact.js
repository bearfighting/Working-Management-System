
class Contact {
    constructor(data) {
        this.id = data.id;
        this.nom = data.nom;
        this.prenom = data.prenom;
        this.courriel = data.courriel;
        this.adresse = data.adresse;
        this.telephone = data.telephone;
        this.id_tableau = data.id_tableau;
        this.profil_icon = data.profil_icon;
    }

    format_instance() {
        return {
            id: this.id,
            nom: this.nom,
            prenom: this.prenom,
            courriel: this.courriel,
            adresse: this.adresse,
            telephone: this.telephone,
            id_tableau: this.id_tableau,
            profil_icon: this.profil_icon
        };
    }

    format_liste() {
        return this.format_instance();
    }
}

module.exports = Contact;
