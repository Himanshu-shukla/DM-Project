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
  console.log(name, contact, email, message);

  // Get the current date and time
  const currentDate = new Date();

  // Format the date as "DD/MM/YY"
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  }).format(currentDate);

  // Format the time as "Hr/Min"
  const formattedTime = new Intl.DateTimeFormat('en-GB', {
    hour: 'numeric',
    minute: 'numeric'
  }).format(currentDate);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'email.digitazmedia@gmail.com',
      pass: 'cffm fdsb dhhm ybwx',
    },
  });

  // Define the email content and template
  const mailOptions = {
    from: 'Digitaz Media <email.digitazmedia@gmail.com>',
    to: "email.digitazmedia@gmail.com",
    subject: 'Enquiry Details',
    text: `Name: ${name}\nEmail: ${email}\nContact: ${contact}\nLocation: ${message}\nDate: ${formattedDate}\nTime: ${formattedTime}`,
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
