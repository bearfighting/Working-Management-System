const ContactValidateur = require("./contact_validateur");

const {contact} = require("../repository");

module.exports = {
    contact_validateur: new ContactValidateur(contact)
}
