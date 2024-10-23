const express = require('express');
const connectDB = require('../config/db');
const recipeRoutes = require('../routes/recipeRoutes');

const app = express();


connectDB();

app.use(express.json());
app.use('/api/recipes', recipeRoutes);

module.exports = app;
