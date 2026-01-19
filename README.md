# Python Flask Tutorial Server

A simple tutorial project demonstrating how to build a Python server using the Flask web framework with multiple API endpoints.

## Description

This project shows how to integrate Flask into a Python application and create basic REST API endpoints. It's designed as an educational resource for learning Flask fundamentals.

This project was migrated from a Node.js/Express implementation to Python/Flask while preserving all original functionalities.

## Features

- **Flask Integration**: Modern web framework for Python
- **Multiple Endpoints**: Demonstrates routing with two different endpoints
- **Simple Architecture**: Clean, beginner-friendly code structure
- **Environment Configuration**: Configurable port via environment variables
- **Error Handling**: Custom 404 and 500 error handlers

## API Endpoints

### 1. Hello World Endpoint
- **Path**: `/`
- **Method**: GET
- **Response**: `Hello world`
- **Description**: Returns a simple greeting message

### 2. Good Evening Endpoint
- **Path**: `/evening`
- **Method**: GET
- **Response**: `Good evening`
- **Description**: Returns an evening greeting message

## Prerequisites

Before running this project, ensure you have the following installed:

- **Python** (3.12 or higher recommended)
- **pip** (Python package manager, included with Python)

You can verify your installation by running:
```bash
python --version
pip --version
```

## Installation

1. Clone the repository (if you haven't already)

2. Navigate to the project directory:
```bash
cd nodejs-express-tutorial
```

3. Create a virtual environment:
```bash
python -m venv .venv
```

4. Activate the virtual environment:

**On macOS/Linux:**
```bash
source .venv/bin/activate
```

**On Windows Command Prompt:**
```bash
.venv\Scripts\activate
```

**On Windows PowerShell:**
```bash
.venv\Scripts\Activate.ps1
```

5. Install dependencies:
```bash
pip install -r requirements.txt
```

This will install Flask and all required packages.

## Usage

### Starting the Server

To start the server:
```bash
python app.py
```

Or using Flask's built-in CLI:
```bash
flask run --port 3000
```

The server will start on port 3000 by default. You should see output like:
```
Server is running on http://localhost:3000
Try these endpoints:
  - http://localhost:3000/ (returns "Hello world")
  - http://localhost:3000/evening (returns "Good evening")
```

### Development Mode

For development with auto-restart on file changes:
```bash
flask run --debug --port 3000
```

This enables Flask's debug mode which automatically restarts the server when you modify the code.

### Testing the Endpoints

You can test the endpoints using any of these methods:

**Using a web browser:**
- Open http://localhost:3000/ to see "Hello world"
- Open http://localhost:3000/evening to see "Good evening"

**Using curl:**
```bash
# Test the Hello world endpoint
curl http://localhost:3000/

# Test the Good evening endpoint
curl http://localhost:3000/evening
```

**Using Postman or similar tools:**
- Create a GET request to `http://localhost:3000/`
- Create a GET request to `http://localhost:3000/evening`

## Environment Variables

You can customize the port by setting the `PORT` environment variable:

```bash
# Linux/macOS
PORT=8080 python app.py

# Windows Command Prompt
set PORT=8080 && python app.py

# Windows PowerShell
$env:PORT=8080; python app.py
```

## Project Structure

```
nodejs-express-tutorial/
├── app.py              # Main Flask application file
├── requirements.txt    # Python dependencies
├── .python-version     # Python version specification
├── .gitignore          # Git ignore rules
├── .venv/              # Virtual environment (created after setup)
└── README.md           # This file
```

## Dependencies

- **Flask** (>=3.1.0): Lightweight WSGI web application framework for Python

## License

MIT

## Learning Resources

To learn more about Flask:
- [Flask Official Documentation](https://flask.palletsprojects.com/)
- [Flask Quickstart Guide](https://flask.palletsprojects.com/en/latest/quickstart/)
- [Python Official Documentation](https://docs.python.org/)

## Troubleshooting

**Port already in use:**
If you see an error like "Address already in use", the port is already in use. Either:
- Stop the other process using that port
- Use a different port: `PORT=3001 python app.py`

**Module not found:**
If you see "ModuleNotFoundError: No module named 'flask'", make sure you:
1. Activated your virtual environment: `source .venv/bin/activate`
2. Installed dependencies: `pip install -r requirements.txt`

**Python version issues:**
This project requires Python 3.12 or higher. Check your version with `python --version`.

**Virtual environment not found:**
If the `.venv` folder doesn't exist, create it with:
```bash
python -m venv .venv
```

## Migration Notes

This project was migrated from Node.js/Express to Python/Flask. The following changes were made:

| Original (Node.js) | New (Python) |
|-------------------|--------------|
| `server.js` | `app.py` |
| `package.json` | `requirements.txt` |
| `package-lock.json` | (not needed) |
| `.nvmrc` | `.python-version` |
| `node_modules/` | `.venv/` |
| `npm install` | `pip install -r requirements.txt` |
| `npm start` | `python app.py` |
| `npm run dev` | `flask run --debug` |

The API endpoints and responses remain exactly the same:
- GET `/` → "Hello world"
- GET `/evening` → "Good evening"
- 404 errors → "Not Found"
- 500 errors → "Something went wrong!"
