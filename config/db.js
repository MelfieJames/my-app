const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',   // Default MySQL username in XAMPP
  password: '',   // Default MySQL password in XAMPP (empty by default)
  database: 'peltech_services'  // Your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as ID ' + connection.threadId);
});
