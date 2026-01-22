const https = require('https');
const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();

// Serve repo root
app.use(express.static(process.cwd()));

https
  .createServer(
    {
      key: fs.readFileSync('./localhost+1-key.pem'),
      cert: fs.readFileSync('./localhost+1.pem'),
    },
    app
  )
  .listen(3000, () => {
    console.log('HTTPS dev server running at https://localhost:3000');
  });
