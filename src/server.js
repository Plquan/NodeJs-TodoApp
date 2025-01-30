const express = require('express');
const app = express();
const path = require('path');
const configViewEngine = require('./config/viewEngine');
require('dotenv').config();

const webRoutes = require('./routes/web');

configViewEngine(app);
app.use('/test', webRoutes);

const PORT = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME || 'localhost';
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

