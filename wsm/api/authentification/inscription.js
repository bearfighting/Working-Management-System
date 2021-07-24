const user_repo = require("./repo");

module.exports = async (req, res) => {
    console.log(req.body);
    await user_repo.addUser({ user: req.body })
    res.send({ body: req.body });
};
