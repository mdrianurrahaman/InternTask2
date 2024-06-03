const express = require('express');
const app = express();
const port = 3000;
const studentRoutes = require('./routes/studentRoutes');
const connection = require('./config/db');

// Middleware to parse JSON bodies
app.use(express.json());

// Use the routes
app.use('/api', studentRoutes);  // Ensure the base path is /api

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
    connection.end((err) => {
        if (err) {
            console.error('Error ending the connection: ' + err.stack);
        }
        console.log('Connection ended');
        process.exit();
    });
});
