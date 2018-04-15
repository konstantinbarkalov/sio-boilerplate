'use strict';
const express = require('express');
const app = express();
const babelify = require('express-babelify-middleware');
const ServerLogic = require('./serverLogic.js');

let server = require('http').Server(app);
let sio = require('socket.io')(server);

server.listen(3000, () => console.log('Example app listening on port 3000!'))

app.use('/app.js', babelify('public/js/app.js'))

app.use(express.static('public/static'));








let serverLogic = new ServerLogic(sio);
