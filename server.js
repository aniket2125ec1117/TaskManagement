const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./connec.js'); 
const taskRoutes = require('./routes/taskRoutes.js');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', taskRoutes);

// For any other route
app.use('*', (req, res) => {
    console.log('wrong route');
    res.status(404).send('Route not found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
