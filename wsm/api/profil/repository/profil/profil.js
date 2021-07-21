
class Profil {
    constructor(data) {
        this.user_id = data.user_id;
        this.nom = data.nom;
        this.prenom = data.prenom;
        this.courriel = data.courriel;
    }

    format_instance() {
        return {
            user_id: this.user_id,
            nom: this.nom,
            prenom: this.prenom,
            courriel: this.courriel,
        };
    }

    format_liste() {
        return this.format_instance();
    }
}

module.exports = Profil;
