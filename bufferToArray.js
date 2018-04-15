'use strict';
function bufferToArray(buffer) {
  // =<                0   2,  4 ....n 16k
  //          buffer  x2  x2, x2 ...   16k               to []

  let byteLength = buffer.length;
  let actualLength = byteLength / 2;
  let array = [];
  for (var i = 0; i < actualLength; i++) {
    let indexInArray = i;
    let indexInBuffer = i * 2;
    
    let actualValue = buffer.readInt16LE(indexInBuffer);
    array[indexInArray] = actualValue;
    //console.log('now i is:', i);
  }
  return array;
}
module.exports = bufferToArray;