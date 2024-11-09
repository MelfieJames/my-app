// serviceController.js
exports.getServices = (req, res) => {
  const query = 'SELECT * FROM services';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching services:', error);
      res.status(500).json({ error: 'Error fetching services' });
    } else {
      res.status(200).json(results);
    }
  });
};
// serviceRoutes.js
router.get('/services', serviceController.getServices);
