const { user } = require("./repo");

module.exports = (req, res) => {
    console.log(req.body);
    console.log(req.params);
}
