const express = require('express');
const app = express();
const path = require('path');
const configViewEngine = require('./config/viewEngine');
require('dotenv').config();
const mysql = require("mysql2");
const webRoutes = require('./routes/web');

configViewEngine(app);
app.use('/test', webRoutes);

//test connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'test'
});

connection.query('SELECT * FROM users', function (err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows);
});

const PORT = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME || 'localhost';
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

