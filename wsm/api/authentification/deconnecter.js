module.exports = async (req, res) => {
    req.login({}, function (err) {
        if (err) res.sendStatus(403);
        else sendStatus(200);
    });
}
