const user_repo = require("./repo");

module.exports = async (req, res) => {
    const { id, mots_de_passe } = req.body;

    const resultat = await user_repo.findUserById({ id });
    if (resultat) {
        let user = resultat[0];
        user = { ...user, mots_de_passe: mots_de_passe };
        await user_repo.updateUser({ user });
        res.sendStatus(200);
    } else {
        res.sendStatus(403);
    }
}
