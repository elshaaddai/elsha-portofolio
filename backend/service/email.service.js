const nodemailer = require("nodemailer");

const sendMailService = async (email, message) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({

    from: process.env.EMAIL_USER,

    to: process.env.EMAIL_USER,

    replyTo: email,

    subject: "New Portfolio Message",

    html: `
      <h2>New Message From Portfolio</h2>

      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Message:</strong></p>

      <p>${message}</p>
    `,
  });
};

module.exports = {
  sendMailService,
};