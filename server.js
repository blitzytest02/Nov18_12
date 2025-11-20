const express = require('express');

// Initialize Express application
const app = express();

// Configure server port (use environment variable or default to 3000)
const PORT = process.env.PORT || 3000;

// Route 1: "Hello world" endpoint
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Route 2: "Good evening" endpoint
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// General error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access the server at http://localhost:${PORT}`);
  console.log(`Endpoints:`);
  console.log(`  - GET /        -> "Hello world"`);
  console.log(`  - GET /evening -> "Good evening"`);
});
