"""
Flask Tutorial Server

A simple tutorial project demonstrating how to build a Python server using the Flask
web framework with multiple API endpoints. This is a rewrite of the original Node.js/Express
implementation preserving all functionalities.

Features:
- Flask Integration: Modern web framework for Python
- Multiple Endpoints: Demonstrates routing with two different endpoints
- Simple Architecture: Clean, beginner-friendly code structure
- Environment Configuration: Configurable port via environment variables
"""

import os
from flask import Flask

# Initialize Flask application
app = Flask(__name__)


@app.route('/')
def index():
    """
    Hello World Endpoint
    
    Path: /
    Method: GET
    Response: Hello world
    Description: Returns a simple greeting message
    """
    return 'Hello world'


@app.route('/evening')
def evening():
    """
    Good Evening Endpoint
    
    Path: /evening
    Method: GET
    Response: Good evening
    Description: Returns an evening greeting message
    """
    return 'Good evening'


@app.errorhandler(404)
def not_found(e):
    """
    404 Error Handler
    
    Handles requests to undefined routes by returning a "Not Found" message
    with a 404 status code.
    
    Args:
        e: The exception that triggered this error handler
        
    Returns:
        Tuple of (response_body, status_code)
    """
    return 'Not Found', 404


@app.errorhandler(500)
def server_error(e):
    """
    500 Error Handler
    
    Handles internal server errors by returning a generic error message
    with a 500 status code.
    
    Args:
        e: The exception that triggered this error handler
        
    Returns:
        Tuple of (response_body, status_code)
    """
    return 'Something went wrong!', 500


if __name__ == '__main__':
    # Configure server port (default 3000, can be overridden via environment variable)
    port = int(os.environ.get('PORT', 3000))
    
    # Print startup information
    print(f'Server is running on http://localhost:{port}')
    print('Try these endpoints:')
    print(f'  - http://localhost:{port}/ (returns "Hello world")')
    print(f'  - http://localhost:{port}/evening (returns "Good evening")')
    
    # Start the Flask development server
    # host='0.0.0.0' allows connections from any network interface
    app.run(host='0.0.0.0', port=port)
