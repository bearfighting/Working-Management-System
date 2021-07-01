const ContactValidateur = require("./contact_validateur");
const TableauValidateur = require("./tableau_validateur");

const {contact , tableau} = require("../repository");

module.exports = {
    contact_validateur: new ContactValidateur(contact),
    tableau_validateur: new TableauValidateur(tableau)
}
