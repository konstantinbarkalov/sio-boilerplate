'use strict';
function ServerLogic(sio) {
  const that = this;
  console.log('serverLogic started');
  function init() {
    
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