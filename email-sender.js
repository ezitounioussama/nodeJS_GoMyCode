const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "zitounioussama95@gmail.com",
    pass: "it works with the password I generate it in gmail but I can't leave it here for security ahhaahahahahah",
  },
});

const mailOptions = {
  from: "zitounioussama95@gmail.com",
  to: "ezitounioussama@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
