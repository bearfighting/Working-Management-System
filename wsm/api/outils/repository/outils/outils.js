
class Outils {
    constructor(data) {
        this.gestion_contact = data.gestion_contact;
        this.gestion_tache = data.gestion_tache;
        this.gestion_banque = data.gestion_banque;
    }

    format_instance() {
        return {
            gestion_contact: this.gestion_contact,
            gestion_tache: this.gestion_tache,
            gestion_banque: this.gestion_banque,
        };
    }

    format_liste() {
        return this.format_instance();
    }
}

module.exports = Outils;
