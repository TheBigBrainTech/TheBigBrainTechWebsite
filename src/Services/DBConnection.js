const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3030;

// Use middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL database connection configuration
const pool = new Pool({
  user: 'teksyntax',
  host: 'awseb-e-egpnj6kys3-stack-awsebrdsdatabase-i4rbsvzdqeqv.cnuarrdwikbu.us-east-1.rds.amazonaws.com',
  database: 'TeksyntaxDB',
  password: 'Teksyntax1760',
  port: 5432,
});

// Test the database connection
pool.connect((err, client, done) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database!');
    done();
  }
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM employeeData WHERE email = $1 AND password = $2';

  pool.query(query, [email, password], (err, result) => {
    if (err) {
      console.error('Error executing login query:', err);
      res.status(500).json({ error: 'Error executing login query' });
    } else {
      if (result.rowCount === 1) {
        // If user exists and credentials are correct
        res.status(200).json({ message: 'Login successful' });
      } else {
        // If user doesn't exist or credentials are incorrect
        res.status(401).json({ error: 'Invalid email or password' });
      }
    }
  });
});


// Create a new student subscription record
app.post('/api/PostStudentSubscription', (req, res) => {
    const { email } = req.body;
    const query = 'INSERT INTO newsLetter(email) VALUES($1)';
  
    pool.query(query, [email], (err, result) => {
      if (err) {
        console.error('Error inserting record:', err);
        res.status(500).json({ error: 'Error inserting record' });
      } else {
        res.status(201).json(result.rows[0]);
      }
    });
  });

  // Read all student subscription records
app.get('/api/GetStudentSubscription', (req, res) => {
    const query = 'select * from newsLetter;';
  
    pool.query(query, (err, result) => {
      if (err) {
        console.error('Error fetching records:', err);
        res.status(500).json({ error: 'Error fetching records' });
      } else {
        res.status(200).json(result.rows);
      }
    });
  });
  // Read all student course download records
app.get('/api/Getcoursebrochuredownload', (req, res) => {
  const query = 'select * from coursebrochuredownload;';

  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching records:', err);
      res.status(500).json({ error: 'Error fetching records' });
    } else {
      res.status(200).json(result.rows);
    }
  });
});

  // POST for student data for brochure download
app.post('/api/PostCourseBrochureDownload', (req, res) => {
  const { name, email, telephone } = req.body;
  const query = 'INSERT INTO coursebrochuredownload (name, email, telephone) VALUES ($1, $2, $3)';

  pool.query(query, [name, email, telephone], (err, result) => {
    if (err) {
      console.error('Error inserting record:', err);
      res.status(500).json({ error: 'Error inserting record' });
    } else {
      res.status(201).json({ message: 'User data sent successfully' });
    }
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
