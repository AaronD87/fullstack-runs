const express = require('express');
const app = express();

const connection = require('./middleware/connection');
const { handler } = require('./middleware/error');

app.use(require('./middleware/cors'));
app.use(express.json());
app.use('/random', connection, require('./routes/lorem'));

app.use(handler);

module.exports = app;
