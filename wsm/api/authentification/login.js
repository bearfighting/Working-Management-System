const user_repo = require("./repo");

module.exports = async (req, res) => {
    const { email, mots_de_passe } = req.body;
    const resultat = await user_repo.findUser({ email });
    console.log(resultat);
    if (resultat && mots_de_passe === resultat[0]?.mots_de_passe) {
        console.log({ id: resultat[0]?.id, email: resultat[0]?.email, nom: resultat[0]?.prenom });
        req.login({ id: resultat[0]?.id, email: resultat[0]?.email, nom: resultat[0]?.prenom }, function (err) {
            if (err) res.sendStatus(403);
            else sendStatus(200);
        });
    } else {
        res.sendStatus(403);
    }
}
