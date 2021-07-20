const _ = require("lodash");

class Validateur {

    est_un_nombre(nombre){
        return /^\d+$/.test(nombre);
    }

}

module.exports = Validateur;