class Carte {
    constructor({ db }) {
        this._db = db;
        this._table = "crt_carte";
    };

    async addCarte({ carte }) {
        return await this._db(this._table).insert(carte).returning('*');
    }

    async findCarteById({ crt_id }) {
        return await this._db(this._table).where({ crt_id }).select();
    }

    async findCarteByCol({ col_id }) {
        return await this._db(this._table).where({ col_id }).select();
    }

    async updateColonne({ colonne, crt_id }) {
        return await this._db(this._table).where({ crt_id }).update(colonne);
    }
}

module.exports = Carte;
