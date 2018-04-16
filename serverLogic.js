'use strict';
const AudioGetter = require('./audioGetter.js');
const bufferToArray = require('./bufferToArray.js');

function ServerLogic(sio) {
  const that = this;
  console.log('serverLogic started');
  function init() {
    
    function callback(rawbuffer) {
      //  -> sound
      let audiobuffer = bufferToArray(rawbuffer);
      console.log('audiobuffer', audiobuffer.length, audiobuffer);    
      
      //  to browser ->
      sio.emit('audiobuffer', audiobuffer);
    }

    let audioGetter = new AudioGetter(callback);

  }
  init();
}
module.exports = ServerLogic;