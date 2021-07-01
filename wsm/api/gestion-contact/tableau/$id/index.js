const { contact_service } = require("../../service");


module.exports = function(req, res) {
    
    const { id } = req.params;

    const liste_contact = contact_service.select_all_from_tool(id);

    res.send({ contacts : liste_contact });
  };