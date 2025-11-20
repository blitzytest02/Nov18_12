const express = require('express');

// Initialize Express application
const app = express();

// Configure server port (use environment variable or default to 3000)
const PORT = process.env.PORT || 3000;

/**
 * Route handler for the root endpoint
 * Returns a simple "Hello world" greeting
 * 
 * @function
 * @name getRootEndpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void} Sends "Hello world" text response
 */
app.get('/', (req, res) => {
  res.send('Hello world');
});

/**
 * Route handler for the evening endpoint
 * Returns a "Good evening" greeting
 * 
 * @function
 * @name getEveningEndpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void} Sends "Good evening" text response
 */
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

/**
 * Middleware handler for undefined routes (404 errors)
 * Catches all requests that don't match any defined routes
 * 
 * @function
 * @name handle404
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void} Sends 404 status with "Not Found" message
 */
app.use((req, res) => {
  res.status(404).send('Not Found');
});

/**
 * General error handling middleware
 * Catches and handles errors from all routes and middleware
 * 
 * @function
 * @name handleErrors
 * @param {Error} err - Error object caught during request processing
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {void} Logs error and sends 500 status with error message
 */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

/**
 * Start the Express server and listen for incoming requests
 * Logs server startup information and available endpoints
 * 
 * @function
 * @name startServer
 * @returns {void} Starts server on configured PORT and logs startup information
 */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access the server at http://localhost:${PORT}`);
  console.log(`Endpoints:`);
  console.log(`  - GET /        -> "Hello world"`);
  console.log(`  - GET /evening -> "Good evening"`);
});
