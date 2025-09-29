const express = require('express');
const nmapRoutes = require('./Routes/nmapRoutes.js');

const app = express();

const fs = require('fs');
const path = require('path');

const nmapInfoPath = path.join(__dirname, './data/nmap-info.json');
let nmapInfo = JSON.parse(fs.readFileSync(nmapInfoPath, 'utf8'));


// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json(nmapInfo['nmap-info']);
});

// Mount nmap routes
app.use('/nmap', nmapRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});