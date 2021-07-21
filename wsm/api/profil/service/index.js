const {
    profil,
} = require("../repository");

const ProfilService = require("./profil_service");

module.exports = {
    profil_service : new ProfilService(profil),
}