const user_repo = require("./repo");

module.exports = (req, res) => {
    console.log(req.body);
    user_repo.addUser({ user: req.body })
    res.send({ body: req.body });
};
