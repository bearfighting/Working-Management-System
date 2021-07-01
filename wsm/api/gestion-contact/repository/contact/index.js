const ContactRepo = require("./contact_repo");
const Contact = require("./contact");

module.exports = new ContactRepo(Contact, "ctc_contact");
