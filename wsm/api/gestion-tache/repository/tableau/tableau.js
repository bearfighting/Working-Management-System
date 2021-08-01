class Tableau {
    constructor(data) {
        this.id = data.id;
    }

    format_instance() {
        return {
            id: this.id,
        };
    }

    format_liste() {
        return this.format_instance();
    }
}

module.exports = Tableau;
