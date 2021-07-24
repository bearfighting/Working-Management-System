
class Profil {
    constructor(data) {
        this.user_id = data.user_id;
        this.nom = data.nom;
        this.prenom = data.prenom;
        this.courriel = data.courriel;
        this.est_actif = data.est_actif;
        this.avatar = data.avatar;
        this.adresse = data.adresse;
        this.telephone = data.telephone;
        this.langue = data.langue;
        this.theme = data.theme;
    }

    format_instance() {
        return {
            user_id: this.user_id,
            nom: this.nom,
            prenom: this.prenom,
            courriel: this.courriel,
            est_actif: this.est_actif,
            avatar: this.avatar,
            adresse: this.adresse,
            telephone: this.telephone,
            langue: this.langue,
            theme: this.theme
        };
    }

    format_liste() {
        return this.format_instance();
    }
}

module.exports = Profil;
