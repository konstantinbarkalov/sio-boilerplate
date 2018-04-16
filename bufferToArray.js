'use strict';
function bufferToArray(rawbuffer) {

  let rawbufferByteLength = rawbuffer.length;
  let audiobufferLength = rawbufferByteLength / 2;
  let audiobuffer = [];
  for (var i = 0; i < audiobufferLength; i++) {
    let indexInAudiobuffer = i;
    let indexInRawbuffer = i * 2;
    let decoded16bitValue = rawbuffer.readInt16LE(indexInRawbuffer);
    audiobuffer[indexInAudiobuffer] = decoded16bitValue;
  }
  return audiobuffer;
}
module.exports = bufferToArray;