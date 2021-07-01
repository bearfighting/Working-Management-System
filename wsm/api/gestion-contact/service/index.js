const {
    contact,
} = require("../repository");

const ContactService = require("./contact_service");

module.exports = {
    contact_service : new ContactService(contact),
}