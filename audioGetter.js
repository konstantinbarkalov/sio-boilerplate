let Mic = require('node-microphone');



function AudioGetter(callback) {
  
  let options = {
  };
  let mic = new Mic(options);
  let micStream = mic.startRecording();
  
  micStream.on('data', function(rawbuffer) {
    callback(rawbuffer);
  });
    
  
  // setTimeout(function() {
  //     console.log('stopped recording');
  //     mic.stopRecording();
  // }, 30000);
  
  mic.on('info', (info) => {
    console.log(info);
  });
  
  mic.on('error', (error) => {
    console.log(error);
  });
  
}

module.exports = AudioGetter;

