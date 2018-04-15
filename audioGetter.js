let Mic = require('node-microphone');



function AudioGetter(callback) {
  //this.init = function() {};

  let options = {
  };
  let mic = new Mic(options);
  let micStream = mic.startRecording();
  
  //micStream.pipe( myWritableStream );
  //micStream.pipe( process.stdout );
  
  micStream.on('data', function(chunk) {
    callback(chunk);
    //let azaza = chunk.readInt16LE(0, chunk.length).toString(16); 
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

