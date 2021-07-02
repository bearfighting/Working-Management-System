import pg from "pg";
import _ from "lodash";

const user = "wsm";
const password = "12345";
const connectionString = "postgres://" + user + ":"+ password +"@localhost:5432/tentative";

class Database{

    static #pgClient = null;

    static getConnexion(){

        if(_.isNull(this.#pgClient)){
            this.#pgClient = new pg.Client(connectionString);
        }

        return this.#pgClient;
    }
}

module.exports = Database;