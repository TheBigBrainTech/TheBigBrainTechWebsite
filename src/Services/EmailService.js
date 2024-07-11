const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const cors = require('cors');

const app = express();
const port = 3035;

// Configure AWS SDK
AWS.config.update({ region: 'us-east-1' }); // Use your desired region

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { fullname, email, contact, country, state, city, date, time, about } = req.body;

  const params = {
    Destination: {
      ToAddresses: ['info@thebigbraintech.com'], // Replace with your recipient email address
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `
                        Full Name: ${fullname}\n
                        Email: ${email}\n
                        Contact Number: ${contact}\n
                        Country: ${country}\n
                        State: ${state}\n
                        City: ${city}\n
                        Preferred Date: ${date}\n
                        Preferred Time: ${time}\n
                        About: ${about}
                    `,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'New Signup Form Submission',
      },
    },
    Source: 'admin@thebigbraintech.com', // Replace with your verified sender email address
  };

  ses.sendEmail(params, (err, data) => {
    if (err) {
      console.error(err, err.stack);
      res.status(500).send('Failed to send email.');
    } else {
      console.log(data);
      res.status(200).send('Form submitted successfully!');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
