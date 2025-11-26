// Import Express.js framework
const express = require('express');

// Initialize Express application
const app = express();

// Configure server port (default 3000, can be overridden via environment variable)
const PORT = process.env.PORT || 3000;

// Define "Hello world" endpoint (root path)
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Define "Good evening" endpoint
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Try these endpoints:`);
  console.log(`  - http://localhost:${PORT}/ (returns "Hello world")`);
  console.log(`  - http://localhost:${PORT}/evening (returns "Good evening")`);
});
