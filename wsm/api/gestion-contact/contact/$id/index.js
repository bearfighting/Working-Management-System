const { contact_service } = require("../../service");

module.exports = function(req, res) {

    console.log(req.body);
    res.send({ body: req.body });

}