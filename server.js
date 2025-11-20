// Import Express.js framework
const express = require('express');

// Initialize Express application
const app = express();

// Configure port (default 3000, or from environment variable)
const PORT = process.env.PORT || 3000;

/**
 * Route handler for the root endpoint.
 * Returns a simple "Hello world" greeting message.
 * 
 * @route GET /
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @returns {void} Sends "Hello world" as plain text response
 */
app.get('/', (req, res) => {
  res.send('Hello world');
});

/**
 * Route handler for the evening greeting endpoint.
 * Returns a "Good evening" greeting message.
 * 
 * @route GET /evening
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @returns {void} Sends "Good evening" as plain text response
 */
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

/**
 * Middleware for handling 404 errors (page not found).
 * Catches all requests to undefined routes and returns a 404 status.
 * 
 * @middleware
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @returns {void} Sends 404 status with error message
 */
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

/**
 * Global error handling middleware.
 * Catches any errors that occur during request processing and returns a 500 status.
 * Logs the error stack trace to the console for debugging.
 * 
 * @middleware
 * @param {Error} err - Error object containing error information
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {function} next - Express next middleware function
 * @returns {void} Sends 500 status with error message
 */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 - Internal Server Error');
});

/**
 * Starts the Express server and begins listening for incoming requests.
 * Logs server startup information and available endpoints to the console.
 * 
 * @function
 * @listens PORT
 * @returns {void} Outputs server status and endpoint information to console
 */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Try these endpoints:`);
  console.log(`  - http://localhost:${PORT}/ (Hello world)`);
  console.log(`  - http://localhost:${PORT}/evening (Good evening)`);
});
