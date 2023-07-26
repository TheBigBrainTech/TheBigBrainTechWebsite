const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3001; // Change this to your desired port

// Replace the following configuration with your PostgreSQL database connection details
const pool = new Pool({
  user: 'teksyntax',
  host: 'teksyntax-1.cnuarrdwikbu.us-east-1.rds.amazonaws.com',
  database: 'teksyntaxDB',
  password: 'Teksyntax1760',
  port: 5432, // Change this if your PostgreSQL server uses a different port
});

app.use(bodyParser.json());

// Endpoint to handle email subscription
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  const query = 'INSERT INTO studentSubscription (email) VALUES ($1) ';

  pool
    .query(query, [email])
    .then((result) => {
      const insertedRow = result.rows[0];
      res.json({ success: true, data: insertedRow });
    })
    .catch((error) => {
      console.error('Error inserting email:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
