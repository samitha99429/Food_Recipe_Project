const express = require('express');
const connectDB = require('../config/db');
const authRoutes = require('../routes/authRoutes');

const app = express();


connectDB();

app.use(express.json());
app.use('/api/auth', authRoutes);

module.exports = app;
