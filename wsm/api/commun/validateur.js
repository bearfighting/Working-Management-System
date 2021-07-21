const _ = require("lodash");

class Validateur {

    est_un_nombre(nombre){
        return /^\d+$/.test(nombre);
    }

    valider_user_authentifier(user){

        if(_.isNil(user.id)){
            return "errActionNonAutorisee";
        }

        return "";
    }

}

module.exports = Validateur;