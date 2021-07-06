const User = require("./user");
const knex = require("../../knex_bd");

const user_repo = new User({ db: knex });

module.exports = user_repo;
