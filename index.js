const express = require('express');
const app = express();

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});

const findAvailablePort = (startPort) => {
  return new Promise((resolve, reject) => {
    const server = require('net').createServer();
    server.listen(startPort, () => {
      const port = server.address().port;
      server.close(() => resolve(port));
    });
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(findAvailablePort(startPort + 1));
      } else {
        reject(err);
      }
    });
  });
};

const PORT = process.env.PORT || 3000;

// Add basic validation before starting server
if (!PORT || isNaN(PORT)) {
  console.error('Invalid PORT configuration');
  process.exit(1);
}

app.get('/', (req, res) => {
  res.send('Welcome to NSM Website');
});

findAvailablePort(PORT)
  .then(port => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Failed to find an available port:', err);
  });
