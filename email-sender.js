const nodemailer = require("nodemailer");
// create a transport object with the SMTP configuration
const transporter = nodemailer.createTransport({
  // specify the service used for sending email (Gmail in this case)
  service: "gmail",
  auth: {
    // specify the email address and the application-specific password for authentication
    user: "zitounioussama95@gmail.com",
    pass: "it works with the password I generate it in gmail but I can't leave it here for security ahhaahahahahah",
  },
});
// specify the email content
const mailOptions = {
  from: "zitounioussama95@gmail.com",
  to: "ezitounioussama@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};
// send the email using the transport object
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    // if the email is sent successfully, log the response to the console
    console.log("Email sent: " + info.response);
  }
});
