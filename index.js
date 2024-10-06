const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/index');
const db = require('./config/connection');
const dotenv = require('dotenv').config();
const app = express();
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', postRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
