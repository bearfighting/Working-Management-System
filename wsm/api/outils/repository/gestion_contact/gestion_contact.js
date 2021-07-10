
class GestionContact {
    constructor(data) {
        this.id = data.id;
        this.user_id = data.user_id;
        this.titre = data.titre;
        this.bg_couleur = data.bg_couleur;
    }

    format_instance() {
        return {
            id: this.id,
            user_id: this.user_id,
            titre: this.titre,
            bg_couleur: this.bg_couleur,
        };
    }

    format_liste() {
        return this.format_instance();
    }
}

module.exports = GestionContact;
