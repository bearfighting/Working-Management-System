import knex from "../knex_bd";

class Repository {

    trx;

    constructor() {
        this.trx = knex;
    }

}

module.exports = Repository;