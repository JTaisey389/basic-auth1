'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/basic');
const basic = require('./middleware/basic');
const { userRouter } = require('./routes/users');

app.use(express.json());
app.use(logger);
app.use(basic);
app.use(express.urlencoded({ extended: true }));
app.use(userRouter)

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log(`server up on http://localhost:${port}`));
  }
}