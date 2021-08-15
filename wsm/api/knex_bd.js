const knex = require("knex");
let pg;

global.pg = global.pg ||
    knex({
        client: "pg",
        connection: {
            host: 'localhost',
            user: 'wsm',
            password: '12345',
            database: 'wsm'
        }
    });

pg = global.pg;

module.exports = pg;
