const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

module.exports = (req, res) => {
    const { email } = req.body;

    const resultat = await user_repo.findUser({ email });

    if (resultat) {
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
            to: 'florentxingwenfeng@gmail.com', // list of receivers
            subject: 'test mail', // Subject line
            html: '<h1>this is a test mail.</h1>'// plain text body
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err)
                res.sendStatus(404);
            else
                res.sendStatus(200);
        })
    } else {
        res.sendStatus(403);
    }
}
