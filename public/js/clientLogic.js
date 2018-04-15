'use strict';
const Plotter = require('./plotter.js');
function ClientLogic(sio) {
  const that = this;
  console.log('clientLogic started');
  function init() {
    let $canvas = $('.plot');

    let plotter = new Plotter($canvas);

    sio.on('chunk', (chunk) => {
      plotter.plot(chunk);
      console.log('CHUNK', chunk.length, chunk);
    });
 
    //////////
    setInterval(() => {
      sio.emit('hola', 'hola text');
    }, 2000);

    sio.on('hola', () => {
      console.log('hola detected');
      sio.emit('ahoy', 'ahoy answer text');
    });

    sio.on('ahoy', () => {
      console.log('ahoy return detected');
    });
 
  }
  init();
}
module.exports = ClientLogic;