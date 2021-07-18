class User {
    constructor({ db }) {
        this._db = db;
        this._table = "user";
    };

    async addUser({ user }) {
        return await this._db(this._table).insert(user).returning('*');
    }

    async findUser({ email }) {
        return await this._db(this._table).where({ email }).select();
    }

    async findUserById({ id }) {
        return await this._db(this._table).where({ id }).select();
    }

    async updateUser({ user }) {
        return await this._db(this._table).where({ email: user.email }).update({ user });
    }
}

module.exports = User;
