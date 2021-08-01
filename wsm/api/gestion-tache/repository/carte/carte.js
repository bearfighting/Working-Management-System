class Carte {
    constructor(data) {
        this.id = data.id;
        this.id_colonne = data.id_colonne;
        this.id_tableau = data.id_tableau;
        this.titre = data.titre;
        this.description = data.description;
        this.date_debut = data.date_debut;
        this.date_echeance = data.date_echeance;
    }

    format_instance() {
        return {
            id: this.id,
            id_colonne: this.id_colonne,
            id_tableau: this.id_tableau,
            titre: this.titre,
            description: this.description,
            date_debut: this.date_debut,
            date_echeance: this.date_echeance,
        };
    }

    format_liste() {
        return this.format_instance();
    }
}

module.exports = Carte;
