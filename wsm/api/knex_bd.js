const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'wsm',
        password: '12345',
        database: 'wsm'
    }
});

module.exports = knex;
