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
 * @param {express.Request} req - Express request object containing HTTP request information
 * @param {express.Response} res - Express response object for sending HTTP response
 * @returns {void} Sends "Hello world" as plain text response with status 200
 * @example
 * // Request: GET http://localhost:3000/
 * // Response: "Hello world"
 */
app.get('/', (req, res) => {
  res.send('Hello world');
});

/**
 * Route handler for the evening greeting endpoint.
 * Returns a "Good evening" greeting message.
 * 
 * @route GET /evening
 * @param {express.Request} req - Express request object containing HTTP request information
 * @param {express.Response} res - Express response object for sending HTTP response
 * @returns {void} Sends "Good evening" as plain text response with status 200
 * @example
 * // Request: GET http://localhost:3000/evening
 * // Response: "Good evening"
 */
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

/**
 * Middleware for handling 404 errors (page not found).
 * Catches all requests to undefined routes and returns a 404 status.
 * This middleware should be placed after all route definitions to catch unmatched routes.
 * 
 * @middleware
 * @param {express.Request} req - Express request object containing HTTP request information
 * @param {express.Response} res - Express response object for sending HTTP response
 * @returns {void} Sends 404 status with "404 - Not Found" message
 * @example
 * // Request: GET http://localhost:3000/nonexistent
 * // Response: 404 status with "404 - Not Found"
 */
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

/**
 * Global error handling middleware.
 * Catches any errors that occur during request processing and returns a 500 status.
 * Logs the error stack trace to the console for debugging purposes.
 * This middleware must have four parameters to be recognized as error handling middleware by Express.
 * 
 * @middleware
 * @param {Error} err - Error object containing error information and stack trace
 * @param {express.Request} req - Express request object containing HTTP request information
 * @param {express.Response} res - Express response object for sending HTTP response
 * @param {express.NextFunction} next - Express next middleware function for passing control
 * @returns {void} Sends 500 status with "500 - Internal Server Error" message
 * @example
 * // When an error occurs in route handlers or middleware:
 * // Response: 500 status with "500 - Internal Server Error"
 * // Console: Error stack trace logged
 */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 - Internal Server Error');
});

/**
 * Starts the Express server and begins listening for incoming HTTP requests.
 * Logs server startup information and available endpoints to the console.
 * The server will listen on the port specified by the PORT environment variable,
 * or default to port 3000 if not specified.
 * 
 * @function
 * @listens {number} PORT - The port number on which the server will listen
 * @returns {void} Outputs server status and endpoint information to console
 * @example
 * // Server output when started:
 * // "Server is running on http://localhost:3000"
 * // "Try these endpoints:"
 * // "  - http://localhost:3000/ (Hello world)"
 * // "  - http://localhost:3000/evening (Good evening)"
 */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Try these endpoints:`);
  console.log(`  - http://localhost:${PORT}/ (Hello world)`);
  console.log(`  - http://localhost:${PORT}/evening (Good evening)`);
});
