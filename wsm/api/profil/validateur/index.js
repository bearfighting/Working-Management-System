const ProfilValidateur = require("./profil_validateur");

const {profil} = require("../repository");

module.exports = {
    profil_validateur: new ProfilValidateur(profil),
}
