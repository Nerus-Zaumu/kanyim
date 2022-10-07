import nodemailer from 'nodemailer';
import { getLocalStorage } from '../models/localstorage';
export const mailer = (toEmail) => {
    const code = getRandomCode();
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
        },
        tls: {
            ciphers: 'SSLv3'
        }
    });
    let mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: toEmail,
        subject: `Password Recovery Email`,
        text: `<h4>Attached to this email is a copy of your password recovery Code</h4><h1><strong>${code}</strong></h1>. <h4>Do not share this code with anyone</h4>`
    };
    transporter.sendMail(mailOptions, function (err, info) {
        var _a;
        if (err) {
            return err;
        }
        else {
            (_a = getLocalStorage()) === null || _a === void 0 ? void 0 : _a.setItem('userCode', JSON.stringify(code));
        }
    });
};
function getRandomCode() {
    const min = 10000;
    const max = 99999;
    const code = Math.floor(Math.random() * (max - min + 1)) + min;
    return code;
}
