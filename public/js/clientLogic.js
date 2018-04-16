'use strict';
const Plotter = require('./plotter.js');
function ClientLogic(sio) {
  const that = this;
  console.log('clientLogic started');
  function init() {
    let $canvas = $('.plot');
    let plotter = new Plotter($canvas);
    sio.on('audiobuffer', (audiobuffer) => {
      plotter.plot(audiobuffer);
      console.log('audiobuffer', audiobuffer.length, audiobuffer);
    });
  }
  init();
}

module.exports = ClientLogic;