# Node.js Express Tutorial Server

A simple tutorial project demonstrating how to build a Node.js server using the Express.js web framework with multiple API endpoints.

## Description

This project shows how to integrate Express.js into a Node.js application and create basic REST API endpoints. It's designed as an educational resource for learning Express.js fundamentals.

## Features

- **Express.js Integration**: Modern web framework for Node.js
- **Multiple Endpoints**: Demonstrates routing with two different endpoints
- **Simple Architecture**: Clean, beginner-friendly code structure
- **Environment Configuration**: Configurable port via environment variables

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

- **Node.js** (v18.x or higher recommended)
- **npm** (v6.x or higher)

You can verify your installations by running:
```bash
node --version
npm --version
```

## Installation

1. Clone the repository (if you haven't already)

2. Navigate to the project directory:
```bash
cd nodejs-express-tutorial
```

3. Install dependencies:
```bash
npm install
```

This will install Express.js and all required packages.

## Usage

### Starting the Server

To start the server in production mode:
```bash
npm start
```

The server will start on port 3000 by default. You should see output like:
```
Server is running on http://localhost:3000
Try these endpoints:
  - http://localhost:3000/ (Hello world)
  - http://localhost:3000/evening (Good evening)
```

### Development Mode

For development with auto-restart on file changes:
```bash
npm run dev
```

This uses nodemon to automatically restart the server when you modify the code.

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
PORT=8080 npm start

# Windows Command Prompt
set PORT=8080 && npm start

# Windows PowerShell
$env:PORT=8080; npm start
```

## Project Structure

```
nodejs-express-tutorial/
├── server.js           # Main application file
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Locked dependency versions
├── .gitignore         # Git ignore rules
├── .nvmrc             # Node.js version specification
└── README.md          # This file
```

## Dependencies

- **express** (^4.19.2): Fast, unopinionated, minimalist web framework for Node.js
- **nodemon** (^3.0.1): Development tool for auto-restarting the server (dev dependency)

## License

MIT

## Learning Resources

To learn more about Express.js:
- [Express.js Official Documentation](https://expressjs.com/)
- [Express.js Getting Started Guide](https://expressjs.com/en/starter/installing.html)
- [Node.js Official Documentation](https://nodejs.org/docs/)

## Troubleshooting

**Port already in use:**
If you see an error like "EADDRINUSE", the port is already in use. Either:
- Stop the other process using that port
- Use a different port: `PORT=3001 npm start`

**Module not found:**
If you see "Cannot find module 'express'", make sure you ran `npm install` first.

**Node version issues:**
This project requires Node.js 18.x or higher. Check your version with `node --version`.