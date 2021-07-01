const {
    contact,
    tableau,
} = require("../repository");

const ContactService = require("./contact_service");
const TableauService = require("./tableau_service");

module.exports = {
    contact_service : new ContactService(contact),
    tableau_service : new TableauService(tableau),
}