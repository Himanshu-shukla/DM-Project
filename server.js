const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.static('Assets'));

// Handle form submission
app.post('/sendEmail', (req, res) => {
  const { name, contact, email, message } = req.body;

  // Create an email transport using Nodemailer and your email provider's settings
 
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hhimanshu030@gmail.com',
      pass: 'tklx qsve vvgr eqdv',
    },
  });

  // var transporter = nodemailer.createTransport({
  //   host: "sandbox.smtp.mailtrap.io",
  //   port: 2525,
  //   auth: {
  //     user: "1f47a491814768",
  //     pass: "79292106daef79"
  //   }
  // });

  // Define the email content and template
  const mailOptions = {
    from: 'crazyphoton150.hs@example.com',
    to: email,
    subject: 'Subject of Your Email',
    html: '<p>Your HTML template here</p>',
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
