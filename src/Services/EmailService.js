const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Replace these options with your actual email service configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'information@teksyntaxinc.com',
    pass: 'Teksyntax1760',
  },
});

app.post('/send-email', (req, res) => {
  const { fullname, email, contact, city, state, date, time, about } = req.body;

  const mailOptions = {
    from: 'information@teksyntaxinc.com',
    to: 'harsh@collaboraitinc.com', // Replace this with the recipient's email address
    subject: 'New Signup Form Submission',
    html: `
      <p><strong>Full Name:</strong> ${fullname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Contact Number:</strong> ${contact}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>State:</strong> ${state}</p>
      <p><strong>Preferred Date:</strong> ${date}</p>
      <p><strong>Preferred Time:</strong> ${time}</p>
      <p><strong>About:</strong> ${about}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

const port = 3035; // Change this to the desired port number
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
