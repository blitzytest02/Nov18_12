// Import Express.js framework
const express = require('express');

// Initialize Express application
const app = express();

// Configure port (default 3000, or from environment variable)
const PORT = process.env.PORT || 3000;

// Define route handler for "Hello world" endpoint
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Define route handler for "Good evening" endpoint
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 - Internal Server Error');
});

// Start server and listen on specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Try these endpoints:`);
  console.log(`  - http://localhost:${PORT}/ (Hello world)`);
  console.log(`  - http://localhost:${PORT}/evening (Good evening)`);
});
