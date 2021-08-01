class Colonne {
    constructor(data) {
        this.id = data.id;
        this.id_tableau = data.id_tableau;
        this.titre = data.titre;
        this.ordre = data.ordre;
    }

    format_instance() {
        return {
            id: this.id,
            id_tableau: this.id_tableau,
            titre: this.titre,
            ordre: this.ordre,
        };
    }

    format_liste() {
        return this.format_instance();
    }
}

module.exports = Colonne;
