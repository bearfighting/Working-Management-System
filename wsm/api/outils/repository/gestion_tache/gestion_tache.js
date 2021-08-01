
class GestionTache {
    constructor(data) {
        this.id = data.id;
        this.user_id = data.user_id;
        this.titre = data.titre;
        this.bg_couleur = data.bg_couleur;
        this.icon_gauche = data.icon_gauche;
        this.icon_millieu = data.icon_millieu;
        this.icon_droite = data.icon_droite;
    }

    format_instance() {
        return {
            id: this.id,
            user_id: this.user_id,
            titre: this.titre,
            bg_couleur: this.bg_couleur,
            icon_gauche: this.icon_gauche,
            icon_millieu: this.icon_millieu,
            icon_droite: this.icon_droite,
        };
    }

    format_liste() {
        return this.format_instance();
    }
}

module.exports = GestionTache;
