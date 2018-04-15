'use strict';
function ClientLogic(sio) {
  const that = this;
  console.log('clientLogic started');
  function init() {
    
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