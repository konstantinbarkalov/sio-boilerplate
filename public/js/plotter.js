'use strict';
function Plotter($canvas) {
  let that = this;
  let canvas = $canvas[0];
  let ctx = canvas.getContext('2d');
  let canvasWidth = 0;
  let canvasHeight = 0;
  function updateCanvasSize() {
    canvasWidth = $canvas.width();
    canvasHeight = $canvas.height();

    canvas.width = canvasWidth; 
    canvas.height = canvasHeight;   
    
    console.log('we are updating canvas size');
  }

  $(window).on('resize', () => {
    updateCanvasSize();
  })
  updateCanvasSize();

  function clearCanvas() {
    ctx.fillStyle='rgba(255,255,255,1)';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  }
  
  function rescaleXFromAudiobufferToRatio(audiobufferIndex, audiobufferLength) {
    return audiobufferIndex / audiobufferLength;
  }

  function rescaleYFromAudiobufferToRatio(audiobufferValue) {
    let min = -32768;
    let max = 32768;
    let total = max - min;
    return (audiobufferValue - min) / total;
  }

  function rescaleXFromRatioToCanvas(ratio) {
    return ratio * canvasWidth;
  }
  function rescaleYFromRatioToCanvas(ratio) {
    return ratio * canvasHeight;
  }
  that.plot = function(audiobuffer) {
    clearCanvas();
    ctx.strokeStyle = '#f00'
    
    ctx.beginPath();
    
    ctx.moveTo(0,0);

    let audiobufferLength = audiobuffer.length;

    for (let i = 0; i < audiobuffer.length; i += 10) {
      let valueY = audiobuffer[i+1];
      let valueX = i;
  
      let ratioX = rescaleXFromAudiobufferToRatio(valueX, audiobufferLength);
      let ratioY = rescaleYFromAudiobufferToRatio(valueY);

      let plotterX = rescaleXFromRatioToCanvas(ratioX);
      let plotterY = rescaleYFromRatioToCanvas(ratioY);

      ctx.lineTo(plotterX, plotterY);
    }
    ctx.stroke();
  }
}

module.exports = Plotter;