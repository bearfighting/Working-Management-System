// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'wsm',
      user: 'wsm',
      password: '12345'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'wsm',
      user: 'wsm',
      password: '12345'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    }
  }

};
