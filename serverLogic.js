'use strict';
const AudioGetter = require('./audioGetter.js');
const bufferToArray = require('./bufferToArray.js');
function ServerLogic(sio) {
  const that = this;
  console.log('serverLogic started');
  function init() {
    
    function callback(chunk) {
      //  -> sound
      //console.log('ORIGINALCHUNK', chunk.length, chunk);    
      let array = bufferToArray(chunk);
      console.log('CONVERTEDCHUNK', array.length, array);    
      
      //  to browser ->
      sio.emit('chunk', array);
    }

    let audioGetter = new AudioGetter(callback);

    ////////
    setInterval(() => {
      sio.emit('hola', 'hola text');
    }, 2000);

    sio.on('connection', (socket) => {
      console.log('sio connection');
      socket.on('hola', () => {
        console.log('socket hola detected');
        socket.emit('ahoy', 'ahoy answer text');
      });
  
      socket.on('ahoy', () => {
        console.log('socket ahoy return detected');
      });

    });

  }
  init();
}
module.exports = ServerLogic;