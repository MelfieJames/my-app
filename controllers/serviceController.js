const db = require('../components/dbConnection');

// Create function to add a new service
const createService = (req, res) => {
  const { service_name, description, image_url } = req.body;

  // Insert query
  const query = 'INSERT INTO services (service_name, description, image_url) VALUES (?, ?, ?)';
  db.query(query, [service_name, description, image_url], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error adding new service');
      return;
    }
    res.status(201).send(`Service added with ID: ${result.insertId}`);
  });
};

module.exports = { createService };
