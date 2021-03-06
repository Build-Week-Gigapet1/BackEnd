const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/', authRouter);
server.use('/auth', usersRouter);

// server.get('/', (req, res) => {
//   res.send("It's working! It's working!");
// });

module.exports = server;
