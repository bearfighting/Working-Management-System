const user_repo = require("./repo");

module.exports = async (req, res) => {
    await user_repo.addUser({ user: req.body })
    res.send({ body: req.body });
};
