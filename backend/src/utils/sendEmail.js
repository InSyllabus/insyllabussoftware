const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const sendEmail = async ({ to, subject, html }) => {
  return transporter.sendMail({
    from: `"InSyllabus Software" <${process.env.MAIL_USER}>`,
    to,
    subject,
    html,
  });
};

module.exports = sendEmail;