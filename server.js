const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

// Define the database connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'peltech_services',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise(); // Adding .promise() allows us to use async/await if needed

// Root route - for testing
app.get('/', (req, res) => {
  res.send('Hello World! The server is running!');
});

// Create a service
app.post('/api/services', (req, res) => {
  const { name, description, image } = req.body;

  console.log('Received service data:', req.body);

  if (!name || !description || !image) {
    console.log('Error: Missing fields');
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = `INSERT INTO services (service_name, description, image_url) VALUES (?, ?, ?)`;

  // Use the pool to query the database
  pool.query(query, [name, description, image])
    .then(([result]) => {
      console.log('Service added successfully:', result);
      res.status(200).json({ message: 'Service added successfully' });
    })
    .catch((err) => {
      console.error('Error inserting service:', err);
      res.status(500).json({ error: `Error occurred while adding the service: ${err.message}` });
    });
});

// Get all services
app.get('/api/services', (req, res) => {
  const query = `SELECT * FROM services ORDER BY created_at DESC`;

  pool.query(query)
    .then(([rows]) => {
      console.log('Services retrieved successfully:', rows);
      res.status(200).json(rows);
    })
    .catch((err) => {
      console.error('Error retrieving services:', err);
      res.status(500).json({ error: `Error occurred while retrieving services: ${err.message}` });
    });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
