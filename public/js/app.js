'use strict';
const Sio = require('socket.io-client');
const ClientLogic = require('./clientLogic.js');

let sio = new Sio();
let clientLogic = new ClientLogic(sio);