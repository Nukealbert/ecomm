const express = require('../node_modules/express/lib/express');

const app = express();

app.use(express.json());

// routes imports

const product = require('./routes/productRoute');

app.use("/api/v1",product);

module.exports = app;
