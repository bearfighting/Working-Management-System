class Tache {
    constructor({ db }) {
        this._db = db;
        this._table = "gtt_gestion_tache";
    };

    async addTache({ user }) {
        return await this._db(this._table).insert(user).returning('*');
    }

    async FindTache({ email }) {
        return await this._db(this._table).where({ email }).select();
    }

    async findTacheById({ gtt_id }) {
        return await this._db(this._table).where({ gtt_id }).select().first();
    }

    async updateTache({ tache }) {
        return await this._db(this._table).where({ email: user.email }).update(tache);
    }
}

module.exports = Tache;
