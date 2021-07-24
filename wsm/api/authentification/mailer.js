const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const user_repo = require("./repo");

module.exports = async (req, res) => {
    const { email } = req.body;
    const resultat = await user_repo.findUser({ email });

    if (resultat) {
        const { id } = resultat[0];

        const transporter = nodemailer.createTransport(smtpTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
                user: 'miaxingyuanyuan@gmail.com',
                pass: 'florentsophie520mia'
            }
        }));

        const mailOptions = {
            from: 'miaxingyuanyuan@gmail.com', // sender address
            to: email, // list of receivers
            subject: 'Réinitialiser ton mots de passe du WSM', // Subject line
            html: `<h1>http://localhost:3000/pages/recup_mots_de_passe/reinit_mots_de_passe/${id}</h1>`// plain text body
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
                res.sendStatus(404);
            }
            else {
                res.sendStatus(200);
            }
        })
    } else {
        res.sendStatus(403);
    }
}
