'use strict';

const server = require('./src/server.js');

// ======= Third party depends ===========
require('dotenv').config();
const mongoose = require('mongoose');

// ======= TESTING PORTS =================
const PORT = process.env.PORT || 3000;

// ======= Server startup sequence ========

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect('mongodb://localhost:27017/auth', options)
    .catch(error => console.error('Count not start server', error.message));
server.start(PORT);
