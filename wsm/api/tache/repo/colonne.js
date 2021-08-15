class Colonne {
    constructor({ db }) {
        this._db = db;
        this._table = "col_colonne";
    };

    async addColonne({ colonne }) {
        return await this._db(this._table).insert(colonne).returning('*');
    }

    async findColonneById({ col_id }) {
        return await this._db(this._table).where({ col_id }).select();
    }

    async findColonnesByTache({ gtt_id }) {
        return await this._db(this._table).where({ gtt_id }).select();
    }

    async updateColonne({ colonne, col_id }) {
        return await this._db(this._table).where({ col_id }).update(colonne);
    }

    async deleteColonneByColTitre({ col_titre }) {
        return await this._db(this._table).where({ col_titre }).delete();
    }
}

module.exports = Colonne;
